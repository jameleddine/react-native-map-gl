 /* eslint-disable */

/**
 * @fileoverview gRPC-Web generated client stub for xcite.iot.parkingsensor.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var x$cite_io_protos_model_basic_pb = require('../../../x-cite.io/protos/model/basic_pb.js')

var x$cite_io_protos_model_parkingsensor_pb = require('../../../x-cite.io/protos/model/parkingsensor_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.xcite = {};
proto.xcite.iot = {};
proto.xcite.iot.parkingsensor = {};
proto.xcite.iot.parkingsensor.v1 = require('./parkingsensor_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.xcite.iot.parkingsensor.v1.ParkingSensorClient =
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
proto.xcite.iot.parkingsensor.v1.ParkingSensorPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.xcite.iot.parkingsensor.v1.ParkingSensorClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.xcite.iot.parkingsensor.v1.ParkingSensorClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.model.v1.ParkingSensorReport,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_ParkingSensor_CreateReport = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.model.v1.ParkingSensorReport} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.model.v1.ParkingSensorReport} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.parkingsensor.v1.ParkingSensorClient.prototype.createReport =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.parkingsensor.v1.ParkingSensor/CreateReport',
      request,
      metadata,
      methodInfo_ParkingSensor_CreateReport,
      callback);
};


/**
 * @param {!proto.xcite.iot.model.v1.ParkingSensorReport} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.parkingsensor.v1.ParkingSensorPromiseClient.prototype.createReport =
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
 *   !proto.xcite.iot.parkingsensor.v1.ListReportsRequest,
 *   !proto.xcite.iot.parkingsensor.v1.ListReportsResponse>}
 */
const methodInfo_ParkingSensor_ListReports = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.parkingsensor.v1.ListReportsResponse,
  /** @param {!proto.xcite.iot.parkingsensor.v1.ListReportsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.parkingsensor.v1.ListReportsResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.parkingsensor.v1.ListReportsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.parkingsensor.v1.ListReportsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.parkingsensor.v1.ListReportsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.parkingsensor.v1.ParkingSensorClient.prototype.listReports =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.parkingsensor.v1.ParkingSensor/ListReports',
      request,
      metadata,
      methodInfo_ParkingSensor_ListReports,
      callback);
};


/**
 * @param {!proto.xcite.iot.parkingsensor.v1.ListReportsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.parkingsensor.v1.ListReportsResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.parkingsensor.v1.ParkingSensorPromiseClient.prototype.listReports =
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
 *   !proto.xcite.iot.parkingsensor.v1.SensorList,
 *   !proto.xcite.iot.parkingsensor.v1.ListLatestReportsResponse>}
 */
const methodInfo_ParkingSensor_ListLatestReports = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.parkingsensor.v1.ListLatestReportsResponse,
  /** @param {!proto.xcite.iot.parkingsensor.v1.SensorList} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.parkingsensor.v1.ListLatestReportsResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.parkingsensor.v1.SensorList} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.parkingsensor.v1.ListLatestReportsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.parkingsensor.v1.ListLatestReportsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.parkingsensor.v1.ParkingSensorClient.prototype.listLatestReports =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.parkingsensor.v1.ParkingSensor/ListLatestReports',
      request,
      metadata,
      methodInfo_ParkingSensor_ListLatestReports,
      callback);
};


/**
 * @param {!proto.xcite.iot.parkingsensor.v1.SensorList} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.parkingsensor.v1.ListLatestReportsResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.parkingsensor.v1.ParkingSensorPromiseClient.prototype.listLatestReports =
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
 *   !proto.xcite.iot.parkingsensor.v1.SensorListByTimestamp,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_ParkingSensor_DeleteReportsByTimeStamp = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.parkingsensor.v1.SensorListByTimestamp} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.parkingsensor.v1.SensorListByTimestamp} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.parkingsensor.v1.ParkingSensorClient.prototype.deleteReportsByTimeStamp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.parkingsensor.v1.ParkingSensor/DeleteReportsByTimeStamp',
      request,
      metadata,
      methodInfo_ParkingSensor_DeleteReportsByTimeStamp,
      callback);
};


/**
 * @param {!proto.xcite.iot.parkingsensor.v1.SensorListByTimestamp} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.parkingsensor.v1.ParkingSensorPromiseClient.prototype.deleteReportsByTimeStamp =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteReportsByTimeStamp(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.xcite.iot.parkingsensor.v1;

