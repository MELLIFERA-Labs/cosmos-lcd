import { Duration } from "../../google/protobuf/duration";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseConsensusParams() {
    return {
        block: BlockParams.fromPartial({}),
        evidence: EvidenceParams.fromPartial({}),
        validator: ValidatorParams.fromPartial({}),
        version: VersionParams.fromPartial({})
    };
}
export const ConsensusParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.block !== undefined) {
            BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = VersionParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConsensusParams();
        message.block = object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : undefined;
        message.validator = object.validator !== undefined && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : undefined;
        message.version = object.version !== undefined && object.version !== null ? VersionParams.fromPartial(object.version) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            block: object?.block ? BlockParams.fromAmino(object.block) : undefined,
            evidence: object?.evidence ? EvidenceParams.fromAmino(object.evidence) : undefined,
            validator: object?.validator ? ValidatorParams.fromAmino(object.validator) : undefined,
            version: object?.version ? VersionParams.fromAmino(object.version) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block = message.block ? BlockParams.toAmino(message.block) : undefined;
        obj.evidence = message.evidence ? EvidenceParams.toAmino(message.evidence) : undefined;
        obj.validator = message.validator ? ValidatorParams.toAmino(message.validator) : undefined;
        obj.version = message.version ? VersionParams.toAmino(message.version) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConsensusParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ConsensusParams.decode(message.value);
    },
    toProto(message) {
        return ConsensusParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ConsensusParams",
            value: ConsensusParams.encode(message).finish()
        };
    }
};
function createBaseBlockParams() {
    return {
        maxBytes: Long.ZERO,
        maxGas: Long.ZERO,
        timeIotaMs: Long.ZERO
    };
}
export const BlockParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.maxBytes.isZero()) {
            writer.uint32(8).int64(message.maxBytes);
        }
        if (!message.maxGas.isZero()) {
            writer.uint32(16).int64(message.maxGas);
        }
        if (!message.timeIotaMs.isZero()) {
            writer.uint32(24).int64(message.timeIotaMs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxBytes = reader.int64();
                    break;
                case 2:
                    message.maxGas = reader.int64();
                    break;
                case 3:
                    message.timeIotaMs = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBlockParams();
        message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? Long.fromValue(object.maxBytes) : Long.ZERO;
        message.maxGas = object.maxGas !== undefined && object.maxGas !== null ? Long.fromValue(object.maxGas) : Long.ZERO;
        message.timeIotaMs = object.timeIotaMs !== undefined && object.timeIotaMs !== null ? Long.fromValue(object.timeIotaMs) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            maxBytes: Long.fromString(object.max_bytes),
            maxGas: Long.fromString(object.max_gas),
            timeIotaMs: Long.fromString(object.time_iota_ms)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.max_bytes = message.maxBytes ? message.maxBytes.toString() : undefined;
        obj.max_gas = message.maxGas ? message.maxGas.toString() : undefined;
        obj.time_iota_ms = message.timeIotaMs ? message.timeIotaMs.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BlockParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BlockParams.decode(message.value);
    },
    toProto(message) {
        return BlockParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockParams",
            value: BlockParams.encode(message).finish()
        };
    }
};
function createBaseEvidenceParams() {
    return {
        maxAgeNumBlocks: Long.ZERO,
        maxAgeDuration: undefined,
        maxBytes: Long.ZERO
    };
}
export const EvidenceParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.maxAgeNumBlocks.isZero()) {
            writer.uint32(8).int64(message.maxAgeNumBlocks);
        }
        if (message.maxAgeDuration !== undefined) {
            Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
        }
        if (!message.maxBytes.isZero()) {
            writer.uint32(24).int64(message.maxBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidenceParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxAgeNumBlocks = reader.int64();
                    break;
                case 2:
                    message.maxAgeDuration = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.maxBytes = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEvidenceParams();
        message.maxAgeNumBlocks = object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null ? Long.fromValue(object.maxAgeNumBlocks) : Long.ZERO;
        message.maxAgeDuration = object.maxAgeDuration !== undefined && object.maxAgeDuration !== null ? Duration.fromPartial(object.maxAgeDuration) : undefined;
        message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? Long.fromValue(object.maxBytes) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            maxAgeNumBlocks: Long.fromString(object.max_age_num_blocks),
            maxAgeDuration: object?.max_age_duration ? Duration.fromAmino(object.max_age_duration) : undefined,
            maxBytes: Long.fromString(object.max_bytes)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.max_age_num_blocks = message.maxAgeNumBlocks ? message.maxAgeNumBlocks.toString() : undefined;
        obj.max_age_duration = message.maxAgeDuration ? Duration.toAmino(message.maxAgeDuration) : undefined;
        obj.max_bytes = message.maxBytes ? message.maxBytes.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EvidenceParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EvidenceParams.decode(message.value);
    },
    toProto(message) {
        return EvidenceParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.EvidenceParams",
            value: EvidenceParams.encode(message).finish()
        };
    }
};
function createBaseValidatorParams() {
    return {
        pubKeyTypes: []
    };
}
export const ValidatorParams = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pubKeyTypes) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKeyTypes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorParams();
        message.pubKeyTypes = object.pubKeyTypes?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            pubKeyTypes: Array.isArray(object?.pub_key_types) ? object.pub_key_types.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pubKeyTypes) {
            obj.pub_key_types = message.pubKeyTypes.map(e => e);
        }
        else {
            obj.pub_key_types = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ValidatorParams.decode(message.value);
    },
    toProto(message) {
        return ValidatorParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ValidatorParams",
            value: ValidatorParams.encode(message).finish()
        };
    }
};
function createBaseVersionParams() {
    return {
        appVersion: Long.UZERO
    };
}
export const VersionParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appVersion.isZero()) {
            writer.uint32(8).uint64(message.appVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appVersion = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVersionParams();
        message.appVersion = object.appVersion !== undefined && object.appVersion !== null ? Long.fromValue(object.appVersion) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            appVersion: Long.fromString(object.app_version)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.app_version = message.appVersion ? message.appVersion.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return VersionParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return VersionParams.decode(message.value);
    },
    toProto(message) {
        return VersionParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.VersionParams",
            value: VersionParams.encode(message).finish()
        };
    }
};
function createBaseHashedParams() {
    return {
        blockMaxBytes: Long.ZERO,
        blockMaxGas: Long.ZERO
    };
}
export const HashedParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.blockMaxBytes.isZero()) {
            writer.uint32(8).int64(message.blockMaxBytes);
        }
        if (!message.blockMaxGas.isZero()) {
            writer.uint32(16).int64(message.blockMaxGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHashedParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockMaxBytes = reader.int64();
                    break;
                case 2:
                    message.blockMaxGas = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseHashedParams();
        message.blockMaxBytes = object.blockMaxBytes !== undefined && object.blockMaxBytes !== null ? Long.fromValue(object.blockMaxBytes) : Long.ZERO;
        message.blockMaxGas = object.blockMaxGas !== undefined && object.blockMaxGas !== null ? Long.fromValue(object.blockMaxGas) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            blockMaxBytes: Long.fromString(object.block_max_bytes),
            blockMaxGas: Long.fromString(object.block_max_gas)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block_max_bytes = message.blockMaxBytes ? message.blockMaxBytes.toString() : undefined;
        obj.block_max_gas = message.blockMaxGas ? message.blockMaxGas.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return HashedParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return HashedParams.decode(message.value);
    },
    toProto(message) {
        return HashedParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.HashedParams",
            value: HashedParams.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map