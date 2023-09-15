const execute = require("../init");

const meterInfo = {
  meter_info: {
    meter_brand: "282",
    serial_number: "000002301150775",
    reading_date: { $date: "2023-09-08T17:50:00.000Z" },
    measurement_unit: "kWh",
    measurement_type: "real",
    measurement_reason: "initial",
  },
};
const installation = {
  installation_code: "PT0002000080277736MB",
  installation_info: {
    potency: "",
    tar: "",
    cycle: "",
    geographic_information: "",
    profile: "",
    estimative_method: "",
    grms: "",
    service_type: "electricity",
    utility_type: "electricity",
  },
};

execute("f_meter_installation", meterInfo, installation);
