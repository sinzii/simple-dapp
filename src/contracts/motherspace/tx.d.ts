// Generated by dedot cli

import type { GenericSubstrateApi } from "dedot/types";
import type { Hash, AccountId32Like, FixedBytes } from "dedot/codecs";
import type {
  GenericContractTx,
  GenericContractTxCall,
  ContractTxOptions,
  ContractSubmittableExtrinsic,
} from "dedot/contracts";
import type { MotherspaceSpaceInfo, MotherspaceSpaceConfig } from "./types";

export interface ContractTx<ChainApi extends GenericSubstrateApi>
  extends GenericContractTx<ChainApi> {
  /**
   *
   * @param {Hash} newSpaceCode
   * @param {ContractTxOptions} options
   *
   * @selector 0x5d56dce0
   **/
  upgradeSpaceCode: GenericContractTxCall<
    ChainApi,
    (
      newSpaceCode: Hash,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {MotherspaceSpaceInfo} info
   * @param {MotherspaceSpaceConfig | undefined} config
   * @param {AccountId32Like | undefined} owner
   * @param {Array<FixedBytes<4>> | undefined} plugins
   * @param {ContractTxOptions} options
   *
   * @selector 0x02cb5e5e
   **/
  deployNewSpace: GenericContractTxCall<
    ChainApi,
    (
      info: MotherspaceSpaceInfo,
      config: MotherspaceSpaceConfig | undefined,
      owner: AccountId32Like | undefined,
      plugins: Array<FixedBytes<4>> | undefined,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {AccountId32Like} who
   * @param {ContractTxOptions} options
   *
   * @selector 0x71a26402
   **/
  addSpaceMember: GenericContractTxCall<
    ChainApi,
    (
      who: AccountId32Like,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {AccountId32Like} who
   * @param {ContractTxOptions} options
   *
   * @selector 0xd474e856
   **/
  removeSpaceMember: GenericContractTxCall<
    ChainApi,
    (
      who: AccountId32Like,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {FixedBytes<4>} pluginId
   * @param {AccountId32Like} launcherAddress
   * @param {ContractTxOptions} options
   *
   * @selector 0x28859bb4
   **/
  registerPluginLauncher: GenericContractTxCall<
    ChainApi,
    (
      pluginId: FixedBytes<4>,
      launcherAddress: AccountId32Like,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {FixedBytes<4>} pluginId
   * @param {Hash} newCodeHash
   * @param {ContractTxOptions} options
   *
   * @selector 0xb13942d9
   **/
  upgradePluginCode: GenericContractTxCall<
    ChainApi,
    (
      pluginId: FixedBytes<4>,
      newCodeHash: Hash,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   * Install plugins
   *
   * @param {AccountId32Like} spaceId
   * @param {Array<FixedBytes<4>>} plugins
   * @param {ContractTxOptions} options
   *
   * @selector 0xe5b8ee4b
   **/
  installPlugins: GenericContractTxCall<
    ChainApi,
    (
      spaceId: AccountId32Like,
      plugins: Array<FixedBytes<4>>,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {AccountId32Like} who
   * @param {ContractTxOptions} options
   *
   * @selector 0x107e33ea
   **/
  transferOwnership: GenericContractTxCall<
    ChainApi,
    (
      who: AccountId32Like,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {Hash} codeHash
   * @param {ContractTxOptions} options
   *
   * @selector 0x1700ae80
   **/
  upgradeableSetCodeHash: GenericContractTxCall<
    ChainApi,
    (
      codeHash: Hash,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;
}
