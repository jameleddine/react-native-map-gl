 /* eslint-disable */

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var x$cite_io_protos_model_basic_pb = require('../../../x-cite.io/protos/model/basic_pb.js');
goog.object.extend(proto, x$cite_io_protos_model_basic_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.xcite.iot.model.v1.ParkingSensor', null, global);
goog.exportSymbol('proto.xcite.iot.model.v1.ParkingSensorReport', null, global);
goog.exportSymbol('proto.xcite.iot.model.v1.ParkingSensorStatus', null, global);
goog.exportSymbol('proto.xcite.iot.model.v1.ParkingSensorType', null, global);
goog.exportSymbol('proto.xcite.iot.model.v1.ReportType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xcite.iot.model.v1.ParkingSensor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xcite.iot.model.v1.ParkingSensor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xcite.iot.model.v1.ParkingSensor.displayName = 'proto.xcite.iot.model.v1.ParkingSensor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xcite.iot.model.v1.ParkingSensorReport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xcite.iot.model.v1.ParkingSensorReport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xcite.iot.model.v1.ParkingSensorReport.displayName = 'proto.xcite.iot.model.v1.ParkingSensorReport';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xcite.iot.model.v1.ParkingSensor.prototype.toObject = function(opt_includeInstance) {
  return proto.xcite.iot.model.v1.ParkingSensor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xcite.iot.model.v1.ParkingSensor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xcite.iot.model.v1.ParkingSensor.toObject = function(includeInstance, msg) {
  var obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    urn: jspb.Message.getFieldWithDefault(msg, 2, ""),
    devEui: jspb.Message.getFieldWithDefault(msg, 3, ""),
    partNumber: jspb.Message.getFieldWithDefault(msg, 4, ""),
    appEui: jspb.Message.getFieldWithDefault(msg, 5, ""),
    appKey: jspb.Message.getFieldWithDefault(msg, 6, ""),
    appId: msg.getAppId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xcite.iot.model.v1.ParkingSensor}
 */
proto.xcite.iot.model.v1.ParkingSensor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xcite.iot.model.v1.ParkingSensor;
  return proto.xcite.iot.model.v1.ParkingSensor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xcite.iot.model.v1.ParkingSensor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xcite.iot.model.v1.ParkingSensor}
 */
proto.xcite.iot.model.v1.ParkingSensor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.xcite.iot.model.v1.ParkingSensorType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrn(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevEui(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartNumber(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppEui(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppKey(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAppId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xcite.iot.model.v1.ParkingSensor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xcite.iot.model.v1.ParkingSensor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xcite.iot.model.v1.ParkingSensor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xcite.iot.model.v1.ParkingSensor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUrn();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDevEui();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPartNumber();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAppEui();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAppKey();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAppId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
};


/**
 * optional ParkingSensorType type = 1;
 * @return {!proto.xcite.iot.model.v1.ParkingSensorType}
 */
proto.xcite.iot.model.v1.ParkingSensor.prototype.getType = function() {
  return /** @type {!proto.xcite.iot.model.v1.ParkingSensorType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.xcite.iot.model.v1.ParkingSensorType} value */
proto.xcite.iot.model.v1.ParkingSensor.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string urn = 2;
 * @return {string}
 */
proto.xcite.iot.model.v1.ParkingSensor.prototype.getUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.xcite.iot.model.v1.ParkingSensor.prototype.setUrn = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dev_eui = 3;
 * @return {string}
 */
proto.xcite.iot.model.v1.ParkingSensor.prototype.getDevEui = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.xcite.iot.model.v1.ParkingSensor.prototype.setDevEui = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string part_number = 4;
 * @return {string}
 */
proto.xcite.iot.model.v1.ParkingSensor.prototype.getPartNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.xcite.iot.model.v1.ParkingSensor.prototype.setPartNumber = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string app_eui = 5;
 * @return {string}
 */
proto.xcite.iot.model.v1.ParkingSensor.prototype.getAppEui = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.xcite.iot.model.v1.ParkingSensor.prototype.setAppEui = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string app_key = 6;
 * @return {string}
 */
proto.xcite.iot.model.v1.ParkingSensor.prototype.getAppKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.xcite.iot.model.v1.ParkingSensor.prototype.setAppKey = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bytes app_id = 7;
 * @return {string}
 */
proto.xcite.iot.model.v1.ParkingSensor.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes app_id = 7;
 * This is a type-conversion wrapper around `getAppId()`
 * @return {string}
 */
proto.xcite.iot.model.v1.ParkingSensor.prototype.getAppId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAppId()));
};


/**
 * optional bytes app_id = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAppId()`
 * @return {!Uint8Array}
 */
proto.xcite.iot.model.v1.ParkingSensor.prototype.getAppId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAppId()));
};


/** @param {!(string|Uint8Array)} value */
proto.xcite.iot.model.v1.ParkingSensor.prototype.setAppId = function(value) {
  jspb.Message.setProto3BytesField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xcite.iot.model.v1.ParkingSensorReport.prototype.toObject = function(opt_includeInstance) {
  return proto.xcite.iot.model.v1.ParkingSensorReport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xcite.iot.model.v1.ParkingSensorReport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xcite.iot.model.v1.ParkingSensorReport.toObject = function(includeInstance, msg) {
  var obj = {
    thingId: (f = msg.getThingId()) && x$cite_io_protos_model_basic_pb.UUID.toObject(includeInstance, f),
    reportType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sensorStatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
    timestampLocal: (f = msg.getTimestampLocal()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    parkingId: (f = msg.getParkingId()) && x$cite_io_protos_model_basic_pb.UUID.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xcite.iot.model.v1.ParkingSensorReport}
 */
proto.xcite.iot.model.v1.ParkingSensorReport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xcite.iot.model.v1.ParkingSensorReport;
  return proto.xcite.iot.model.v1.ParkingSensorReport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xcite.iot.model.v1.ParkingSensorReport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xcite.iot.model.v1.ParkingSensorReport}
 */
proto.xcite.iot.model.v1.ParkingSensorReport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new x$cite_io_protos_model_basic_pb.UUID;
      reader.readMessage(value,x$cite_io_protos_model_basic_pb.UUID.deserializeBinaryFromReader);
      msg.setThingId(value);
      break;
    case 2:
      var value = /** @type {!proto.xcite.iot.model.v1.ReportType} */ (reader.readEnum());
      msg.setReportType(value);
      break;
    case 3:
      var value = /** @type {!proto.xcite.iot.model.v1.ParkingSensorStatus} */ (reader.readEnum());
      msg.setSensorStatus(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestampLocal(value);
      break;
    case 5:
      var value = new x$cite_io_protos_model_basic_pb.UUID;
      reader.readMessage(value,x$cite_io_protos_model_basic_pb.UUID.deserializeBinaryFromReader);
      msg.setParkingId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xcite.iot.model.v1.ParkingSensorReport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xcite.iot.model.v1.ParkingSensorReport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xcite.iot.model.v1.ParkingSensorReport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xcite.iot.model.v1.ParkingSensorReport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getThingId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      x$cite_io_protos_model_basic_pb.UUID.serializeBinaryToWriter
    );
  }
  f = message.getReportType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSensorStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTimestampLocal();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getParkingId();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      x$cite_io_protos_model_basic_pb.UUID.serializeBinaryToWriter
    );
  }
};


