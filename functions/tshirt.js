const v8n = require("v8n");

const validate_name = (name) => {
    return v8n()
        .string()
        .minLength(3)
        .check(name);
} 

const saveTshirt = async (tshirt) => {
    validate_name(tshirt.name);

    var serviceName = "mongodb-atlas";
 
    var dbName = context.values.get("DATABASE")
    var dbDailyReadings = "tshirt";
    debugger;

    var collection = context.services.get(serviceName).db(dbName).collection(dbDailyReadings);
    const findResult = await collection.find().toArray();

    return true;
};

// Function exported to App Services
exports = saveTshirt;

// export locally for use in unit test
if (typeof module !== "undefined") {
    module.exports = saveTshirt;
}