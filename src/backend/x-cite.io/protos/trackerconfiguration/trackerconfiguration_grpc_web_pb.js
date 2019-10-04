 /* eslint-disable */

/**
 * @fileoverview gRPC-Web generated client stub for xcite.iot.trackerconfiguration.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var x$cite_io_protos_model_basic_pb = require('../../../x-cite.io/protos/model/basic_pb.js')

var x$cite_io_protos_model_tracking_pb = require('../../../x-cite.io/protos/model/tracking_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.xcite = {};
proto.xcite.iot = {};
proto.xcite.iot.trackerconfiguration = {};
proto.xcite.iot.trackerconfiguration.v1 = require('./trackerconfiguration_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationClient =
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
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.trackerconfiguration.v1.ConfigureAPNRequest,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_TrackerConfiguration_ConfigureAPN = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigureAPNRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigureAPNRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationClient.prototype.configureAPN =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.trackerconfiguration.v1.TrackerConfiguration/ConfigureAPN',
      request,
      metadata,
      methodInfo_TrackerConfiguration_ConfigureAPN,
      callback);
};


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigureAPNRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationPromiseClient.prototype.configureAPN =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.configureAPN(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.trackerconfiguration.v1.ConfigureHostRequest,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_TrackerConfiguration_ConfigureHost = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigureHostRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigureHostRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationClient.prototype.configureHost =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.trackerconfiguration.v1.TrackerConfiguration/ConfigureHost',
      request,
      metadata,
      methodInfo_TrackerConfiguration_ConfigureHost,
      callback);
};


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigureHostRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationPromiseClient.prototype.configureHost =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.configureHost(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.trackerconfiguration.v1.ConfigureFormatRequest,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_TrackerConfiguration_ConfigureFormat = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigureFormatRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigureFormatRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationClient.prototype.configureFormat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.trackerconfiguration.v1.TrackerConfiguration/ConfigureFormat',
      request,
      metadata,
      methodInfo_TrackerConfiguration_ConfigureFormat,
      callback);
};


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigureFormatRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationPromiseClient.prototype.configureFormat =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.configureFormat(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.trackerconfiguration.v1.ConfigRequest,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_TrackerConfiguration_ConfigureBasic = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationClient.prototype.configureBasic =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.trackerconfiguration.v1.TrackerConfiguration/ConfigureBasic',
      request,
      metadata,
      methodInfo_TrackerConfiguration_ConfigureBasic,
      callback);
};


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationPromiseClient.prototype.configureBasic =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.configureBasic(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.trackerconfiguration.v1.ConfigRequest,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_TrackerConfiguration_ResetFactory = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationClient.prototype.resetFactory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.trackerconfiguration.v1.TrackerConfiguration/ResetFactory',
      request,
      metadata,
      methodInfo_TrackerConfiguration_ResetFactory,
      callback);
};


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationPromiseClient.prototype.resetFactory =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.resetFactory(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.trackerconfiguration.v1.ConfigRequest,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_TrackerConfiguration_DumpConfig = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationClient.prototype.dumpConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.trackerconfiguration.v1.TrackerConfiguration/DumpConfig',
      request,
      metadata,
      methodInfo_TrackerConfiguration_DumpConfig,
      callback);
};


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationPromiseClient.prototype.dumpConfig =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.dumpConfig(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.trackerconfiguration.v1.UpdateStaticReportingRequest,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_TrackerConfiguration_UpdateStaticReporting = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.trackerconfiguration.v1.UpdateStaticReportingRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.UpdateStaticReportingRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationClient.prototype.updateStaticReporting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.trackerconfiguration.v1.TrackerConfiguration/UpdateStaticReporting',
      request,
      metadata,
      methodInfo_TrackerConfiguration_UpdateStaticReporting,
      callback);
};


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.UpdateStaticReportingRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationPromiseClient.prototype.updateStaticReporting =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateStaticReporting(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.trackerconfiguration.v1.ConfigRequest,
 *   !proto.xcite.iot.trackerconfiguration.v1.TrackerStatusResponse>}
 */
