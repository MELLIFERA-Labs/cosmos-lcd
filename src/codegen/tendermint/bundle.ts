import * as _52 from "./abci/types";
import * as _53 from "./crypto/keys";
import * as _54 from "./crypto/proof";
import * as _55 from "./libs/bits/types";
import * as _56 from "./p2p/types";
import * as _57 from "./types/block";
import * as _58 from "./types/evidence";
import * as _59 from "./types/params";
import * as _60 from "./types/types";
import * as _61 from "./types/validator";
import * as _62 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._52
  };
  export const crypto = {
    ..._53,
    ..._54
  };
  export namespace libs {
    export const bits = {
      ..._55
    };
  }
  export const p2p = {
    ..._56
  };
  export const types = {
    ..._57,
    ..._58,
    ..._59,
    ..._60,
    ..._61
  };
  export const version = {
    ..._62
  };
}