// Generated by dedot cli

import type { GenericSubstrateApi } from "dedot/types";
import type { BytesLike } from "dedot/codecs";
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
   * @param {bigint} totalSupply
   * @param {BytesLike | undefined} name
   * @param {BytesLike | undefined} symbol
   * @param {number} decimal
   * @param {ConstructorCallOptions} options
   *
   * @selector 0x9bae9d5e
   **/
  new: GenericConstructorQueryCall<
    ChainApi,
    (
      totalSupply: bigint,
      name: BytesLike | undefined,
      symbol: BytesLike | undefined,
      decimal: number,
      options: ConstructorCallOptions,
    ) => Promise<ContractInstantiateResult<ChainApi>>
  >;
}