/**
 * optional UUID thing_id = 1;
 * @return {?proto.xcite.iot.model.v1.UUID}
 */
proto.xcite.iot.model.v1.ParkingSensorReport.prototype.getThingId = function() {
  return /** @type{?proto.xcite.iot.model.v1.UUID} */ (
    jspb.Message.getWrapperField(this, x$cite_io_protos_model_basic_pb.UUID, 1));
};


/** @param {?proto.xcite.iot.model.v1.UUID|undefined} value */
proto.xcite.iot.model.v1.ParkingSensorReport.prototype.setThingId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.xcite.iot.model.v1.ParkingSensorReport.prototype.clearThingId = function() {
  this.setThingId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xcite.iot.model.v1.ParkingSensorReport.prototype.hasThingId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ReportType report_type = 2;
 * @return {!proto.xcite.iot.model.v1.ReportType}
 */
proto.xcite.iot.model.v1.ParkingSensorReport.prototype.getReportType = function() {
  return /** @type {!proto.xcite.iot.model.v1.ReportType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.xcite.iot.model.v1.ReportType} value */
proto.xcite.iot.model.v1.ParkingSensorReport.prototype.setReportType = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional ParkingSensorStatus sensor_status = 3;
 * @return {!proto.xcite.iot.model.v1.ParkingSensorStatus}
 */
proto.xcite.iot.model.v1.ParkingSensorReport.prototype.getSensorStatus = function() {
  return /** @type {!proto.xcite.iot.model.v1.ParkingSensorStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.xcite.iot.model.v1.ParkingSensorStatus} value */
proto.xcite.iot.model.v1.ParkingSensorReport.prototype.setSensorStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp timestamp_local = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.xcite.iot.model.v1.ParkingSensorReport.prototype.getTimestampLocal = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.xcite.iot.model.v1.ParkingSensorReport.prototype.setTimestampLocal = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.xcite.iot.model.v1.ParkingSensorReport.prototype.clearTimestampLocal = function() {
  this.setTimestampLocal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xcite.iot.model.v1.ParkingSensorReport.prototype.hasTimestampLocal = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional UUID parking_id = 5;
 * @return {?proto.xcite.iot.model.v1.UUID}
 */
proto.xcite.iot.model.v1.ParkingSensorReport.prototype.getParkingId = function() {
  return /** @type{?proto.xcite.iot.model.v1.UUID} */ (
    jspb.Message.getWrapperField(this, x$cite_io_protos_model_basic_pb.UUID, 5));
};


/** @param {?proto.xcite.iot.model.v1.UUID|undefined} value */
proto.xcite.iot.model.v1.ParkingSensorReport.prototype.setParkingId = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.xcite.iot.model.v1.ParkingSensorReport.prototype.clearParkingId = function() {
  this.setParkingId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xcite.iot.model.v1.ParkingSensorReport.prototype.hasParkingId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * @enum {number}
 */
proto.xcite.iot.model.v1.ParkingSensorType = {
  UNIDENTIFIED: 0,
  BOSCH: 1,
  PARKDROID: 2
};

/**
 * @enum {number}
 */
proto.xcite.iot.model.v1.ParkingSensorStatus = {
  NO_STATUS: 0,
  FREE: 1,
  TAKEN: 2,
  LOW_BATTERY: 3
};

/**
 * @enum {number}
 */
proto.xcite.iot.model.v1.ReportType = {
  NO_TYPE: 0,
  HEARTBEAT: 1,
  PARKING: 2
};

goog.object.extend(exports, proto.xcite.iot.model.v1);
