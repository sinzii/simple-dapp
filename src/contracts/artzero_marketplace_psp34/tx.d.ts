// Generated by dedot cli

import type { GenericSubstrateApi } from "dedot/types";
import type { AccountId32Like, BytesLike, FixedBytes } from "dedot/codecs";
import type {
  GenericContractTx,
  GenericContractTxCall,
  ContractTxOptions,
  ContractSubmittableExtrinsic,
} from "dedot/contracts";
import type { OpenbrushContractsTypesId } from "./types";

export interface ContractTx<ChainApi extends GenericSubstrateApi>
  extends GenericContractTx<ChainApi> {
  /**
   *
   * @param {AccountId32Like} collectionContractAddress
   * @param {AccountId32Like} stakingContractAddress
   * @param {number} platformFee
   * @param {ContractTxOptions} options
   *
   * @selector 0xf2f6dba3
   **/
  initialize: GenericContractTxCall<
    ChainApi,
    (
      collectionContractAddress: AccountId32Like,
      stakingContractAddress: AccountId32Like,
      platformFee: number,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   * List the NFT onto the marketplace - FREE of charge
   *
   * @param {AccountId32Like} nftContractAddress
   * @param {OpenbrushContractsTypesId} tokenId
   * @param {bigint} price
   * @param {BytesLike} data
   * @param {ContractTxOptions} options
   *
   * @selector 0x832a283f
   **/
  list: GenericContractTxCall<
    ChainApi,
    (
      nftContractAddress: AccountId32Like,
      tokenId: OpenbrushContractsTypesId,
      price: bigint,
      data: BytesLike,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   * Unlist the NFT from the marketplace - FREE of charge
   *
   * @param {AccountId32Like} nftContractAddress
   * @param {OpenbrushContractsTypesId} tokenId
   * @param {ContractTxOptions} options
   *
   * @selector 0x5aeeb315
   **/
  unlist: GenericContractTxCall<
    ChainApi,
    (
      nftContractAddress: AccountId32Like,
      tokenId: OpenbrushContractsTypesId,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   * Buy Token at listed price
   *
   * @param {AccountId32Like} nftContractAddress
   * @param {OpenbrushContractsTypesId} tokenId
   * @param {ContractTxOptions} options
   *
   * @selector 0x15d62801
   **/
  buy: GenericContractTxCall<
    ChainApi,
    (
      nftContractAddress: AccountId32Like,
      tokenId: OpenbrushContractsTypesId,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   * Bid Token for sale, transferred_value() is the bidding price
   *
   * @param {AccountId32Like} nftContractAddress
   * @param {OpenbrushContractsTypesId} tokenId
   * @param {ContractTxOptions} options
   *
   * @selector 0x668d28a7
   **/
  bid: GenericContractTxCall<
    ChainApi,
    (
      nftContractAddress: AccountId32Like,
      tokenId: OpenbrushContractsTypesId,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   * Remove Bid From Active Sale
   *
   * @param {AccountId32Like} nftContractAddress
   * @param {OpenbrushContractsTypesId} tokenId
   * @param {ContractTxOptions} options
   *
   * @selector 0x412b6e0f
   **/
  removeBid: GenericContractTxCall<
    ChainApi,
    (
      nftContractAddress: AccountId32Like,
      tokenId: OpenbrushContractsTypesId,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   * Accept Bid
   *
   * @param {AccountId32Like} nftContractAddress
   * @param {OpenbrushContractsTypesId} tokenId
   * @param {number} bidIndex
   * @param {ContractTxOptions} options
   *
   * @selector 0x1856538b
   **/
  acceptBid: GenericContractTxCall<
    ChainApi,
    (
      nftContractAddress: AccountId32Like,
      tokenId: OpenbrushContractsTypesId,
      bidIndex: number,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   * Transfers ownership of the contract to a `new_owner`.
   * Can only be called by the current owner.
   *
   * On success a `OwnershipTransferred` event is emitted.
   *
   * # Errors
   *
   * Panics with `CallerIsNotOwner` error if caller is not owner.
   *
   * Panics with `NewOwnerIsZero` error if new owner's address is zero.
   *
   * @param {AccountId32Like} newOwner
   * @param {ContractTxOptions} options
   *
   * @selector 0x11f43efd
   **/
  ownableTransferOwnership: GenericContractTxCall<
    ChainApi,
    (
      newOwner: AccountId32Like,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   * Leaves the contract without owner. It will not be possible to call
   * owner's functions anymore. Can only be called by the current owner.
   *
   * NOTE: Renouncing ownership will leave the contract without an owner,
   * thereby removing any functionality that is only available to the owner.
   *
   * On success a `OwnershipTransferred` event is emitted.
   *
   * # Errors
   *
   * Panics with `CallerIsNotOwner` error if caller is not owner
   *
   * @param {ContractTxOptions} options
   *
   * @selector 0x5e228753
   **/
  ownableRenounceOwnership: GenericContractTxCall<
    ChainApi,
    (options: ContractTxOptions) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   * This function allow contract owner withdraw NFT to an account in case there is any NFT sent to contract by mistake
   *
   * @param {AccountId32Like} nftContractAddress
   * @param {OpenbrushContractsTypesId} tokenId
   * @param {AccountId32Like} receiver
   * @param {ContractTxOptions} options
   *
   * @selector 0xed1e1dfa
   **/
  adminTraitTranferNft: GenericContractTxCall<
    ChainApi,
    (
      nftContractAddress: AccountId32Like,
      tokenId: OpenbrushContractsTypesId,
      receiver: AccountId32Like,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   * This function allows contract owner to withdraw contract balance to his account.
   *
   * @param {bigint} value
   * @param {AccountId32Like} receiver
   * @param {ContractTxOptions} options
   *
   * @selector 0x07573e99
   **/
  adminTraitWithdrawFee: GenericContractTxCall<
    ChainApi,
    (
      value: bigint,
      receiver: AccountId32Like,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   * This function allow contract owner withdraw PSP22 to an account in case there is any token sent to contract by mistake
   *
   * @param {AccountId32Like} psp22ContractAddress
   * @param {bigint} amount
   * @param {AccountId32Like} receiver
   * @param {ContractTxOptions} options
   *
   * @selector 0xd9aad284
   **/
  adminTraitTranferPsp22: GenericContractTxCall<
    ChainApi,
    (
      psp22ContractAddress: AccountId32Like,
      amount: bigint,
      receiver: AccountId32Like,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   * This function allow contract owner modifies the code which is used to execute calls to this contract address (`AccountId`).
   *
   * @param {FixedBytes<32>} codeHash
   * @param {ContractTxOptions} options
   *
   * @selector 0xa9e46760
   **/
  upgradableTraitSetCode: GenericContractTxCall<
    ChainApi,
    (
      codeHash: FixedBytes<32>,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {AccountId32Like} receiver
   * @param {ContractTxOptions} options
   *
   * @selector 0xc1c21add
   **/
  artZeroMarketplaceTraitReceiveHoldAmount: GenericContractTxCall<
    ChainApi,
    (
      receiver: AccountId32Like,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {AccountId32Like} stakingContractAddress
   * @param {ContractTxOptions} options
   *
   * @selector 0x22eea22c
   **/
  artZeroMarketplaceTraitSetStakingContractAddress: GenericContractTxCall<
    ChainApi,
    (
      stakingContractAddress: AccountId32Like,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   * Withdraw Profit - only Contract Owner.
   *
   * @param {bigint} value
   * @param {AccountId32Like} reciever
   * @param {ContractTxOptions} options
   *
   * @selector 0xf232bfe4
   **/
  artZeroMarketplaceTraitWithdrawProfit: GenericContractTxCall<
    ChainApi,
    (
      value: bigint,
      reciever: AccountId32Like,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {AccountId32Like} collectionContractAddress
   * @param {ContractTxOptions} options
   *
   * @selector 0x6c657127
   **/
  artZeroMarketplaceTraitSetCollectionContractAddress: GenericContractTxCall<
    ChainApi,
    (
      collectionContractAddress: AccountId32Like,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {number} platformFee
   * @param {ContractTxOptions} options
   *
   * @selector 0x8be523fb
   **/
  artZeroMarketplaceTraitSetPlatformFee: GenericContractTxCall<
    ChainApi,
    (
      platformFee: number,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {BytesLike} criteria
   * @param {Array<number>} rates
   * @param {ContractTxOptions} options
   *
   * @selector 0x020c0a97
   **/
  artZeroMarketplaceTraitSetDiscount: GenericContractTxCall<
    ChainApi,
    (
      criteria: BytesLike,
      rates: Array<number>,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;

  /**
   *
   * @param {AccountId32Like} operator
   * @param {AccountId32Like} from
   * @param {OpenbrushContractsTypesId} id
   * @param {BytesLike} data
   * @param {ContractTxOptions} options
   *
   * @selector 0xbb7df780
   **/
  psp34ReceiverBeforeReceived: GenericContractTxCall<
    ChainApi,
    (
      operator: AccountId32Like,
      from: AccountId32Like,
      id: OpenbrushContractsTypesId,
      data: BytesLike,
      options: ContractTxOptions,
    ) => ContractSubmittableExtrinsic<ChainApi>
  >;
}
