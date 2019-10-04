 /* eslint-disable */

/**
 * @fileoverview gRPC-Web generated client stub for xcite.iot.frontend.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var x$cite_io_protos_model_basic_pb = require('../../../x-cite.io/protos/model/basic_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
const proto = {};
proto.xcite = {};
proto.xcite.iot = {};
proto.xcite.iot.frontend = {};
proto.xcite.iot.frontend.v1 = require('./sensors_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.xcite.iot.frontend.v1.SensorsClient =
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
proto.xcite.iot.frontend.v1.SensorsPromiseClient =
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
 *   !proto.xcite.iot.model.v1.ThingRequest,
 *   !proto.xcite.iot.model.v1.EnvironmentResponse>}
 */
const methodInfo_Sensors_ListEnvironmentData = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.EnvironmentResponse,
  /** @param {!proto.xcite.iot.model.v1.ThingRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.EnvironmentResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.model.v1.ThingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.EnvironmentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.EnvironmentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.frontend.v1.SensorsClient.prototype.listEnvironmentData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.frontend.v1.Sensors/ListEnvironmentData',
      request,
      metadata || {},
      methodInfo_Sensors_ListEnvironmentData,
      callback);
};


/**
 * @param {!proto.xcite.iot.model.v1.ThingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.EnvironmentResponse>}
 *     A native promise that resolves to the response
 */
proto.xcite.iot.frontend.v1.SensorsPromiseClient.prototype.listEnvironmentData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/xcite.iot.frontend.v1.Sensors/ListEnvironmentData',
      request,
      metadata || {},
      methodInfo_Sensors_ListEnvironmentData);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.model.v1.ThingRequest,
 *   !proto.xcite.iot.model.v1.ParticleSensorResponse>}
 */
const methodInfo_Sensors_ListParticleSensorData = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ParticleSensorResponse,
  /** @param {!proto.xcite.iot.model.v1.ThingRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ParticleSensorResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.model.v1.ThingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ParticleSensorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ParticleSensorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.frontend.v1.SensorsClient.prototype.listParticleSensorData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.frontend.v1.Sensors/ListParticleSensorData',
      request,
      metadata || {},
      methodInfo_Sensors_ListParticleSensorData,
      callback);
};


/**
 * @param {!proto.xcite.iot.model.v1.ThingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ParticleSensorResponse>}
 *     A native promise that resolves to the response
 */
proto.xcite.iot.frontend.v1.SensorsPromiseClient.prototype.listParticleSensorData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/xcite.iot.frontend.v1.Sensors/ListParticleSensorData',
      request,
      metadata || {},
      methodInfo_Sensors_ListParticleSensorData);
};


module.exports = proto.xcite.iot.frontend.v1;

