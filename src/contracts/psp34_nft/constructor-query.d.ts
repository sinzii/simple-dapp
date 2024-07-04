// Generated by dedot cli

import type { GenericSubstrateApi } from "dedot/types";
import type { AccountId32Like } from "dedot/codecs";
import type {
  GenericConstructorQuery,
  GenericConstructorQueryCall,
  ConstructorCallOptions,
  ContractInstantiateResult,
} from "dedot/contracts";

export interface ConstructorQuery<ChainApi extends GenericSubstrateApi>
  extends GenericConstructorQuery<ChainApi> {
  /**
   *
   * @param {AccountId32Like} contractOwner
   * @param {string} name
   * @param {string} symbol
   * @param {ConstructorCallOptions} options
   *
   * @selector 0x9bae9d5e
   **/
  new: GenericConstructorQueryCall<
    ChainApi,
    (
      contractOwner: AccountId32Like,
      name: string,
      symbol: string,
      options: ConstructorCallOptions,
    ) => Promise<ContractInstantiateResult<ChainApi>>
  >;
}