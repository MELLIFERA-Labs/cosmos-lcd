import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBasePageRequest() {
    return {
        key: new Uint8Array(),
        offset: Long.UZERO,
        limit: Long.UZERO,
        countTotal: false,
        reverse: false
    };
}
export const PageRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (!message.offset.isZero()) {
            writer.uint32(16).uint64(message.offset);
        }
        if (!message.limit.isZero()) {
            writer.uint32(24).uint64(message.limit);
        }
        if (message.countTotal === true) {
            writer.uint32(32).bool(message.countTotal);
        }
        if (message.reverse === true) {
            writer.uint32(40).bool(message.reverse);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.offset = reader.uint64();
                    break;
                case 3:
                    message.limit = reader.uint64();
                    break;
                case 4:
                    message.countTotal = reader.bool();
                    break;
                case 5:
                    message.reverse = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePageRequest();
        message.key = object.key ?? new Uint8Array();
        message.offset = object.offset !== undefined && object.offset !== null ? Long.fromValue(object.offset) : Long.UZERO;
        message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
        message.countTotal = object.countTotal ?? false;
        message.reverse = object.reverse ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            offset: Long.fromString(object.offset),
            limit: Long.fromString(object.limit),
            countTotal: object.count_total,
            reverse: object.reverse
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.offset = message.offset ? message.offset.toString() : undefined;
        obj.limit = message.limit ? message.limit.toString() : undefined;
        obj.count_total = message.countTotal;
        obj.reverse = message.reverse;
        return obj;
    },
    fromAminoMsg(object) {
        return PageRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PageRequest",
            value: PageRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PageRequest.decode(message.value);
    },
    toProto(message) {
        return PageRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.query.v1beta1.PageRequest",
            value: PageRequest.encode(message).finish()
        };
    }
};
function createBasePageResponse() {
    return {
        nextKey: new Uint8Array(),
        total: Long.UZERO
    };
}
export const PageResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nextKey.length !== 0) {
            writer.uint32(10).bytes(message.nextKey);
        }
        if (!message.total.isZero()) {
            writer.uint32(16).uint64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextKey = reader.bytes();
                    break;
                case 2:
                    message.total = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePageResponse();
        message.nextKey = object.nextKey ?? new Uint8Array();
        message.total = object.total !== undefined && object.total !== null ? Long.fromValue(object.total) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            nextKey: object.next_key,
            total: Long.fromString(object.total)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.next_key = message.nextKey;
        obj.total = message.total ? message.total.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PageResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PageResponse",
            value: PageResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PageResponse.decode(message.value);
    },
    toProto(message) {
        return PageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.query.v1beta1.PageResponse",
            value: PageResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=pagination.js.map