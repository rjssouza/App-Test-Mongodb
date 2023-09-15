const execute = require("../init");

execute("Trigger_Process_req_data_requests", {
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
    _id: "64f6535c2a9246b696f9b24d",
    topic: "billing_request",
    publish_date: {
      $date: "2023-09-04T21:59:56.000Z",
    },
    content: {
      external_id: "P230100000507",
      installation_code: "PT9905409951512720EX",
      service_type: "surplus",
      granularity: "daily",
      period_from: {
        $date: "2021-10-01T00:00:00.000Z",
      },
      period_to: {
        $date: "2021-12-31T23:59:59.000Z",
      },
      source_system: "bc",
    },
  },
  ns: {
    db: "mdm-dev",
    coll: "req_data_requests",
  },
  documentKey: {
    _id: "64f6535c2a9246b696f9b24d",
  },
});
