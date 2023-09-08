const _ = require("lodash");
const process = require("process");
const { MongoClient } = require("mongodb");
const realm_config = require("./realm_config.json");
const _env = process.argv[2];
const _fn = process.argv[3];

if (!_env) throw new Error("Env e obrigatorio");
if (!_fn) throw new Error("Necessário indicar função");

const args =
  process.argv.length <= 4
    ? []
    : _(process.argv)
        .drop(3)
        .take(process.argv.length)
        .value()
        .map(function (v) {
          try {
            return JSON.parse(v);
          } catch (err) {
            return v;
          }
        });

const execute = async (fn, ...argArray) => {
  var body = `global.context.functions.${fn}(...arguments);`;
  var func = new Function(body);
  func.call(...argArray);
};

const functions = {
  tshirt: require("./functions/tshirt"),
  hello: require("./functions/hello"),
  execute,
};

const { values } =
  _env == "local"
    ? require(`./environments/no-environment.json`)
    : require(`./environments/${_env}.json`);

const services = [
  {
    nome: "DevTesting-mongodb-atlas",
    url: "mongodb+srv://robsonjesus908:hWkMI3UfU9ihS3KH@devtesting.8ko1ona.mongodb.net/?appName=mongosh+1.10.6",
  },
  {
    nome: "development-mongodb-atlas",
    url: "mongodb+srv://robsonjesus908:hWkMI3UfU9ihS3KH@devtesting.8ko1ona.mongodb.net/?appName=mongosh+1.10.6",
  },
  {
    nome: "local-mongodb-atlas",
    url: "mongodb://localhost:27017/",
  },
];

global.context = {
  // whichever global context methods you want to mock.
  // 'services', 'functions', values, etc.
  app: {
    id: realm_config.app_id,
    clientAppId: realm_config.app_id,
    name: realm_config.name,
    projectId: "string",
    deployment: {
      model: realm_config.deployment_model,
      providerRegion: realm_config.provider_region,
    },
  },
  environment: {
    tag: _env,
    values: values,
  },
  values: {
    get: (valueName) => {
      const valueObj = require(`./values/${valueName}`);

      return valueObj.value;
    },
  },
  functions,
  services: {
    get: (serviceName) => {
      let client = _.find(services, function (service) {
        return service.nome === serviceName;
      });

      const mongoClient = new MongoClient(client.url);

      return mongoClient;
    },
  },
};

execute(_fn, ...args).then(() => {
  setTimeout(function () {
    return process.exit(22);
  }, 5000);
});
