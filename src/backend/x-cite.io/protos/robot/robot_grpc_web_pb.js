 /* eslint-disable */

/**
 * @fileoverview gRPC-Web generated client stub for xcite.iot.robot.v1
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
proto.xcite.iot.robot = {};
proto.xcite.iot.robot.v1 = require('./robot_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.xcite.iot.robot.v1.TurtleClient =
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
proto.xcite.iot.robot.v1.TurtlePromiseClient =
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
 *   !proto.xcite.iot.robot.v1.Twist,
 *   !proto.xcite.iot.model.v1.ServerResponse>}
 */
const methodInfo_Turtle_DoTwist = new grpc.web.AbstractClientBase.MethodInfo(
  x$cite_io_protos_model_basic_pb.ServerResponse,
  /** @param {!proto.xcite.iot.robot.v1.Twist} request */
  function(request) {
    return request.serializeBinary();
  },
  x$cite_io_protos_model_basic_pb.ServerResponse.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.robot.v1.Twist} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.xcite.iot.model.v1.ServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.model.v1.ServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.robot.v1.TurtleClient.prototype.doTwist =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/xcite.iot.robot.v1.Turtle/DoTwist',
      request,
      metadata || {},
      methodInfo_Turtle_DoTwist,
      callback);
};


/**
 * @param {!proto.xcite.iot.robot.v1.Twist} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.xcite.iot.model.v1.ServerResponse>}
 *     A native promise that resolves to the response
 */
proto.xcite.iot.robot.v1.TurtlePromiseClient.prototype.doTwist =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/xcite.iot.robot.v1.Turtle/DoTwist',
      request,
      metadata || {},
      methodInfo_Turtle_DoTwist);
};


module.exports = proto.xcite.iot.robot.v1;

