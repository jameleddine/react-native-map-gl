/* eslint-disable */
const { ListReportsRequest } = require("./x-cite.io/protos/sensors/sensors_pb");
const { SensorsClient } = require("./x-cite.io/protos/sensors/sensors_grpc_web_pb");

const { configConstants } = require("../constants/config.constants");
var google_protobuf_timestamp_pb = require("google-protobuf/google/protobuf/timestamp_pb.js");

var x$cite_io_brain_proto_model_basic_pb = require("./x-cite.io/protos/model/basic_pb");
var  {EnvironmentReportMCF88}  = require("./x-cite.io/protos/environment/mcf88_pb");


export class SensorService {
  constructor() {
    // this.metadata = { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('persist:auth')) ? JSON.parse(localStorage.getItem('persist:auth')).token.replace(/['"]+/g, '') : ""}` };
    this.stream = null;
  }


  //define service account get all element
  getListReportsService([], callbackstatus, callbackdata) {

    // Create  client
    var client = new SensorsClient(configConstants.apiEndpoint);
    var listReportsRequest = new ListReportsRequest();
    var startTime = new google_protobuf_timestamp_pb.Timestamp();
    var endTime = new google_protobuf_timestamp_pb.Timestamp();
    var uuidobject = new x$cite_io_brain_proto_model_basic_pb.UUID();
    var MCF88_REPORT = x$cite_io_brain_proto_model_basic_pb.ReportSchema.MCF88_REPORT
    var ENVIRONMENT_REPORT = x$cite_io_brain_proto_model_basic_pb.ReportSchema.ENVIRONMENT_REPORT

    uuidobject.setUuid("test");
    listReportsRequest.addThingId(uuidobject)
    
    listReportsRequest.addReportTypes(MCF88_REPORT)
    listReportsRequest.addReportTypes(ENVIRONMENT_REPORT)

    listReportsRequest.setLimit(1)
    listReportsRequest.setOffset(0)
    

    console.log("listReportsRequest", listReportsRequest.toObject())
    // gRPC stream call
    var res = client.listReports(listReportsRequest, {});

    res.on("data", callbackdata);
    res.on("status", callbackstatus);
  }




}
