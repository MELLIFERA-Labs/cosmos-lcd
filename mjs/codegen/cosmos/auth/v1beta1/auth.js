import { Any } from "../../../google/protobuf/any";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseBaseAccount() {
    return {
        address: "",
        pubKey: undefined,
        accountNumber: Long.UZERO,
        sequence: Long.UZERO
    };
}
export const BaseAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pubKey !== undefined) {
            Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (!message.accountNumber.isZero()) {
            writer.uint32(24).uint64(message.accountNumber);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(32).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBaseAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pubKey = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.accountNumber = reader.uint64();
                    break;
                case 4:
                    message.sequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBaseAccount();
        message.address = object.address ?? "";
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? Long.fromValue(object.accountNumber) : Long.UZERO;
        message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pubKey: object?.pub_key ? Any.fromAmino(object.pub_key) : undefined,
            accountNumber: Long.fromString(object.account_number),
            sequence: Long.fromString(object.sequence)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pub_key = message.pubKey ? Any.toAmino(message.pubKey) : undefined;
        obj.account_number = message.accountNumber ? message.accountNumber.toString() : undefined;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BaseAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BaseAccount",
            value: BaseAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return BaseAccount.decode(message.value);
    },
    toProto(message) {
        return BaseAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
            value: BaseAccount.encode(message).finish()
        };
    }
};
function createBaseModuleAccount() {
    return {
        baseAccount: BaseAccount.fromPartial({}),
        name: "",
        permissions: []
    };
}
export const ModuleAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.baseAccount !== undefined) {
            BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        for (const v of message.permissions) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccount = BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.permissions.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModuleAccount();
        message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
        message.name = object.name ?? "";
        message.permissions = object.permissions?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            baseAccount: object?.base_account ? BaseAccount.fromAmino(object.base_account) : undefined,
            name: object.name,
            permissions: Array.isArray(object?.permissions) ? object.permissions.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount) : undefined;
        obj.name = message.name;
        if (message.permissions) {
            obj.permissions = message.permissions.map(e => e);
        }
        else {
            obj.permissions = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleAccount",
            value: ModuleAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModuleAccount.decode(message.value);
    },
    toProto(message) {
        return ModuleAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
            value: ModuleAccount.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        maxMemoCharacters: Long.UZERO,
        txSigLimit: Long.UZERO,
        txSizeCostPerByte: Long.UZERO,
        sigVerifyCostEd25519: Long.UZERO,
        sigVerifyCostSecp256k1: Long.UZERO
    };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.maxMemoCharacters.isZero()) {
            writer.uint32(8).uint64(message.maxMemoCharacters);
        }
        if (!message.txSigLimit.isZero()) {
            writer.uint32(16).uint64(message.txSigLimit);
        }
        if (!message.txSizeCostPerByte.isZero()) {
            writer.uint32(24).uint64(message.txSizeCostPerByte);
        }
        if (!message.sigVerifyCostEd25519.isZero()) {
            writer.uint32(32).uint64(message.sigVerifyCostEd25519);
        }
        if (!message.sigVerifyCostSecp256k1.isZero()) {
            writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxMemoCharacters = reader.uint64();
                    break;
                case 2:
                    message.txSigLimit = reader.uint64();
                    break;
                case 3:
                    message.txSizeCostPerByte = reader.uint64();
                    break;
                case 4:
                    message.sigVerifyCostEd25519 = reader.uint64();
                    break;
                case 5:
                    message.sigVerifyCostSecp256k1 = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.maxMemoCharacters = object.maxMemoCharacters !== undefined && object.maxMemoCharacters !== null ? Long.fromValue(object.maxMemoCharacters) : Long.UZERO;
        message.txSigLimit = object.txSigLimit !== undefined && object.txSigLimit !== null ? Long.fromValue(object.txSigLimit) : Long.UZERO;
        message.txSizeCostPerByte = object.txSizeCostPerByte !== undefined && object.txSizeCostPerByte !== null ? Long.fromValue(object.txSizeCostPerByte) : Long.UZERO;
        message.sigVerifyCostEd25519 = object.sigVerifyCostEd25519 !== undefined && object.sigVerifyCostEd25519 !== null ? Long.fromValue(object.sigVerifyCostEd25519) : Long.UZERO;
        message.sigVerifyCostSecp256k1 = object.sigVerifyCostSecp256k1 !== undefined && object.sigVerifyCostSecp256k1 !== null ? Long.fromValue(object.sigVerifyCostSecp256k1) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            maxMemoCharacters: Long.fromString(object.max_memo_characters),
            txSigLimit: Long.fromString(object.tx_sig_limit),
            txSizeCostPerByte: Long.fromString(object.tx_size_cost_per_byte),
            sigVerifyCostEd25519: Long.fromString(object.sig_verify_cost_ed25519),
            sigVerifyCostSecp256k1: Long.fromString(object.sig_verify_cost_secp256k1)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.max_memo_characters = message.maxMemoCharacters ? message.maxMemoCharacters.toString() : undefined;
        obj.tx_sig_limit = message.txSigLimit ? message.txSigLimit.toString() : undefined;
        obj.tx_size_cost_per_byte = message.txSizeCostPerByte ? message.txSizeCostPerByte.toString() : undefined;
        obj.sig_verify_cost_ed25519 = message.sigVerifyCostEd25519 ? message.sigVerifyCostEd25519.toString() : undefined;
        obj.sig_verify_cost_secp256k1 = message.sigVerifyCostSecp256k1 ? message.sigVerifyCostSecp256k1.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=auth.js.map