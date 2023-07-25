import * as _2 from "./auth/v1beta1/auth";
import * as _3 from "./auth/v1beta1/genesis";
import * as _4 from "./auth/v1beta1/query";
import * as _5 from "./authz/v1beta1/authz";
import * as _6 from "./authz/v1beta1/event";
import * as _7 from "./authz/v1beta1/genesis";
import * as _8 from "./authz/v1beta1/query";
import * as _9 from "./authz/v1beta1/tx";
import * as _10 from "./bank/v1beta1/authz";
import * as _11 from "./bank/v1beta1/bank";
import * as _12 from "./bank/v1beta1/genesis";
import * as _13 from "./bank/v1beta1/query";
import * as _14 from "./bank/v1beta1/tx";
import * as _15 from "./base/abci/v1beta1/abci";
import * as _16 from "./base/query/v1beta1/pagination";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/v1beta1/coin";
import * as _19 from "./crypto/ed25519/keys";
import * as _20 from "./crypto/hd/v1/hd";
import * as _21 from "./crypto/keyring/v1/record";
import * as _22 from "./crypto/multisig/keys";
import * as _23 from "./crypto/secp256k1/keys";
import * as _24 from "./crypto/secp256r1/keys";
import * as _25 from "./distribution/v1beta1/distribution";
import * as _26 from "./distribution/v1beta1/genesis";
import * as _27 from "./distribution/v1beta1/query";
import * as _28 from "./distribution/v1beta1/tx";
import * as _29 from "./gov/v1beta1/genesis";
import * as _30 from "./gov/v1beta1/gov";
import * as _31 from "./gov/v1beta1/query";
import * as _32 from "./gov/v1beta1/tx";
import * as _33 from "./staking/v1beta1/authz";
import * as _34 from "./staking/v1beta1/genesis";
import * as _35 from "./staking/v1beta1/query";
import * as _36 from "./staking/v1beta1/staking";
import * as _37 from "./staking/v1beta1/tx";
import * as _38 from "./tx/signing/v1beta1/signing";
import * as _39 from "./tx/v1beta1/service";
import * as _40 from "./tx/v1beta1/tx";
import * as _41 from "./upgrade/v1beta1/query";
import * as _42 from "./upgrade/v1beta1/tx";
import * as _43 from "./upgrade/v1beta1/upgrade";
import * as _63 from "./authz/v1beta1/tx.amino";
import * as _64 from "./bank/v1beta1/tx.amino";
import * as _65 from "./distribution/v1beta1/tx.amino";
import * as _66 from "./gov/v1beta1/tx.amino";
import * as _67 from "./staking/v1beta1/tx.amino";
import * as _68 from "./upgrade/v1beta1/tx.amino";
import * as _69 from "./authz/v1beta1/tx.registry";
import * as _70 from "./bank/v1beta1/tx.registry";
import * as _71 from "./distribution/v1beta1/tx.registry";
import * as _72 from "./gov/v1beta1/tx.registry";
import * as _73 from "./staking/v1beta1/tx.registry";
import * as _74 from "./upgrade/v1beta1/tx.registry";
import * as _75 from "./auth/v1beta1/query.lcd";
import * as _76 from "./authz/v1beta1/query.lcd";
import * as _77 from "./bank/v1beta1/query.lcd";
import * as _78 from "./distribution/v1beta1/query.lcd";
import * as _79 from "./gov/v1beta1/query.lcd";
import * as _80 from "./staking/v1beta1/query.lcd";
import * as _81 from "./tx/v1beta1/service.lcd";
import * as _82 from "./upgrade/v1beta1/query.lcd";
import * as _83 from "./lcd";
export var cosmos;
(function (cosmos) {
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._2,
            ..._3,
            ..._4,
            ..._75
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        authz.v1beta1 = {
            ..._5,
            ..._6,
            ..._7,
            ..._8,
            ..._9,
            ..._63,
            ..._69,
            ..._76
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        bank.v1beta1 = {
            ..._10,
            ..._11,
            ..._12,
            ..._13,
            ..._14,
            ..._64,
            ..._70,
            ..._77
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._15
            };
        })(abci = base.abci || (base.abci = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._16
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v2alpha1 = {
                ..._17
            };
        })(reflection = base.reflection || (base.reflection = {}));
        base.v1beta1 = {
            ..._18
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._19
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._20
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._21
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._22
        };
        crypto.secp256k1 = {
            ..._23
        };
        crypto.secp256r1 = {
            ..._24
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        distribution.v1beta1 = {
            ..._25,
            ..._26,
            ..._27,
            ..._28,
            ..._65,
            ..._71,
            ..._78
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let gov;
    (function (gov) {
        gov.v1beta1 = {
            ..._29,
            ..._30,
            ..._31,
            ..._32,
            ..._66,
            ..._72,
            ..._79
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
            ..._33,
            ..._34,
            ..._35,
            ..._36,
            ..._37,
            ..._67,
            ..._73,
            ..._80
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._38
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._39,
            ..._40,
            ..._81
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._41,
            ..._42,
            ..._43,
            ..._68,
            ..._74,
            ..._82
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    cosmos.ClientFactory = {
        ..._83
    };
})(cosmos || (cosmos = {}));
//# sourceMappingURL=bundle.js.map