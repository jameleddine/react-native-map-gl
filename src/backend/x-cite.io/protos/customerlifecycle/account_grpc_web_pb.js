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
proto.xcite.iot.customerlifecycle.v1 = require('./account_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.xcite.iot.customerlifecycle.v1.AccountManagementClient =
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
proto.xcite.iot.customerlifecycle.v1.AccountManagementPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.xcite.iot.customerlifecycle.v1.AccountManagementClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.xcite.iot.customerlifecycle.v1.AccountManagementClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.customerlifecycle.v1.CreateAccountRequest,
 *   !proto.xcite.iot.customerlifecycle.v1.CreateAccMessage>}
 */
const methodInfo_AccountManagement_CreateAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.customerlifecycle.v1.CreateAccMessage,
  /** @param {!proto.xcite.iot.customerlifecycle.v1.CreateAccountRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.customerlifecycle.v1.CreateAccMessage.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.customerlifecycle.v1.CreateAccountRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.customerlifecycle.v1.CreateAccMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.customerlifecycle.v1.CreateAccMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.customerlifecycle.v1.AccountManagementClient.prototype.createAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.customerlifecycle.v1.AccountManagement/CreateAccount',
      request,
      metadata,
      methodInfo_AccountManagement_CreateAccount,
      callback);
};


/**
 * @param {!proto.xcite.iot.customerlifecycle.v1.CreateAccountRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.customerlifecycle.v1.CreateAccMessage>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.customerlifecycle.v1.AccountManagementPromiseClient.prototype.createAccount =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createAccount(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.customerlifecycle.v1.CreateAccountRequest,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_AccountManagement_UpdateAccount = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.customerlifecycle.v1.CreateAccountRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.customerlifecycle.v1.CreateAccountRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.customerlifecycle.v1.AccountManagementClient.prototype.updateAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.customerlifecycle.v1.AccountManagement/UpdateAccount',
      request,
      metadata,
      methodInfo_AccountManagement_UpdateAccount,
      callback);
};


/**
 * @param {!proto.xcite.iot.customerlifecycle.v1.CreateAccountRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.customerlifecycle.v1.AccountManagementPromiseClient.prototype.updateAccount =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updateAccount(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.model.v1.UUID,
 *   !proto.xcite.iot.customerlifecycle.v1.Account>}
 */
const methodInfo_AccountManagement_GetAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.customerlifecycle.v1.Account,
  /** @param {!proto.xcite.iot.model.v1.UUID} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.customerlifecycle.v1.Account.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.model.v1.UUID} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.customerlifecycle.v1.Account)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.customerlifecycle.v1.Account>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.customerlifecycle.v1.AccountManagementClient.prototype.getAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.customerlifecycle.v1.AccountManagement/GetAccount',
      request,
      metadata,
      methodInfo_AccountManagement_GetAccount,
      callback);
};


/**
 * @param {!proto.xcite.iot.model.v1.UUID} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.customerlifecycle.v1.Account>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.customerlifecycle.v1.AccountManagementPromiseClient.prototype.getAccount =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getAccount(
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
const methodInfo_AccountManagement_DeleteAccount = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.xcite.iot.customerlifecycle.v1.AccountManagementClient.prototype.deleteAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.customerlifecycle.v1.AccountManagement/DeleteAccount',
      request,
      metadata,
      methodInfo_AccountManagement_DeleteAccount,
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
proto.xcite.iot.customerlifecycle.v1.AccountManagementPromiseClient.prototype.deleteAccount =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteAccount(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.customerlifecycle.v1.ListIDs,
 *   !proto.xcite.iot.customerlifecycle.v1.ListAccount>}
 */
const methodInfo_AccountManagement_ListAccounts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.customerlifecycle.v1.ListAccount,
  /** @param {!proto.xcite.iot.customerlifecycle.v1.ListIDs} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.customerlifecycle.v1.ListAccount.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.customerlifecycle.v1.ListIDs} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.customerlifecycle.v1.ListAccount)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.customerlifecycle.v1.ListAccount>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.customerlifecycle.v1.AccountManagementClient.prototype.listAccounts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.customerlifecycle.v1.AccountManagement/ListAccounts',
      request,
      metadata,
      methodInfo_AccountManagement_ListAccounts,
      callback);
};


/**
 * @param {!proto.xcite.iot.customerlifecycle.v1.ListIDs} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.customerlifecycle.v1.ListAccount>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.customerlifecycle.v1.AccountManagementPromiseClient.prototype.listAccounts =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listAccounts(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.xcite.iot.customerlifecycle.v1;