const methodInfo_TrackerConfiguration_GetStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.trackerconfiguration.v1.TrackerStatusResponse,
  /** @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.trackerconfiguration.v1.TrackerStatusResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.trackerconfiguration.v1.TrackerStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.trackerconfiguration.v1.TrackerStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationClient.prototype.getStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.trackerconfiguration.v1.TrackerConfiguration/GetStatus',
      request,
      metadata,
      methodInfo_TrackerConfiguration_GetStatus,
      callback);
};


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.trackerconfiguration.v1.TrackerStatusResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationPromiseClient.prototype.getStatus =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getStatus(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.trackerconfiguration.v1.ConfigRequest,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_TrackerConfiguration_ConfigMotionDetection = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationClient.prototype.configMotionDetection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.trackerconfiguration.v1.TrackerConfiguration/ConfigMotionDetection',
      request,
      metadata,
      methodInfo_TrackerConfiguration_ConfigMotionDetection,
      callback);
};


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationPromiseClient.prototype.configMotionDetection =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.configMotionDetection(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.trackerconfiguration.v1.ConfigTimerRequest,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_TrackerConfiguration_ConfigTimer = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigTimerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigTimerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationClient.prototype.configTimer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.trackerconfiguration.v1.TrackerConfiguration/ConfigTimer',
      request,
      metadata,
      methodInfo_TrackerConfiguration_ConfigTimer,
      callback);
};


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigTimerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationPromiseClient.prototype.configTimer =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.configTimer(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.trackerconfiguration.v1.DisabletimerRequest,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_TrackerConfiguration_DisableTimer = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.trackerconfiguration.v1.DisabletimerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.DisabletimerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationClient.prototype.disableTimer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.trackerconfiguration.v1.TrackerConfiguration/DisableTimer',
      request,
      metadata,
      methodInfo_TrackerConfiguration_DisableTimer,
      callback);
};


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.DisabletimerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationPromiseClient.prototype.disableTimer =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.disableTimer(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.trackerconfiguration.v1.ConfigRequest,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_TrackerConfiguration_ResetTracker = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationClient.prototype.resetTracker =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.trackerconfiguration.v1.TrackerConfiguration/ResetTracker',
      request,
      metadata,
      methodInfo_TrackerConfiguration_ResetTracker,
      callback);
};


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationPromiseClient.prototype.resetTracker =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.resetTracker(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.trackerconfiguration.v1.ConfigTrackingPeriodRequest,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_TrackerConfiguration_ConfigureTrackingPeriod = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigTrackingPeriodRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigTrackingPeriodRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationClient.prototype.configureTrackingPeriod =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.trackerconfiguration.v1.TrackerConfiguration/ConfigureTrackingPeriod',
      request,
      metadata,
      methodInfo_TrackerConfiguration_ConfigureTrackingPeriod,
      callback);
};


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigTrackingPeriodRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationPromiseClient.prototype.configureTrackingPeriod =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.configureTrackingPeriod(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.trackerconfiguration.v1.ConfigRequest,
 *   !proto.xcite.iot.trackerconfiguration.v1.ConfigTrackingPeriodResponse>}
 */
const methodInfo_TrackerConfiguration_GetTrackingPeriod = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.trackerconfiguration.v1.ConfigTrackingPeriodResponse,
  /** @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.trackerconfiguration.v1.ConfigTrackingPeriodResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.trackerconfiguration.v1.ConfigTrackingPeriodResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.trackerconfiguration.v1.ConfigTrackingPeriodResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationClient.prototype.getTrackingPeriod =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.trackerconfiguration.v1.TrackerConfiguration/GetTrackingPeriod',
      request,
      metadata,
      methodInfo_TrackerConfiguration_GetTrackingPeriod,
      callback);
};


/**
 * @param {!proto.xcite.iot.trackerconfiguration.v1.ConfigRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.trackerconfiguration.v1.ConfigTrackingPeriodResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackerconfiguration.v1.TrackerConfigurationPromiseClient.prototype.getTrackingPeriod =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getTrackingPeriod(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.xcite.iot.trackerconfiguration.v1;

