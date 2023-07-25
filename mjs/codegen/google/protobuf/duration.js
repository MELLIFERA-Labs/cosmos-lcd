import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseDuration() {
    return {
        seconds: Long.ZERO,
        nanos: 0
    };
}
export const Duration = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.seconds.isZero()) {
            writer.uint32(8).int64(message.seconds);
        }
        if (message.nanos !== 0) {
            writer.uint32(16).int32(message.nanos);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDuration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seconds = reader.int64();
                    break;
                case 2:
                    message.nanos = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDuration();
        message.seconds = object.seconds !== undefined && object.seconds !== null ? Long.fromValue(object.seconds) : Long.ZERO;
        message.nanos = object.nanos ?? 0;
        return message;
    },
    fromAmino(object) {
        const value = parseInt(object);
        return {
            seconds: Long.fromNumber(Math.floor(value / 1000000000)),
            nanos: value % 1000000000
        };
    },
    toAmino(message) {
        return (message.seconds.toInt() * 1000000000 + message.nanos).toString();
    },
    fromAminoMsg(object) {
        return Duration.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Duration.decode(message.value);
    },
    toProto(message) {
        return Duration.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.Duration",
            value: Duration.encode(message).finish()
        };
    }
};
//# sourceMappingURL=duration.js.map