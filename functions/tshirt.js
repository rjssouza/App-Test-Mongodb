const tshirtContext = require("tshirt");

const saveTshirt = (tshirt) => {

    var serviceName = "mongodb-atlas";
 
    var dbName = "mdm-dev"; // context.values.get("DATABASE")
    var dbDailyReadings = "mdm_measures_data";
    var dbReadings = "mdm_measures_lake";
    debugger;

    var meter_collection = context.services.get(serviceName).db(dbName).collection('mmd_meters');
    var meter_install = context.services.get(serviceName).db(dbName).collection('mmd_meter_installations');
    var install_collection = context.services.get(serviceName).db(dbName).collection('mmd_installations');
    
// goldenergy.atlassian.net
    tshirtContext.saveTshirt(tshirt);
};

// Function exported to App Services
exports = saveTshirt;

// export locally for use in unit test
if (typeof module !== "undefined") {
    module.exports = saveTshirt;
}