// source: graphModel.proto
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

goog.exportSymbol('proto.GraphModelProto', null, global);
goog.exportSymbol('proto.GraphModelProto.Average', null, global);
goog.exportSymbol('proto.GraphModelProto.Boundary', null, global);
goog.exportSymbol('proto.GraphModelProto.Maximum', null, global);
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
proto.GraphModelProto = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.GraphModelProto.repeatedFields_, null);
};
goog.inherits(proto.GraphModelProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
   * @public
   * @override
   */
    proto.GraphModelProto.displayName = 'proto.GraphModelProto';
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
proto.GraphModelProto.Average = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.GraphModelProto.Average.repeatedFields_, null);
};
goog.inherits(proto.GraphModelProto.Average, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
   * @public
   * @override
   */
    proto.GraphModelProto.Average.displayName = 'proto.GraphModelProto.Average';
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
proto.GraphModelProto.Maximum = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GraphModelProto.Maximum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
   * @public
   * @override
   */
    proto.GraphModelProto.Maximum.displayName = 'proto.GraphModelProto.Maximum';
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
proto.GraphModelProto.Boundary = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.GraphModelProto.Boundary.repeatedFields_, null);
};
goog.inherits(proto.GraphModelProto.Boundary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
   * @public
   * @override
   */
    proto.GraphModelProto.Boundary.displayName = 'proto.GraphModelProto.Boundary';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GraphModelProto.repeatedFields_ = [1];


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
    proto.GraphModelProto.prototype.toObject = function (opt_includeInstance) {
        return proto.GraphModelProto.toObject(opt_includeInstance, this);
    };


    /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GraphModelProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
    proto.GraphModelProto.toObject = function (includeInstance, msg) {
        let f; let
            obj = {
                featuretypeList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
                frequency: jspb.Message.getFieldWithDefault(msg, 2, 0),
                averageorig: (f = msg.getAverageorig()) && proto.GraphModelProto.Average.toObject(includeInstance, f),
                averageder: (f = msg.getAverageder()) && proto.GraphModelProto.Average.toObject(includeInstance, f),
                maximum: (f = msg.getMaximum()) && proto.GraphModelProto.Maximum.toObject(includeInstance, f),
                boundaryorig: (f = msg.getBoundaryorig()) && proto.GraphModelProto.Boundary.toObject(includeInstance, f),
                boundaryder: (f = msg.getBoundaryder()) && proto.GraphModelProto.Boundary.toObject(includeInstance, f),
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
 * @return {!proto.GraphModelProto}
 */
proto.GraphModelProto.deserializeBinary = function (bytes) {
    let reader = new jspb.BinaryReader(bytes);
    let msg = new proto.GraphModelProto();
    return proto.GraphModelProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GraphModelProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GraphModelProto}
 */
proto.GraphModelProto.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        let field = reader.getFieldNumber();
        switch (field) {
        case 1:
            var value = /** @type {!Array<number>} */ (reader.readPackedInt32());
            msg.setFeaturetypeList(value);
            break;
        case 2:
            var value = /** @type {number} */ (reader.readInt32());
            msg.setFrequency(value);
            break;
        case 3:
            var value = new proto.GraphModelProto.Average();
            reader.readMessage(value, proto.GraphModelProto.Average.deserializeBinaryFromReader);
            msg.setAverageorig(value);
            break;
        case 4:
            var value = new proto.GraphModelProto.Average();
            reader.readMessage(value, proto.GraphModelProto.Average.deserializeBinaryFromReader);
            msg.setAverageder(value);
            break;
        case 5:
            var value = new proto.GraphModelProto.Maximum();
            reader.readMessage(value, proto.GraphModelProto.Maximum.deserializeBinaryFromReader);
            msg.setMaximum(value);
            break;
        case 6:
            var value = new proto.GraphModelProto.Boundary();
            reader.readMessage(value, proto.GraphModelProto.Boundary.deserializeBinaryFromReader);
            msg.setBoundaryorig(value);
            break;
        case 7:
            var value = new proto.GraphModelProto.Boundary();
            reader.readMessage(value, proto.GraphModelProto.Boundary.deserializeBinaryFromReader);
            msg.setBoundaryder(value);
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
proto.GraphModelProto.prototype.serializeBinary = function () {
    let writer = new jspb.BinaryWriter();
    proto.GraphModelProto.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GraphModelProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GraphModelProto.serializeBinaryToWriter = function (message, writer) {
    let f;
    f = message.getFeaturetypeList();
    if (f.length > 0) {
        writer.writePackedInt32(
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
    f = message.getAverageorig();
    if (f != null) {
        writer.writeMessage(
            3,
            f,
            proto.GraphModelProto.Average.serializeBinaryToWriter,
        );
    }
    f = message.getAverageder();
    if (f != null) {
        writer.writeMessage(
            4,
            f,
            proto.GraphModelProto.Average.serializeBinaryToWriter,
        );
    }
    f = message.getMaximum();
    if (f != null) {
        writer.writeMessage(
            5,
            f,
            proto.GraphModelProto.Maximum.serializeBinaryToWriter,
        );
    }
    f = message.getBoundaryorig();
    if (f != null) {
        writer.writeMessage(
            6,
            f,
            proto.GraphModelProto.Boundary.serializeBinaryToWriter,
        );
    }
    f = message.getBoundaryder();
    if (f != null) {
        writer.writeMessage(
            7,
            f,
            proto.GraphModelProto.Boundary.serializeBinaryToWriter,
        );
    }
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GraphModelProto.Average.repeatedFields_ = [3, 4];


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
    proto.GraphModelProto.Average.prototype.toObject = function (opt_includeInstance) {
        return proto.GraphModelProto.Average.toObject(opt_includeInstance, this);
    };


    /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GraphModelProto.Average} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
    proto.GraphModelProto.Average.toObject = function (includeInstance, msg) {
        let f; let
            obj = {
                maxline: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
                minline: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
                topdataList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 3)) == null ? undefined : f,
                bottomdataList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 4)) == null ? undefined : f,
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
 * @return {!proto.GraphModelProto.Average}
 */
proto.GraphModelProto.Average.deserializeBinary = function (bytes) {
    let reader = new jspb.BinaryReader(bytes);
    let msg = new proto.GraphModelProto.Average();
    return proto.GraphModelProto.Average.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GraphModelProto.Average} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GraphModelProto.Average}
 */
proto.GraphModelProto.Average.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        let field = reader.getFieldNumber();
        switch (field) {
        case 1:
            var value = /** @type {number} */ (reader.readDouble());
            msg.setMaxline(value);
            break;
        case 2:
            var value = /** @type {number} */ (reader.readDouble());
            msg.setMinline(value);
            break;
        case 3:
            var value = /** @type {!Array<number>} */ (reader.readPackedDouble());
            msg.setTopdataList(value);
            break;
        case 4:
            var value = /** @type {!Array<number>} */ (reader.readPackedDouble());
            msg.setBottomdataList(value);
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
proto.GraphModelProto.Average.prototype.serializeBinary = function () {
    let writer = new jspb.BinaryWriter();
    proto.GraphModelProto.Average.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GraphModelProto.Average} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GraphModelProto.Average.serializeBinaryToWriter = function (message, writer) {
    let f;
    f = message.getMaxline();
    if (f !== 0.0) {
        writer.writeDouble(
            1,
            f,
        );
    }
    f = message.getMinline();
    if (f !== 0.0) {
        writer.writeDouble(
            2,
            f,
        );
    }
    f = message.getTopdataList();
    if (f.length > 0) {
        writer.writePackedDouble(
            3,
            f,
        );
    }
    f = message.getBottomdataList();
    if (f.length > 0) {
        writer.writePackedDouble(
            4,
            f,
        );
    }
};


/**
 * optional double maxLine = 1;
 * @return {number}
 */
proto.GraphModelProto.Average.prototype.getMaxline = function () {
    return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.GraphModelProto.Average.prototype.setMaxline = function (value) {
    jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double minLine = 2;
 * @return {number}
 */
proto.GraphModelProto.Average.prototype.getMinline = function () {
    return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.GraphModelProto.Average.prototype.setMinline = function (value) {
    jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * repeated double topData = 3;
 * @return {!Array<number>}
 */
proto.GraphModelProto.Average.prototype.getTopdataList = function () {
    return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/** @param {!Array<number>} value */
proto.GraphModelProto.Average.prototype.setTopdataList = function (value) {
    jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 */
proto.GraphModelProto.Average.prototype.addTopdata = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.GraphModelProto.Average.prototype.clearTopdataList = function () {
    this.setTopdataList([]);
};


/**
 * repeated double bottomData = 4;
 * @return {!Array<number>}
 */
proto.GraphModelProto.Average.prototype.getBottomdataList = function () {
    return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/** @param {!Array<number>} value */
proto.GraphModelProto.Average.prototype.setBottomdataList = function (value) {
    jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 */
proto.GraphModelProto.Average.prototype.addBottomdata = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.GraphModelProto.Average.prototype.clearBottomdataList = function () {
    this.setBottomdataList([]);
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
    proto.GraphModelProto.Maximum.prototype.toObject = function (opt_includeInstance) {
        return proto.GraphModelProto.Maximum.toObject(opt_includeInstance, this);
    };


    /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GraphModelProto.Maximum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
    proto.GraphModelProto.Maximum.toObject = function (includeInstance, msg) {
        let f; let
            obj = {
                data: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
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
 * @return {!proto.GraphModelProto.Maximum}
 */
proto.GraphModelProto.Maximum.deserializeBinary = function (bytes) {
    let reader = new jspb.BinaryReader(bytes);
    let msg = new proto.GraphModelProto.Maximum();
    return proto.GraphModelProto.Maximum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GraphModelProto.Maximum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GraphModelProto.Maximum}
 */
proto.GraphModelProto.Maximum.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        let field = reader.getFieldNumber();
        switch (field) {
        case 1:
            var value = /** @type {number} */ (reader.readDouble());
            msg.setData(value);
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
proto.GraphModelProto.Maximum.prototype.serializeBinary = function () {
    let writer = new jspb.BinaryWriter();
    proto.GraphModelProto.Maximum.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GraphModelProto.Maximum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GraphModelProto.Maximum.serializeBinaryToWriter = function (message, writer) {
    let f;
    f = message.getData();
    if (f !== 0.0) {
        writer.writeDouble(
            1,
            f,
        );
    }
};


/**
 * optional double data = 1;
 * @return {number}
 */
proto.GraphModelProto.Maximum.prototype.getData = function () {
    return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.GraphModelProto.Maximum.prototype.setData = function (value) {
    jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GraphModelProto.Boundary.repeatedFields_ = [3, 4];


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
    proto.GraphModelProto.Boundary.prototype.toObject = function (opt_includeInstance) {
        return proto.GraphModelProto.Boundary.toObject(opt_includeInstance, this);
    };


    /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GraphModelProto.Boundary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
    proto.GraphModelProto.Boundary.toObject = function (includeInstance, msg) {
        let f; let
            obj = {
                maxline: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
                minline: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
                topdataList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 3)) == null ? undefined : f,
                bottomdataList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 4)) == null ? undefined : f,
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
 * @return {!proto.GraphModelProto.Boundary}
 */
proto.GraphModelProto.Boundary.deserializeBinary = function (bytes) {
    let reader = new jspb.BinaryReader(bytes);
    let msg = new proto.GraphModelProto.Boundary();
    return proto.GraphModelProto.Boundary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GraphModelProto.Boundary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GraphModelProto.Boundary}
 */
proto.GraphModelProto.Boundary.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        let field = reader.getFieldNumber();
        switch (field) {
        case 1:
            var value = /** @type {number} */ (reader.readDouble());
            msg.setMaxline(value);
            break;
        case 2:
            var value = /** @type {number} */ (reader.readDouble());
            msg.setMinline(value);
            break;
        case 3:
            var value = /** @type {!Array<number>} */ (reader.readPackedDouble());
            msg.setTopdataList(value);
            break;
        case 4:
            var value = /** @type {!Array<number>} */ (reader.readPackedDouble());
            msg.setBottomdataList(value);
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
proto.GraphModelProto.Boundary.prototype.serializeBinary = function () {
    let writer = new jspb.BinaryWriter();
    proto.GraphModelProto.Boundary.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GraphModelProto.Boundary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GraphModelProto.Boundary.serializeBinaryToWriter = function (message, writer) {
    let f;
    f = message.getMaxline();
    if (f !== 0.0) {
        writer.writeDouble(
            1,
            f,
        );
    }
    f = message.getMinline();
    if (f !== 0.0) {
        writer.writeDouble(
            2,
            f,
        );
    }
    f = message.getTopdataList();
    if (f.length > 0) {
        writer.writePackedDouble(
            3,
            f,
        );
    }
    f = message.getBottomdataList();
    if (f.length > 0) {
        writer.writePackedDouble(
            4,
            f,
        );
    }
};


/**
 * optional double maxLine = 1;
 * @return {number}
 */
proto.GraphModelProto.Boundary.prototype.getMaxline = function () {
    return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.GraphModelProto.Boundary.prototype.setMaxline = function (value) {
    jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double minLine = 2;
 * @return {number}
 */
proto.GraphModelProto.Boundary.prototype.getMinline = function () {
    return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.GraphModelProto.Boundary.prototype.setMinline = function (value) {
    jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * repeated double topData = 3;
 * @return {!Array<number>}
 */
proto.GraphModelProto.Boundary.prototype.getTopdataList = function () {
    return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/** @param {!Array<number>} value */
proto.GraphModelProto.Boundary.prototype.setTopdataList = function (value) {
    jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 */
proto.GraphModelProto.Boundary.prototype.addTopdata = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.GraphModelProto.Boundary.prototype.clearTopdataList = function () {
    this.setTopdataList([]);
};


/**
 * repeated double bottomData = 4;
 * @return {!Array<number>}
 */
proto.GraphModelProto.Boundary.prototype.getBottomdataList = function () {
    return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/** @param {!Array<number>} value */
proto.GraphModelProto.Boundary.prototype.setBottomdataList = function (value) {
    jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 */
proto.GraphModelProto.Boundary.prototype.addBottomdata = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.GraphModelProto.Boundary.prototype.clearBottomdataList = function () {
    this.setBottomdataList([]);
};


/**
 * repeated int32 featureType = 1;
 * @return {!Array<number>}
 */
proto.GraphModelProto.prototype.getFeaturetypeList = function () {
    return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<number>} value */
proto.GraphModelProto.prototype.setFeaturetypeList = function (value) {
    jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 */
proto.GraphModelProto.prototype.addFeaturetype = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.GraphModelProto.prototype.clearFeaturetypeList = function () {
    this.setFeaturetypeList([]);
};


/**
 * optional int32 frequency = 2;
 * @return {number}
 */
proto.GraphModelProto.prototype.getFrequency = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.GraphModelProto.prototype.setFrequency = function (value) {
    jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Average averageOrig = 3;
 * @return {?proto.GraphModelProto.Average}
 */
proto.GraphModelProto.prototype.getAverageorig = function () {
    return /** @type{?proto.GraphModelProto.Average} */ (
        jspb.Message.getWrapperField(this, proto.GraphModelProto.Average, 3));
};


/** @param {?proto.GraphModelProto.Average|undefined} value */
proto.GraphModelProto.prototype.setAverageorig = function (value) {
    jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.GraphModelProto.prototype.clearAverageorig = function () {
    this.setAverageorig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GraphModelProto.prototype.hasAverageorig = function () {
    return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Average averageDer = 4;
 * @return {?proto.GraphModelProto.Average}
 */
proto.GraphModelProto.prototype.getAverageder = function () {
    return /** @type{?proto.GraphModelProto.Average} */ (
        jspb.Message.getWrapperField(this, proto.GraphModelProto.Average, 4));
};


/** @param {?proto.GraphModelProto.Average|undefined} value */
proto.GraphModelProto.prototype.setAverageder = function (value) {
    jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.GraphModelProto.prototype.clearAverageder = function () {
    this.setAverageder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GraphModelProto.prototype.hasAverageder = function () {
    return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Maximum maximum = 5;
 * @return {?proto.GraphModelProto.Maximum}
 */
proto.GraphModelProto.prototype.getMaximum = function () {
    return /** @type{?proto.GraphModelProto.Maximum} */ (
        jspb.Message.getWrapperField(this, proto.GraphModelProto.Maximum, 5));
};


/** @param {?proto.GraphModelProto.Maximum|undefined} value */
proto.GraphModelProto.prototype.setMaximum = function (value) {
    jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.GraphModelProto.prototype.clearMaximum = function () {
    this.setMaximum(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GraphModelProto.prototype.hasMaximum = function () {
    return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Boundary boundaryOrig = 6;
 * @return {?proto.GraphModelProto.Boundary}
 */
proto.GraphModelProto.prototype.getBoundaryorig = function () {
    return /** @type{?proto.GraphModelProto.Boundary} */ (
        jspb.Message.getWrapperField(this, proto.GraphModelProto.Boundary, 6));
};


/** @param {?proto.GraphModelProto.Boundary|undefined} value */
proto.GraphModelProto.prototype.setBoundaryorig = function (value) {
    jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.GraphModelProto.prototype.clearBoundaryorig = function () {
    this.setBoundaryorig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GraphModelProto.prototype.hasBoundaryorig = function () {
    return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Boundary boundaryDer = 7;
 * @return {?proto.GraphModelProto.Boundary}
 */
proto.GraphModelProto.prototype.getBoundaryder = function () {
    return /** @type{?proto.GraphModelProto.Boundary} */ (
        jspb.Message.getWrapperField(this, proto.GraphModelProto.Boundary, 7));
};


/** @param {?proto.GraphModelProto.Boundary|undefined} value */
proto.GraphModelProto.prototype.setBoundaryder = function (value) {
    jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.GraphModelProto.prototype.clearBoundaryder = function () {
    this.setBoundaryder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GraphModelProto.prototype.hasBoundaryder = function () {
    return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto);
