 /* eslint-disable */

/**
 * @fileoverview gRPC-Web generated client stub for xcite.iot.postgislookup.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var x$cite_io_protos_model_basic_pb = require('../../../x-cite.io/protos/model/basic_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var googleapis_google_type_latlng_pb = require('../../../googleapis/google/type/latlng_pb.js')
const proto = {};
proto.xcite = {};
proto.xcite.iot = {};
proto.xcite.iot.postgislookup = {};
proto.xcite.iot.postgislookup.v1 = require('./postgislookup_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.xcite.iot.postgislookup.v1.EstimateDistanceClient =
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
proto.xcite.iot.postgislookup.v1.EstimateDistancePromiseClient =
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.postgislookup.v1.DistanceRequest,
 *   !proto.xcite.iot.postgislookup.v1.DistanceResponse>}
 */
const methodInfo_EstimateDistance_GetDistance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.postgislookup.v1.DistanceResponse,
  /** @param {!proto.xcite.iot.postgislookup.v1.DistanceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.postgislookup.v1.DistanceResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.postgislookup.v1.DistanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.postgislookup.v1.DistanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.postgislookup.v1.DistanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.postgislookup.v1.EstimateDistanceClient.prototype.getDistance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.postgislookup.v1.EstimateDistance/GetDistance',
      request,
      metadata || {},
      methodInfo_EstimateDistance_GetDistance,
      callback);
};


/**
 * @param {!proto.xcite.iot.postgislookup.v1.DistanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.postgislookup.v1.DistanceResponse>}
 *     A native promise that resolves to the response
 */
proto.xcite.iot.postgislookup.v1.EstimateDistancePromiseClient.prototype.getDistance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/xcite.iot.postgislookup.v1.EstimateDistance/GetDistance',
      request,
      metadata || {},
      methodInfo_EstimateDistance_GetDistance);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.postgislookup.v1.DistanceRequest,
 *   !proto.xcite.iot.postgislookup.v1.DistanceResponse>}
 */
const methodInfo_EstimateDistance_ListDistances = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.postgislookup.v1.DistanceResponse,
  /** @param {!proto.xcite.iot.postgislookup.v1.DistanceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.postgislookup.v1.DistanceResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.postgislookup.v1.DistanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.postgislookup.v1.DistanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.postgislookup.v1.DistanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.postgislookup.v1.EstimateDistanceClient.prototype.listDistances =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.postgislookup.v1.EstimateDistance/ListDistances',
      request,
      metadata || {},
      methodInfo_EstimateDistance_ListDistances,
      callback);
};


/**
 * @param {!proto.xcite.iot.postgislookup.v1.DistanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.postgislookup.v1.DistanceResponse>}
 *     A native promise that resolves to the response
 */
proto.xcite.iot.postgislookup.v1.EstimateDistancePromiseClient.prototype.listDistances =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/xcite.iot.postgislookup.v1.EstimateDistance/ListDistances',
      request,
      metadata || {},
      methodInfo_EstimateDistance_ListDistances);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.postgislookup.v1.DistanceRequest,
 *   !proto.xcite.iot.postgislookup.v1.Alert>}
 */
const methodInfo_EstimateDistance_CreateAlert = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.postgislookup.v1.Alert,
  /** @param {!proto.xcite.iot.postgislookup.v1.DistanceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.postgislookup.v1.Alert.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.postgislookup.v1.DistanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.postgislookup.v1.Alert)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.postgislookup.v1.Alert>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.postgislookup.v1.EstimateDistanceClient.prototype.createAlert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.postgislookup.v1.EstimateDistance/CreateAlert',
      request,
      metadata || {},
      methodInfo_EstimateDistance_CreateAlert,
      callback);
};


/**
 * @param {!proto.xcite.iot.postgislookup.v1.DistanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.postgislookup.v1.Alert>}
 *     A native promise that resolves to the response
 */
proto.xcite.iot.postgislookup.v1.EstimateDistancePromiseClient.prototype.createAlert =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/xcite.iot.postgislookup.v1.EstimateDistance/CreateAlert',
      request,
      metadata || {},
      methodInfo_EstimateDistance_CreateAlert);
};


module.exports = proto.xcite.iot.postgislookup.v1;

