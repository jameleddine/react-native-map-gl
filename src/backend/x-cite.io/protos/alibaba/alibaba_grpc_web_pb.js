 /* eslint-disable */

/**
 * @fileoverview gRPC-Web generated client stub for xcite.iot.alibaba.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.xcite = {};
proto.xcite.iot = {};
proto.xcite.iot.alibaba = {};
proto.xcite.iot.alibaba.v1 = require('./alibaba_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.xcite.iot.alibaba.v1.IotAlibabaClient =
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
proto.xcite.iot.alibaba.v1.IotAlibabaPromiseClient =
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
 *   !proto.xcite.iot.alibaba.v1.RegisterRequest,
 *   !proto.xcite.iot.alibaba.v1.Response>}
 */
const methodInfo_IotAlibaba_RegisterDevice = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.alibaba.v1.Response,
  /** @param {!proto.xcite.iot.alibaba.v1.RegisterRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.alibaba.v1.Response.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.alibaba.v1.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.alibaba.v1.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.alibaba.v1.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.alibaba.v1.IotAlibabaClient.prototype.registerDevice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.alibaba.v1.IotAlibaba/RegisterDevice',
      request,
      metadata || {},
      methodInfo_IotAlibaba_RegisterDevice,
      callback);
};


/**
 * @param {!proto.xcite.iot.alibaba.v1.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.alibaba.v1.Response>}
 *     A native promise that resolves to the response
 */
proto.xcite.iot.alibaba.v1.IotAlibabaPromiseClient.prototype.registerDevice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/xcite.iot.alibaba.v1.IotAlibaba/RegisterDevice',
      request,
      metadata || {},
      methodInfo_IotAlibaba_RegisterDevice);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.alibaba.v1.QueryDeviceRequest,
 *   !proto.xcite.iot.alibaba.v1.QueryDeviceResponse>}
 */
const methodInfo_IotAlibaba_QueryDevice = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.alibaba.v1.QueryDeviceResponse,
  /** @param {!proto.xcite.iot.alibaba.v1.QueryDeviceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.alibaba.v1.QueryDeviceResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.alibaba.v1.QueryDeviceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.alibaba.v1.QueryDeviceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.alibaba.v1.QueryDeviceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.alibaba.v1.IotAlibabaClient.prototype.queryDevice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.alibaba.v1.IotAlibaba/QueryDevice',
      request,
      metadata || {},
      methodInfo_IotAlibaba_QueryDevice,
      callback);
};


/**
 * @param {!proto.xcite.iot.alibaba.v1.QueryDeviceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.alibaba.v1.QueryDeviceResponse>}
 *     A native promise that resolves to the response
 */
proto.xcite.iot.alibaba.v1.IotAlibabaPromiseClient.prototype.queryDevice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/xcite.iot.alibaba.v1.IotAlibaba/QueryDevice',
      request,
      metadata || {},
      methodInfo_IotAlibaba_QueryDevice);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.alibaba.v1.IoTId,
 *   !proto.xcite.iot.alibaba.v1.Response>}
 */
const methodInfo_IotAlibaba_DeleteDevice = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.alibaba.v1.Response,
  /** @param {!proto.xcite.iot.alibaba.v1.IoTId} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.alibaba.v1.Response.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.alibaba.v1.IoTId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.alibaba.v1.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.alibaba.v1.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.alibaba.v1.IotAlibabaClient.prototype.deleteDevice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.alibaba.v1.IotAlibaba/DeleteDevice',
      request,
      metadata || {},
      methodInfo_IotAlibaba_DeleteDevice,
      callback);
};


/**
 * @param {!proto.xcite.iot.alibaba.v1.IoTId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.alibaba.v1.Response>}
 *     A native promise that resolves to the response
 */
proto.xcite.iot.alibaba.v1.IotAlibabaPromiseClient.prototype.deleteDevice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/xcite.iot.alibaba.v1.IotAlibaba/DeleteDevice',
      request,
      metadata || {},
      methodInfo_IotAlibaba_DeleteDevice);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.alibaba.v1.Query,
 *   !proto.xcite.iot.alibaba.v1.Response>}
 */
const methodInfo_IotAlibaba_QueryDeviceEventData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.alibaba.v1.Response,
  /** @param {!proto.xcite.iot.alibaba.v1.Query} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.alibaba.v1.Response.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.alibaba.v1.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.alibaba.v1.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.alibaba.v1.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.alibaba.v1.IotAlibabaClient.prototype.queryDeviceEventData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.alibaba.v1.IotAlibaba/QueryDeviceEventData',
      request,
      metadata || {},
      methodInfo_IotAlibaba_QueryDeviceEventData,
      callback);
};


/**
 * @param {!proto.xcite.iot.alibaba.v1.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.alibaba.v1.Response>}
 *     A native promise that resolves to the response
 */
proto.xcite.iot.alibaba.v1.IotAlibabaPromiseClient.prototype.queryDeviceEventData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/xcite.iot.alibaba.v1.IotAlibaba/QueryDeviceEventData',
      request,
      metadata || {},
      methodInfo_IotAlibaba_QueryDeviceEventData);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.alibaba.v1.IoTId,
 *   !proto.xcite.iot.alibaba.v1.Response>}
 */
const methodInfo_IotAlibaba_DisableThing = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.alibaba.v1.Response,
  /** @param {!proto.xcite.iot.alibaba.v1.IoTId} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.alibaba.v1.Response.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.alibaba.v1.IoTId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.alibaba.v1.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.alibaba.v1.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.alibaba.v1.IotAlibabaClient.prototype.disableThing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.alibaba.v1.IotAlibaba/DisableThing',
      request,
      metadata || {},
      methodInfo_IotAlibaba_DisableThing,
      callback);
};


/**
 * @param {!proto.xcite.iot.alibaba.v1.IoTId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.alibaba.v1.Response>}
 *     A native promise that resolves to the response
 */
proto.xcite.iot.alibaba.v1.IotAlibabaPromiseClient.prototype.disableThing =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/xcite.iot.alibaba.v1.IotAlibaba/DisableThing',
      request,
      metadata || {},
      methodInfo_IotAlibaba_DisableThing);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.alibaba.v1.IoTId,
 *   !proto.xcite.iot.alibaba.v1.Response>}
 */
const methodInfo_IotAlibaba_EnableThing = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.alibaba.v1.Response,
  /** @param {!proto.xcite.iot.alibaba.v1.IoTId} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.alibaba.v1.Response.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.alibaba.v1.IoTId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.alibaba.v1.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.alibaba.v1.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.alibaba.v1.IotAlibabaClient.prototype.enableThing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.alibaba.v1.IotAlibaba/EnableThing',
      request,
      metadata || {},
      methodInfo_IotAlibaba_EnableThing,
      callback);
};


/**
 * @param {!proto.xcite.iot.alibaba.v1.IoTId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.alibaba.v1.Response>}
 *     A native promise that resolves to the response
 */
proto.xcite.iot.alibaba.v1.IotAlibabaPromiseClient.prototype.enableThing =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/xcite.iot.alibaba.v1.IotAlibaba/EnableThing',
      request,
      metadata || {},
      methodInfo_IotAlibaba_EnableThing);
};


module.exports = proto.xcite.iot.alibaba.v1;

