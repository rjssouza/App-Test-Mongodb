const _ = require("lodash");
const process = require("process");
const { MongoMemoryServer } = require("mongodb-memory-server");
const { MongoClient } = require("mongodb");
const realm_config = require("../realm_config.json");

let _env = "local";

// This will create an new instance of "MongoMemoryServer" and automatically start it
const execute = async (fn, ...argArray) => {
  var callFn = require(`../functions/${fn}.js`);
  return callFn(...argArray);
};

const executeInternal = async (fn, ...argArray) => {
  var callFn = require(`../functions/${fn}.js`);
  callFn(...argArray).then(() => {
    setTimeout(function () {
      return process.exit(22);
    }, timeLimit);
  });
};

const functions = {
  execute,
};

const { values } =
  _env == "local"
    ? require(`../environments/no-environment.json`)
    : require(`../environments/${_env}.json`);

global.timeLimit = 2000;

module.exports = executeInternal;
let mongod;

beforeEach(async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  console.log(`Instancia local memoria mongodb: ${uri}`);
  const services = [
    {
      nome: "local-mongodb-atlas",
      url: uri,
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
        const valueObj = require(`../values/${valueName}`);

        return valueObj.value;
      },
    },
    http: {
      post: async (options) => {
        return { statusCode: 200 };
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
});
// removes context from global namespace after each test
afterEach(async () => {
  await mongod.stop();
  delete global.context;
});
