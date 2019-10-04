 /* eslint-disable */
/**
 * @fileoverview gRPC-Web generated client stub for xcite.iot.sensors.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var x$cite_io_protos_model_basic_pb = require('../../../x-cite.io/protos/model/basic_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.xcite = {};
proto.xcite.iot = {};
proto.xcite.iot.sensors = {};
proto.xcite.iot.sensors.v1 = require('./sensors_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.xcite.iot.sensors.v1.SensorsClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.xcite.iot.sensors.v1.SensorsPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.xcite.iot.sensors.v1.SensorsClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.xcite.iot.sensors.v1.SensorsClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.sensors.v1.CreateReportRequest,
 *   !proto.xcite.iot.sensors.v1.CreateReportResponse>}
 */
const methodInfo_Sensors_CreateReport = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.sensors.v1.CreateReportResponse,
  /** @param {!proto.xcite.iot.sensors.v1.CreateReportRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.sensors.v1.CreateReportResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.sensors.v1.CreateReportRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.sensors.v1.CreateReportResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.sensors.v1.CreateReportResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.sensors.v1.SensorsClient.prototype.createReport =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.sensors.v1.Sensors/CreateReport',
      request,
      metadata,
      methodInfo_Sensors_CreateReport,
      callback);
};


/**
 * @param {!proto.xcite.iot.sensors.v1.CreateReportRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.sensors.v1.CreateReportResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.sensors.v1.SensorsPromiseClient.prototype.createReport =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createReport(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.sensors.v1.ListReportsRequest,
 *   !proto.xcite.iot.sensors.v1.ListReportsResponse>}
 */
const methodInfo_Sensors_ListReports = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.sensors.v1.ListReportsResponse,
  /** @param {!proto.xcite.iot.sensors.v1.ListReportsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.sensors.v1.ListReportsResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.sensors.v1.ListReportsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.sensors.v1.ListReportsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.sensors.v1.ListReportsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.sensors.v1.SensorsClient.prototype.listReports =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.sensors.v1.Sensors/ListReports',
      request,
      metadata,
      methodInfo_Sensors_ListReports,
      callback);
};


/**
 * @param {!proto.xcite.iot.sensors.v1.ListReportsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.sensors.v1.ListReportsResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.sensors.v1.SensorsPromiseClient.prototype.listReports =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listReports(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.sensors.v1.ListLatestReportsRequest,
 *   !proto.xcite.iot.sensors.v1.ListLatestReportsResponse>}
 */
const methodInfo_Sensors_ListLatestReports = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.sensors.v1.ListLatestReportsResponse,
  /** @param {!proto.xcite.iot.sensors.v1.ListLatestReportsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.sensors.v1.ListLatestReportsResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.sensors.v1.ListLatestReportsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.sensors.v1.ListLatestReportsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.sensors.v1.ListLatestReportsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.sensors.v1.SensorsClient.prototype.listLatestReports =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.sensors.v1.Sensors/ListLatestReports',
      request,
      metadata,
      methodInfo_Sensors_ListLatestReports,
      callback);
};


/**
 * @param {!proto.xcite.iot.sensors.v1.ListLatestReportsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.sensors.v1.ListLatestReportsResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.sensors.v1.SensorsPromiseClient.prototype.listLatestReports =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listLatestReports(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.sensors.v1.DeleteReportsByTimestampRequest,
 *   !proto.xcite.iot.sensors.v1.DeleteReportsByTimestampResponse>}
 */
const methodInfo_Sensors_DeleteReportsByTimestamp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.sensors.v1.DeleteReportsByTimestampResponse,
  /** @param {!proto.xcite.iot.sensors.v1.DeleteReportsByTimestampRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.sensors.v1.DeleteReportsByTimestampResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.sensors.v1.DeleteReportsByTimestampRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.sensors.v1.DeleteReportsByTimestampResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.sensors.v1.DeleteReportsByTimestampResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.sensors.v1.SensorsClient.prototype.deleteReportsByTimestamp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.sensors.v1.Sensors/DeleteReportsByTimestamp',
      request,
      metadata,
      methodInfo_Sensors_DeleteReportsByTimestamp,
      callback);
};


/**
 * @param {!proto.xcite.iot.sensors.v1.DeleteReportsByTimestampRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.sensors.v1.DeleteReportsByTimestampResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.sensors.v1.SensorsPromiseClient.prototype.deleteReportsByTimestamp =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteReportsByTimestamp(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.xcite.iot.sensors.v1;

