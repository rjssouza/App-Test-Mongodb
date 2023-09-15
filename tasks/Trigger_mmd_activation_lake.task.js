const execute = require("../init");

execute("Trigger_mmd_activation_lake", {
  _id: {
    _data:
      "8265006067000000012B022C0100296E5A10045EB498A951764075AE4EDC3531151F4546645F6964006465006067EF23957FE27FAA300004",
  },
  operationType: "insert",
  clusterTime: {
    $timestamp: {
      t: 1694523495,
      i: 1,
    },
  },
  wallTime: "2023-09-12T12:58:15.514Z",
  fullDocument: {
    _id: "6504341ed1f2370874cfcd48",
    source_system: "marte",
    utility_type: "electricity",
    publish_date: {
      $date: "2023-09-08T17:50:00.000Z",
    },
    status: "",
    activation_info: {
      switch_info: {
        switch_id: "COM0121EE20229024236800",
        step: "D041",
        flow: "P5100",
        external_id: "",
      },
      meters: [
        {
          meter_info: {
            manufacturer: "282",
            model: "",
            serial_number: "000002301150775",
            timeband_count: 3,
            ptz: "",
            pressure: "",
            consumption_profile: "",
          },
          delivery_point: {
            installed_power: "",
            tar: "",
            cycle: "",
            geographic_information: "",
            profile: "",
            estimative_method: "",
            grms: "",
          },
        },
      ],
      readings_list: [
        {
          installation_code: "PT0002000080277736MB",
          utility_type: "electricity",
          meter_info: {
            manufacturer: "282",
            model: "",
            serial_number: "000002301150775",
            timeband_count: 3,
          },
          measurement_unit: "kWh",
          reading_timestamp: {
            $date: "2023-08-14T00:00:00.000Z",
          },
          reading_reason: "initial",
          reading_source: "dso",
          reading_source_ref: "COM0121EE20229024236800",
          reading_type: "real",
          readings: [
            {
              tariff_name: "off-peak",
              value: 11,
            },
            {
              tariff_name: "peak",
              value: 32,
            },
            {
              tariff_name: "shoulder",
              value: 43,
            },
          ],
        },
      ],
    },
  },
  ns: {
    db: "mdm-dev",
    coll: "mmd_activation_lake",
  },
  documentKey: {
    _id: "65006067ef23957fe27faa30",
  },
});
