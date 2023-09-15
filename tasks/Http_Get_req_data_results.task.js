const execute = require("../init");

const headers = {
  "X-Cluster-Client-Ip": ["94.60.180.79"],
  "User-Agent": ["PostmanRuntime/7.32.1"],
  "Cache-Control": ["no-cache"],
  "X-Request-Id": ["7b4e076c-873e-4f27-8944-a056839bc168"],
  "X-Forwarded-For": ["94.60.180.79"],
  "X-Envoy-External-Address": ["94.60.180.79"],
  "Postman-Token": ["d3ca11ed-005d-41cb-a847-c1f6458ab293"],
  "Accept-Encoding": ["gzip, deflate, br"],
  "X-Forwarded-Client-Cert": [
    "By=spiffe://xgen-prod/ns/baas-prod/sa/baas-main;Hash=c68c5aa61293af7317ce95a81111deb355d7f6acdfabeb775e95a468d14f947a;Subject=",
  ],
  Traceparent: ["00-c51f47649c6be2b995c9e2e81de36bd1-ec38dafa432fc9b5-00"],
  Accept: ["*/*"],
  "X-Forwarded-Proto": ["https"],
};

const query = { installation_code: "PT9905029844968032EI" };
const body = undefined;
const response = undefined;

execute("Http_Get_req_data_results", { query, headers, body }, response);
