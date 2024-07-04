// Generated by dedot cli

import type { GenericSubstrateApi } from "dedot/types";
import type { AccountId32Like } from "dedot/codecs";
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
   * @param {AccountId32Like} contractOwner
   * @param {string} name
   * @param {string} symbol
   * @param {ConstructorTxOptions} options
   *
   * @selector 0x9bae9d5e
   **/
  new: GenericConstructorTxCall<
    ChainApi,
    (
      contractOwner: AccountId32Like,
      name: string,
      symbol: string,
      options: ConstructorTxOptions,
    ) => GenericInstantiateSubmittableExtrinsic<ChainApi>
  >;
}
