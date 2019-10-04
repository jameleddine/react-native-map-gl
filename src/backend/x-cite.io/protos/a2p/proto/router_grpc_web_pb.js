/**
 * @fileoverview gRPC-Web generated client stub for xcite.a2p.router.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var proto_basic_pb = require('../proto/basic_pb.js')
const proto = {};
proto.xcite = {};
proto.xcite.a2p = {};
proto.xcite.a2p.router = {};
proto.xcite.a2p.router.v1 = require('./router_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.xcite.a2p.router.v1.a2pClient =
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
proto.xcite.a2p.router.v1.a2pPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.xcite.a2p.router.v1.a2pClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.xcite.a2p.router.v1.a2pClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.a2p.router.v1.incomingMessageRequest,
 *   !proto.xcite.a2p.router.v1.incomingMessageResponse>}
 */
const methodInfo_a2p_sendSMS = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.a2p.router.v1.incomingMessageResponse,
  /** @param {!proto.xcite.a2p.router.v1.incomingMessageRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.a2p.router.v1.incomingMessageResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.a2p.router.v1.incomingMessageRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.a2p.router.v1.incomingMessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.a2p.router.v1.incomingMessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.a2p.router.v1.a2pClient.prototype.sendSMS =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.a2p.router.v1.a2p/sendSMS',
      request,
      metadata,
      methodInfo_a2p_sendSMS,
      callback);
};


/**
 * @param {!proto.xcite.a2p.router.v1.incomingMessageRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.a2p.router.v1.incomingMessageResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.a2p.router.v1.a2pPromiseClient.prototype.sendSMS =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.sendSMS(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.a2p.router.v1.CostLookupRequest,
 *   !proto.xcite.a2p.router.v1.CostLookupResponse>}
 */
const methodInfo_a2p_CostQuery = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.a2p.router.v1.CostLookupResponse,
  /** @param {!proto.xcite.a2p.router.v1.CostLookupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.a2p.router.v1.CostLookupResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.a2p.router.v1.CostLookupRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.a2p.router.v1.CostLookupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.a2p.router.v1.CostLookupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.a2p.router.v1.a2pClient.prototype.costQuery =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.a2p.router.v1.a2p/CostQuery',
      request,
      metadata,
      methodInfo_a2p_CostQuery,
      callback);
};


/**
 * @param {!proto.xcite.a2p.router.v1.CostLookupRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.a2p.router.v1.CostLookupResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.a2p.router.v1.a2pPromiseClient.prototype.costQuery =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.costQuery(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.a2p.router.v1.GetBalanceRequest,
 *   !proto.xcite.a2p.router.v1.GetBalanceResponse>}
 */
const methodInfo_a2p_GetBalance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.a2p.router.v1.GetBalanceResponse,
  /** @param {!proto.xcite.a2p.router.v1.GetBalanceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.a2p.router.v1.GetBalanceResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.a2p.router.v1.GetBalanceRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.a2p.router.v1.GetBalanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.a2p.router.v1.GetBalanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.a2p.router.v1.a2pClient.prototype.getBalance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.a2p.router.v1.a2p/GetBalance',
      request,
      metadata,
      methodInfo_a2p_GetBalance,
      callback);
};


/**
 * @param {!proto.xcite.a2p.router.v1.GetBalanceRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.a2p.router.v1.GetBalanceResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.a2p.router.v1.a2pPromiseClient.prototype.getBalance =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getBalance(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.a2p.router.v1.GetBalanceRequest,
 *   !proto.xcite.a2p.router.v1.GetTransactionHistoryResponse>}
 */
const methodInfo_a2p_GetTransactionHistory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.a2p.router.v1.GetTransactionHistoryResponse,
  /** @param {!proto.xcite.a2p.router.v1.GetBalanceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.a2p.router.v1.GetTransactionHistoryResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.a2p.router.v1.GetBalanceRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.a2p.router.v1.GetTransactionHistoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.a2p.router.v1.GetTransactionHistoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.a2p.router.v1.a2pClient.prototype.getTransactionHistory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.a2p.router.v1.a2p/GetTransactionHistory',
      request,
      metadata,
      methodInfo_a2p_GetTransactionHistory,
      callback);
};


/**
 * @param {!proto.xcite.a2p.router.v1.GetBalanceRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.a2p.router.v1.GetTransactionHistoryResponse>}
 *     The XHR Node Readable Stream
 */
proto.xcite.a2p.router.v1.a2pPromiseClient.prototype.getTransactionHistory =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getTransactionHistory(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.xcite.a2p.router.v1;

