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
   * @param {AccountId32Like} collectionContractAddress
   * @param {AccountId32Like} stakingContractAddress
   * @param {number} platformFee
   * @param {ConstructorTxOptions} options
   *
   * @selector 0x9bae9d5e
   **/
  new: GenericConstructorTxCall<
    ChainApi,
    (
      collectionContractAddress: AccountId32Like,
      stakingContractAddress: AccountId32Like,
      platformFee: number,
      options: ConstructorTxOptions,
    ) => GenericInstantiateSubmittableExtrinsic<ChainApi>
  >;
}