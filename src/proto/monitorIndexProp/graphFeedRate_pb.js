// source: graphFeedRate.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

let jspb = require('google-protobuf');

let goog = jspb;
let global = Function('return this')();

goog.exportSymbol('proto.GraphFeedRateProto', null, global);
goog.exportSymbol('proto.GraphFeedRateProto.Data', null, global);
goog.exportSymbol('proto.GraphFeedRateProto.FeedRate', null, global);
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
proto.GraphFeedRateProto = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GraphFeedRateProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
   * @public
   * @override
   */
    proto.GraphFeedRateProto.displayName = 'proto.GraphFeedRateProto';
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
proto.GraphFeedRateProto.FeedRate = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.GraphFeedRateProto.FeedRate.repeatedFields_, null);
};
goog.inherits(proto.GraphFeedRateProto.FeedRate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
   * @public
   * @override
   */
    proto.GraphFeedRateProto.FeedRate.displayName = 'proto.GraphFeedRateProto.FeedRate';
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
proto.GraphFeedRateProto.Data = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GraphFeedRateProto.Data, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
   * @public
   * @override
   */
    proto.GraphFeedRateProto.Data.displayName = 'proto.GraphFeedRateProto.Data';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
    proto.GraphFeedRateProto.prototype.toObject = function (opt_includeInstance) {
        return proto.GraphFeedRateProto.toObject(opt_includeInstance, this);
    };


    /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GraphFeedRateProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
    proto.GraphFeedRateProto.toObject = function (includeInstance, msg) {
        let f; let
            obj = {
                starttime: jspb.Message.getFieldWithDefault(msg, 1, 0),
                frequency: jspb.Message.getFieldWithDefault(msg, 2, 0),
                baseline: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
                feedrate: (f = msg.getFeedrate()) && proto.GraphFeedRateProto.FeedRate.toObject(includeInstance, f),
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
 * @return {!proto.GraphFeedRateProto}
 */
proto.GraphFeedRateProto.deserializeBinary = function (bytes) {
    let reader = new jspb.BinaryReader(bytes);
    let msg = new proto.GraphFeedRateProto();
    return proto.GraphFeedRateProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GraphFeedRateProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GraphFeedRateProto}
 */
proto.GraphFeedRateProto.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        let field = reader.getFieldNumber();
        switch (field) {
        case 1:
            var value = /** @type {number} */ (reader.readInt64());
            msg.setStarttime(value);
            break;
        case 2:
            var value = /** @type {number} */ (reader.readInt32());
            msg.setFrequency(value);
            break;
        case 3:
            var value = /** @type {number} */ (reader.readDouble());
            msg.setBaseline(value);
            break;
        case 4:
            var value = new proto.GraphFeedRateProto.FeedRate();
            reader.readMessage(value, proto.GraphFeedRateProto.FeedRate.deserializeBinaryFromReader);
            msg.setFeedrate(value);
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
proto.GraphFeedRateProto.prototype.serializeBinary = function () {
    let writer = new jspb.BinaryWriter();
    proto.GraphFeedRateProto.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GraphFeedRateProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GraphFeedRateProto.serializeBinaryToWriter = function (message, writer) {
    let f;
    f = message.getStarttime();
    if (f !== 0) {
        writer.writeInt64(
            1,
            f,
        );
    }
    f = message.getFrequency();
    if (f !== 0) {
        writer.writeInt32(
            2,
            f,
        );
    }
    f = message.getBaseline();
    if (f !== 0.0) {
        writer.writeDouble(
            3,
            f,
        );
    }
    f = message.getFeedrate();
    if (f != null) {
        writer.writeMessage(
            4,
            f,
            proto.GraphFeedRateProto.FeedRate.serializeBinaryToWriter,
        );
    }
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GraphFeedRateProto.FeedRate.repeatedFields_ = [3];


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
    proto.GraphFeedRateProto.FeedRate.prototype.toObject = function (opt_includeInstance) {
        return proto.GraphFeedRateProto.FeedRate.toObject(opt_includeInstance, this);
    };


    /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GraphFeedRateProto.FeedRate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
    proto.GraphFeedRateProto.FeedRate.toObject = function (includeInstance, msg) {
        let f; let
            obj = {
                max: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
                min: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
                dataList: jspb.Message.toObjectList(msg.getDataList(),
                    proto.GraphFeedRateProto.Data.toObject, includeInstance),
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
 * @return {!proto.GraphFeedRateProto.FeedRate}
 */
proto.GraphFeedRateProto.FeedRate.deserializeBinary = function (bytes) {
    let reader = new jspb.BinaryReader(bytes);
    let msg = new proto.GraphFeedRateProto.FeedRate();
    return proto.GraphFeedRateProto.FeedRate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GraphFeedRateProto.FeedRate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GraphFeedRateProto.FeedRate}
 */
proto.GraphFeedRateProto.FeedRate.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        let field = reader.getFieldNumber();
        switch (field) {
        case 1:
            var value = /** @type {number} */ (reader.readDouble());
            msg.setMax(value);
            break;
        case 2:
            var value = /** @type {number} */ (reader.readDouble());
            msg.setMin(value);
            break;
        case 3:
            var value = new proto.GraphFeedRateProto.Data();
            reader.readMessage(value, proto.GraphFeedRateProto.Data.deserializeBinaryFromReader);
            msg.addData(value);
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
proto.GraphFeedRateProto.FeedRate.prototype.serializeBinary = function () {
    let writer = new jspb.BinaryWriter();
    proto.GraphFeedRateProto.FeedRate.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GraphFeedRateProto.FeedRate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GraphFeedRateProto.FeedRate.serializeBinaryToWriter = function (message, writer) {
    let f;
    f = message.getMax();
    if (f !== 0.0) {
        writer.writeDouble(
            1,
            f,
        );
    }
    f = message.getMin();
    if (f !== 0.0) {
        writer.writeDouble(
            2,
            f,
        );
    }
    f = message.getDataList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(
            3,
            f,
            proto.GraphFeedRateProto.Data.serializeBinaryToWriter,
        );
    }
};


/**
 * optional double max = 1;
 * @return {number}
 */
proto.GraphFeedRateProto.FeedRate.prototype.getMax = function () {
    return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.GraphFeedRateProto.FeedRate.prototype.setMax = function (value) {
    jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double min = 2;
 * @return {number}
 */
proto.GraphFeedRateProto.FeedRate.prototype.getMin = function () {
    return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.GraphFeedRateProto.FeedRate.prototype.setMin = function (value) {
    jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * repeated Data data = 3;
 * @return {!Array<!proto.GraphFeedRateProto.Data>}
 */
proto.GraphFeedRateProto.FeedRate.prototype.getDataList = function () {
    return /** @type{!Array<!proto.GraphFeedRateProto.Data>} */ (
        jspb.Message.getRepeatedWrapperField(this, proto.GraphFeedRateProto.Data, 3));
};


/** @param {!Array<!proto.GraphFeedRateProto.Data>} value */
proto.GraphFeedRateProto.FeedRate.prototype.setDataList = function (value) {
    jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.GraphFeedRateProto.Data=} opt_value
 * @param {number=} opt_index
 * @return {!proto.GraphFeedRateProto.Data}
 */
proto.GraphFeedRateProto.FeedRate.prototype.addData = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.GraphFeedRateProto.Data, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.GraphFeedRateProto.FeedRate.prototype.clearDataList = function () {
    this.setDataList([]);
};


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
    proto.GraphFeedRateProto.Data.prototype.toObject = function (opt_includeInstance) {
        return proto.GraphFeedRateProto.Data.toObject(opt_includeInstance, this);
    };


    /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GraphFeedRateProto.Data} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
    proto.GraphFeedRateProto.Data.toObject = function (includeInstance, msg) {
        let f; let
            obj = {
                value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
                timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.GraphFeedRateProto.Data}
 */
proto.GraphFeedRateProto.Data.deserializeBinary = function (bytes) {
    let reader = new jspb.BinaryReader(bytes);
    let msg = new proto.GraphFeedRateProto.Data();
    return proto.GraphFeedRateProto.Data.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GraphFeedRateProto.Data} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GraphFeedRateProto.Data}
 */
proto.GraphFeedRateProto.Data.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        let field = reader.getFieldNumber();
        switch (field) {
        case 1:
            var value = /** @type {number} */ (reader.readDouble());
            msg.setValue(value);
            break;
        case 2:
            var value = /** @type {number} */ (reader.readInt64());
            msg.setTimestamp(value);
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
proto.GraphFeedRateProto.Data.prototype.serializeBinary = function () {
    let writer = new jspb.BinaryWriter();
    proto.GraphFeedRateProto.Data.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GraphFeedRateProto.Data} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GraphFeedRateProto.Data.serializeBinaryToWriter = function (message, writer) {
    let f;
    f = message.getValue();
    if (f !== 0.0) {
        writer.writeDouble(
            1,
            f,
        );
    }
    f = message.getTimestamp();
    if (f !== 0) {
        writer.writeInt64(
            2,
            f,
        );
    }
};


/**
 * optional double value = 1;
 * @return {number}
 */
proto.GraphFeedRateProto.Data.prototype.getValue = function () {
    return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.GraphFeedRateProto.Data.prototype.setValue = function (value) {
    jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.GraphFeedRateProto.Data.prototype.getTimestamp = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.GraphFeedRateProto.Data.prototype.setTimestamp = function (value) {
    jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 startTime = 1;
 * @return {number}
 */
proto.GraphFeedRateProto.prototype.getStarttime = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.GraphFeedRateProto.prototype.setStarttime = function (value) {
    jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 frequency = 2;
 * @return {number}
 */
proto.GraphFeedRateProto.prototype.getFrequency = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.GraphFeedRateProto.prototype.setFrequency = function (value) {
    jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional double baseLine = 3;
 * @return {number}
 */
proto.GraphFeedRateProto.prototype.getBaseline = function () {
    return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.GraphFeedRateProto.prototype.setBaseline = function (value) {
    jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional FeedRate feedRate = 4;
 * @return {?proto.GraphFeedRateProto.FeedRate}
 */
proto.GraphFeedRateProto.prototype.getFeedrate = function () {
    return /** @type{?proto.GraphFeedRateProto.FeedRate} */ (
        jspb.Message.getWrapperField(this, proto.GraphFeedRateProto.FeedRate, 4));
};


/** @param {?proto.GraphFeedRateProto.FeedRate|undefined} value */
proto.GraphFeedRateProto.prototype.setFeedrate = function (value) {
    jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.GraphFeedRateProto.prototype.clearFeedrate = function () {
    this.setFeedrate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GraphFeedRateProto.prototype.hasFeedrate = function () {
    return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto);
