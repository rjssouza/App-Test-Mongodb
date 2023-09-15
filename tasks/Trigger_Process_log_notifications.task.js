const execute = require("../init");

execute("Trigger_Process_log_notifications", {
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
    _id: "65006067ef23957fe27faa30",
    topic: "create_technical_data",
    content: {
      status: "success",
      _id: "65006067c9de4d65f03a425e",
    },
    created_at: "2023-09-12T12:58:15.490Z",
    status: "new",
  },
  ns: {
    db: "mdm-dev",
    coll: "log_notifications",
  },
  documentKey: {
    _id: "65006067ef23957fe27faa30",
  },
});
