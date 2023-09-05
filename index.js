
const process = require('process');
const { MongoClient } = require("mongodb");
const realm_config = require("./realm_config.json");
const functions = {
    tshirt: require("./functions/tshirt"),
    hello: require("./functions/hello")
};

debugger;

const env = process.argv[2];
const { values } = env == "local" ? require(`./environments/${env}.json`) : require(`./environments/${env}.json`);

const services = {
    "privado": {
        "url": "mongodb+srv://robsonjesus908:hWkMI3UfU9ihS3KH@devtesting.8ko1ona.mongodb.net/?appName=mongosh+1.10.6"
    },
    "development": {
        "url": "mongodb+srv://robson:JufjhNXAy9qoR0Dg@mongodb-mdm-dev.ceszd.mongodb.net/mdm-dev"
    },
    "local": {
        "url": "mongodb://localhost:27017/"
    }
}

global.context = {
    // whichever global context methods you want to mock.
    // 'services', 'functions', values, etc.
    app: {
        "id": realm_config.app_id,
        "clientAppId": realm_config.app_id,
        "name": realm_config.name,
        "projectId": "string",
        "deployment": {
            "model": realm_config.deployment_model,
            "providerRegion": realm_config.provider_region,
        }
    },
    environment: {
        tag: env,
        values: values
    },
    values,
    functions,
    services: {
        get: (serviceName) => {
            const client = new MongoClient(uri);   
        }
    }
}

global.context.functions.tshirt({ name: "t" });