// Generated by dedot cli

import type { Bytes } from "dedot/codecs";

export type InkPrimitivesLangError = "CouldNotReadInput";

export type OpenbrushContractsErrorsPsp22Psp22Error =
  | { type: "Custom"; value: Bytes }
  | { type: "InsufficientBalance" }
  | { type: "InsufficientAllowance" }
  | { type: "ZeroRecipientAddress" }
  | { type: "ZeroSenderAddress" }
  | { type: "SafeTransferCheckFailed"; value: Bytes };
