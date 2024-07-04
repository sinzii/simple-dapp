// Generated by dedot cli

import type { GenericSubstrateApi } from "dedot/types";
import type { BytesLike } from "dedot/codecs";
import type {
  GenericConstructorTx,
  GenericConstructorTxCall,
  ConstructorTxOptions,
  GenericInstantiateSubmittableExtrinsic,
} from "dedot/contracts";

export interface ConstructorTx<ChainApi extends GenericSubstrateApi>
  extends GenericConstructorTx<ChainApi> {
  /**
   *
   * @param {bigint} totalSupply
   * @param {BytesLike | undefined} name
   * @param {BytesLike | undefined} symbol
   * @param {number} decimal
   * @param {ConstructorTxOptions} options
   *
   * @selector 0x9bae9d5e
   **/
  new: GenericConstructorTxCall<
    ChainApi,
    (
      totalSupply: bigint,
      name: BytesLike | undefined,
      symbol: BytesLike | undefined,
      decimal: number,
      options: ConstructorTxOptions,
    ) => GenericInstantiateSubmittableExtrinsic<ChainApi>
  >;
}
