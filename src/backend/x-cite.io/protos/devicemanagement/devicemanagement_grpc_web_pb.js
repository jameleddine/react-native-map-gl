 /* eslint-disable */

/**
 * @fileoverview gRPC-Web generated client stub for xcite.iot.devicemanagement.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var x$cite_io_protos_model_basic_pb = require('../../../x-cite.io/protos/model/basic_pb.js')

var x$cite_io_protos_model_tracking_pb = require('../../../x-cite.io/protos/model/tracking_pb.js')

var x$cite_io_protos_model_vehicle_pb = require('../../../x-cite.io/protos/model/vehicle_pb.js')

var x$cite_io_protos_model_sim_pb = require('../../../x-cite.io/protos/model/sim_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.xcite = {};
proto.xcite.iot = {};
proto.xcite.iot.devicemanagement = {};
proto.xcite.iot.devicemanagement.v1 = require('./devicemanagement_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.xcite.iot.devicemanagement.v1.DeviceManagementClient =
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
proto.xcite.iot.devicemanagement.v1.DeviceManagementPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.xcite.iot.devicemanagement.v1.DeviceManagementClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.xcite.iot.devicemanagement.v1.DeviceManagementClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.model.v1.Thing,
 *   !proto.xcite.iot.model.v1.CreateThingResponse>}
 */
const methodInfo_DeviceManagement_CreateThing = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.CreateThingResponse,
  /** @param {!proto.xcite.iot.model.v1.Thing} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.CreateThingResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.model.v1.Thing} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.CreateThingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.CreateThingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.devicemanagement.v1.DeviceManagementClient.prototype.createThing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.devicemanagement.v1.DeviceManagement/CreateThing',
      request,
      metadata,
      methodInfo_DeviceManagement_CreateThing,
      callback);
};


/**
 * @param {!proto.xcite.iot.model.v1.Thing} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.CreateThingResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.devicemanagement.v1.DeviceManagementPromiseClient.prototype.createThing =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createThing(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.model.v1.GetThingRequest,
 *   !proto.xcite.iot.model.v1.Thing>}
 */
const methodInfo_DeviceManagement_GetThing = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.Thing,
  /** @param {!proto.xcite.iot.model.v1.GetThingRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.Thing.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.model.v1.GetThingRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.Thing)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.Thing>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.devicemanagement.v1.DeviceManagementClient.prototype.getThing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.devicemanagement.v1.DeviceManagement/GetThing',
      request,
      metadata,
      methodInfo_DeviceManagement_GetThing,
      callback);
};


/**
 * @param {!proto.xcite.iot.model.v1.GetThingRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.Thing>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.devicemanagement.v1.DeviceManagementPromiseClient.prototype.getThing =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getThing(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.model.v1.Thing,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_DeviceManagement_UpdateThing = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.model.v1.Thing} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.model.v1.Thing} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.devicemanagement.v1.DeviceManagementClient.prototype.updateThing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.devicemanagement.v1.DeviceManagement/UpdateThing',
      request,
      metadata,
      methodInfo_DeviceManagement_UpdateThing,
      callback);
};


/**
 * @param {!proto.xcite.iot.model.v1.Thing} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.devicemanagement.v1.DeviceManagementPromiseClient.prototype.updateThing =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateThing(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.model.v1.DeleteThingRequest,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_DeviceManagement_DeleteThing = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.model.v1.DeleteThingRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.model.v1.DeleteThingRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.devicemanagement.v1.DeviceManagementClient.prototype.deleteThing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.devicemanagement.v1.DeviceManagement/DeleteThing',
      request,
      metadata,
      methodInfo_DeviceManagement_DeleteThing,
      callback);
};


/**
 * @param {!proto.xcite.iot.model.v1.DeleteThingRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.devicemanagement.v1.DeviceManagementPromiseClient.prototype.deleteThing =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteThing(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.devicemanagement.v1.ListThingsRequest,
 *   !proto.xcite.iot.devicemanagement.v1.ListThingsResponse>}
 */
const methodInfo_DeviceManagement_ListThings = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.devicemanagement.v1.ListThingsResponse,
  /** @param {!proto.xcite.iot.devicemanagement.v1.ListThingsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.devicemanagement.v1.ListThingsResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.devicemanagement.v1.ListThingsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.devicemanagement.v1.ListThingsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.devicemanagement.v1.ListThingsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.devicemanagement.v1.DeviceManagementClient.prototype.listThings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.devicemanagement.v1.DeviceManagement/ListThings',
      request,
      metadata,
      methodInfo_DeviceManagement_ListThings,
      callback);
};


/**
 * @param {!proto.xcite.iot.devicemanagement.v1.ListThingsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.devicemanagement.v1.ListThingsResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.devicemanagement.v1.DeviceManagementPromiseClient.prototype.listThings =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listThings(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.devicemanagement.v1.UpdateRelationRequest,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_DeviceManagement_UpdateRelation = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.devicemanagement.v1.UpdateRelationRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.devicemanagement.v1.UpdateRelationRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.devicemanagement.v1.DeviceManagementClient.prototype.updateRelation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.devicemanagement.v1.DeviceManagement/UpdateRelation',
      request,
      metadata,
      methodInfo_DeviceManagement_UpdateRelation,
      callback);
};


/**
 * @param {!proto.xcite.iot.devicemanagement.v1.UpdateRelationRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.devicemanagement.v1.DeviceManagementPromiseClient.prototype.updateRelation =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateRelation(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.model.v1.UUID,
 *   !proto.xcite.iot.devicemanagement.v1.ListRelationsResponse>}
 */
const methodInfo_DeviceManagement_ListRelations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.devicemanagement.v1.ListRelationsResponse,
  /** @param {!proto.xcite.iot.model.v1.UUID} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.devicemanagement.v1.ListRelationsResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.model.v1.UUID} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.devicemanagement.v1.ListRelationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.devicemanagement.v1.ListRelationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.devicemanagement.v1.DeviceManagementClient.prototype.listRelations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.devicemanagement.v1.DeviceManagement/ListRelations',
      request,
      metadata,
      methodInfo_DeviceManagement_ListRelations,
      callback);
};


/**
 * @param {!proto.xcite.iot.model.v1.UUID} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.devicemanagement.v1.ListRelationsResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.devicemanagement.v1.DeviceManagementPromiseClient.prototype.listRelations =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listRelations(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.xcite.iot.devicemanagement.v1;

