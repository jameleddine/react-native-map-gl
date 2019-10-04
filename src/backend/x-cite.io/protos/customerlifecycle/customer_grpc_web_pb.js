 /* eslint-disable */

/**
 * @fileoverview gRPC-Web generated client stub for xcite.iot.customerlifecycle.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var x$cite_io_protos_model_basic_pb = require('../../../x-cite.io/protos/model/basic_pb.js')
const proto = {};
proto.xcite = {};
proto.xcite.iot = {};
proto.xcite.iot.customerlifecycle = {};
proto.xcite.iot.customerlifecycle.v1 = require('./customer_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.xcite.iot.customerlifecycle.v1.CustomerManagementClient =
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
proto.xcite.iot.customerlifecycle.v1.CustomerManagementPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.xcite.iot.customerlifecycle.v1.CustomerManagementClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.xcite.iot.customerlifecycle.v1.CustomerManagementClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.customerlifecycle.v1.CreateCustomerRequest,
 *   !proto.xcite.iot.customerlifecycle.v1.CreateCustMessage>}
 */
const methodInfo_CustomerManagement_CreateCustomer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.customerlifecycle.v1.CreateCustMessage,
  /** @param {!proto.xcite.iot.customerlifecycle.v1.CreateCustomerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.customerlifecycle.v1.CreateCustMessage.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.customerlifecycle.v1.CreateCustomerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.customerlifecycle.v1.CreateCustMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.customerlifecycle.v1.CreateCustMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.customerlifecycle.v1.CustomerManagementClient.prototype.createCustomer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.customerlifecycle.v1.CustomerManagement/CreateCustomer',
      request,
      metadata,
      methodInfo_CustomerManagement_CreateCustomer,
      callback);
};


/**
 * @param {!proto.xcite.iot.customerlifecycle.v1.CreateCustomerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.customerlifecycle.v1.CreateCustMessage>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.customerlifecycle.v1.CustomerManagementPromiseClient.prototype.createCustomer =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createCustomer(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.customerlifecycle.v1.CreateCustomerRequest,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_CustomerManagement_UpdateCustomer = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.customerlifecycle.v1.CreateCustomerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.customerlifecycle.v1.CreateCustomerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.customerlifecycle.v1.CustomerManagementClient.prototype.updateCustomer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.customerlifecycle.v1.CustomerManagement/UpdateCustomer',
      request,
      metadata,
      methodInfo_CustomerManagement_UpdateCustomer,
      callback);
};


/**
 * @param {!proto.xcite.iot.customerlifecycle.v1.CreateCustomerRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.customerlifecycle.v1.CustomerManagementPromiseClient.prototype.updateCustomer =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateCustomer(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.model.v1.UUID,
 *   !proto.xcite.iot.customerlifecycle.v1.Customer>}
 */
const methodInfo_CustomerManagement_GetCustomer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.customerlifecycle.v1.Customer,
  /** @param {!proto.xcite.iot.model.v1.UUID} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.customerlifecycle.v1.Customer.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.model.v1.UUID} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.customerlifecycle.v1.Customer)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.customerlifecycle.v1.Customer>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.customerlifecycle.v1.CustomerManagementClient.prototype.getCustomer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.customerlifecycle.v1.CustomerManagement/GetCustomer',
      request,
      metadata,
      methodInfo_CustomerManagement_GetCustomer,
      callback);
};


/**
 * @param {!proto.xcite.iot.model.v1.UUID} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.customerlifecycle.v1.Customer>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.customerlifecycle.v1.CustomerManagementPromiseClient.prototype.getCustomer =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getCustomer(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.model.v1.UUID,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_CustomerManagement_DeleteCustomer = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.model.v1.UUID} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.model.v1.UUID} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.customerlifecycle.v1.CustomerManagementClient.prototype.deleteCustomer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.customerlifecycle.v1.CustomerManagement/DeleteCustomer',
      request,
      metadata,
      methodInfo_CustomerManagement_DeleteCustomer,
      callback);
};


/**
 * @param {!proto.xcite.iot.model.v1.UUID} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.customerlifecycle.v1.CustomerManagementPromiseClient.prototype.deleteCustomer =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteCustomer(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.customerlifecycle.v1.UUIDList,
 *   !proto.xcite.iot.customerlifecycle.v1.CustomerList>}
 */
const methodInfo_CustomerManagement_ListCustomers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.customerlifecycle.v1.CustomerList,
  /** @param {!proto.xcite.iot.customerlifecycle.v1.UUIDList} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.customerlifecycle.v1.CustomerList.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.customerlifecycle.v1.UUIDList} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.customerlifecycle.v1.CustomerList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.customerlifecycle.v1.CustomerList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.customerlifecycle.v1.CustomerManagementClient.prototype.listCustomers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.customerlifecycle.v1.CustomerManagement/ListCustomers',
      request,
      metadata,
      methodInfo_CustomerManagement_ListCustomers,
      callback);
};


/**
 * @param {!proto.xcite.iot.customerlifecycle.v1.UUIDList} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.customerlifecycle.v1.CustomerList>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.customerlifecycle.v1.CustomerManagementPromiseClient.prototype.listCustomers =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listCustomers(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.xcite.iot.customerlifecycle.v1;

