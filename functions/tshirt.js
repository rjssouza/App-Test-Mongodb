const v8n = require("v8n");

const validateName = (name) => {
  return v8n().string().minLength(3).check(name);
};

const saveTshirt = async (tshirt) => {
  validateName(tshirt.name);
  const serviceName = context.environment.tag + "-mongodb-atlas";
  const dbName = context.values.get("DATABASE");
  const dbDailyReadings = "tshirt";

  const collection = context.services
    .get(serviceName)
    .db(dbName)
    .collection(dbDailyReadings);
  const resInsert = await collection.insertOne(tshirt);
  // const findResult = await collection.find().toArray();
  return resInsert;
};

// Function exported to App Services
exports = saveTshirt;

// export locally for use in unit test
if (typeof module !== "undefined") {
  module.exports = saveTshirt;
}
