 /* eslint-disable */

/**
 * @fileoverview gRPC-Web generated client stub for xcite.iot.trackingsubscriber.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var x$cite_io_protos_model_tracking_pb = require('../../../x-cite.io/protos/model/tracking_pb.js')

var x$cite_io_protos_model_basic_pb = require('../../../x-cite.io/protos/model/basic_pb.js')
const proto = {};
proto.xcite = {};
proto.xcite.iot = {};
proto.xcite.iot.trackingsubscriber = {};
proto.xcite.iot.trackingsubscriber.v1 = require('./trackingsubscriber_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.xcite.iot.trackingsubscriber.v1.TrackingSubscriberClient =
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
proto.xcite.iot.trackingsubscriber.v1.TrackingSubscriberPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.xcite.iot.trackingsubscriber.v1.TrackingSubscriberClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.xcite.iot.trackingsubscriber.v1.TrackingSubscriberClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.xcite.iot.trackingsubscriber.v1.GetReportStreamRequest,
 *   !proto.xcite.iot.trackingsubscriber.v1.ReportList>}
 */
const methodInfo_TrackingSubscriber_GetReportStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.xcite.iot.trackingsubscriber.v1.ReportList,
  /** @param {!proto.xcite.iot.trackingsubscriber.v1.GetReportStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.xcite.iot.trackingsubscriber.v1.ReportList.deserializeBinary
);


/**
 * @param {!proto.xcite.iot.trackingsubscriber.v1.GetReportStreamRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.trackingsubscriber.v1.ReportList>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackingsubscriber.v1.TrackingSubscriberClient.prototype.getReportStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/xcite.iot.trackingsubscriber.v1.TrackingSubscriber/GetReportStream',
      request,
      metadata,
      methodInfo_TrackingSubscriber_GetReportStream);
};


/**
 * @param {!proto.xcite.iot.trackingsubscriber.v1.GetReportStreamRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.xcite.iot.trackingsubscriber.v1.ReportList>}
 *     The XHR Node Readable Stream
 */
proto.xcite.iot.trackingsubscriber.v1.TrackingSubscriberPromiseClient.prototype.getReportStream =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/xcite.iot.trackingsubscriber.v1.TrackingSubscriber/GetReportStream',
      request,
      metadata,
      methodInfo_TrackingSubscriber_GetReportStream);
};


module.exports = proto.xcite.iot.trackingsubscriber.v1;

