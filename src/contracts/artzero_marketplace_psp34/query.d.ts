// Generated by dedot cli

import type { GenericSubstrateApi } from "dedot/types";
import type {
  AccountId32Like,
  Result,
  BytesLike,
  AccountId32,
  FixedBytes,
  Bytes,
} from "dedot/codecs";
import type {
  GenericContractQuery,
  GenericContractQueryCall,
  ContractCallOptions,
  GenericContractCallResult,
  ContractCallResult,
} from "dedot/contracts";
import type {
  ArtzeroProjectError,
  InkPrimitivesLangError,
  OpenbrushContractsTypesId,
  OpenbrushContractsErrorsOwnableOwnableError,
  ArtzeroProjectImplsMarketplaceDataBidInformation,
  ArtzeroProjectImplsMarketplaceDataForSaleItem,
  OpenbrushContractsErrorsPsp34Psp34ReceiverError,
} from "./types";

export interface ContractQuery<ChainApi extends GenericSubstrateApi>
  extends GenericContractQuery<ChainApi> {
  /**
   *
   * @param {AccountId32Like} collectionContractAddress
   * @param {AccountId32Like} stakingContractAddress
   * @param {number} platformFee
   * @param {ContractCallOptions} options
   *
   * @selector 0xf2f6dba3
   **/
  initialize: GenericContractQueryCall<
    ChainApi,
    (
      collectionContractAddress: AccountId32Like,
      stakingContractAddress: AccountId32Like,
      platformFee: number,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<Result<[], ArtzeroProjectError>, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * List the NFT onto the marketplace - FREE of charge
   *
   * @param {AccountId32Like} nftContractAddress
   * @param {OpenbrushContractsTypesId} tokenId
   * @param {bigint} price
   * @param {BytesLike} data
   * @param {ContractCallOptions} options
   *
   * @selector 0x832a283f
   **/
  list: GenericContractQueryCall<
    ChainApi,
    (
      nftContractAddress: AccountId32Like,
      tokenId: OpenbrushContractsTypesId,
      price: bigint,
      data: BytesLike,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<Result<[], ArtzeroProjectError>, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Unlist the NFT from the marketplace - FREE of charge
   *
   * @param {AccountId32Like} nftContractAddress
   * @param {OpenbrushContractsTypesId} tokenId
   * @param {ContractCallOptions} options
   *
   * @selector 0x5aeeb315
   **/
  unlist: GenericContractQueryCall<
    ChainApi,
    (
      nftContractAddress: AccountId32Like,
      tokenId: OpenbrushContractsTypesId,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<Result<[], ArtzeroProjectError>, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Buy Token at listed price
   *
   * @param {AccountId32Like} nftContractAddress
   * @param {OpenbrushContractsTypesId} tokenId
   * @param {ContractCallOptions} options
   *
   * @selector 0x15d62801
   **/
  buy: GenericContractQueryCall<
    ChainApi,
    (
      nftContractAddress: AccountId32Like,
      tokenId: OpenbrushContractsTypesId,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<Result<[], ArtzeroProjectError>, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Bid Token for sale, transferred_value() is the bidding price
   *
   * @param {AccountId32Like} nftContractAddress
   * @param {OpenbrushContractsTypesId} tokenId
   * @param {ContractCallOptions} options
   *
   * @selector 0x668d28a7
   **/
  bid: GenericContractQueryCall<
    ChainApi,
    (
      nftContractAddress: AccountId32Like,
      tokenId: OpenbrushContractsTypesId,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<Result<[], ArtzeroProjectError>, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Remove Bid From Active Sale
   *
   * @param {AccountId32Like} nftContractAddress
   * @param {OpenbrushContractsTypesId} tokenId
   * @param {ContractCallOptions} options
   *
   * @selector 0x412b6e0f
   **/
  removeBid: GenericContractQueryCall<
    ChainApi,
    (
      nftContractAddress: AccountId32Like,
      tokenId: OpenbrushContractsTypesId,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<Result<[], ArtzeroProjectError>, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Accept Bid
   *
   * @param {AccountId32Like} nftContractAddress
   * @param {OpenbrushContractsTypesId} tokenId
   * @param {number} bidIndex
   * @param {ContractCallOptions} options
   *
   * @selector 0x1856538b
   **/
  acceptBid: GenericContractQueryCall<
    ChainApi,
    (
      nftContractAddress: AccountId32Like,
      tokenId: OpenbrushContractsTypesId,
      bidIndex: number,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<Result<[], ArtzeroProjectError>, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
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
   * @param {ContractCallOptions} options
   *
   * @selector 0x11f43efd
   **/
  ownableTransferOwnership: GenericContractQueryCall<
    ChainApi,
    (
      newOwner: AccountId32Like,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<
          Result<[], OpenbrushContractsErrorsOwnableOwnableError>,
          InkPrimitivesLangError
        >,
        ContractCallResult<ChainApi>
      >
    >
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
   * @param {ContractCallOptions} options
   *
   * @selector 0x5e228753
   **/
  ownableRenounceOwnership: GenericContractQueryCall<
    ChainApi,
    (
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<
          Result<[], OpenbrushContractsErrorsOwnableOwnableError>,
          InkPrimitivesLangError
        >,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Returns the address of the current owner.
   *
   * @param {ContractCallOptions} options
   *
   * @selector 0x4fa43c8c
   **/
  ownableOwner: GenericContractQueryCall<
    ChainApi,
    (
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<AccountId32, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * This function allow contract owner withdraw NFT to an account in case there is any NFT sent to contract by mistake
   *
   * @param {AccountId32Like} nftContractAddress
   * @param {OpenbrushContractsTypesId} tokenId
   * @param {AccountId32Like} receiver
   * @param {ContractCallOptions} options
   *
   * @selector 0xed1e1dfa
   **/
  adminTraitTranferNft: GenericContractQueryCall<
    ChainApi,
    (
      nftContractAddress: AccountId32Like,
      tokenId: OpenbrushContractsTypesId,
      receiver: AccountId32Like,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<Result<[], ArtzeroProjectError>, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * This function allows contract owner to withdraw contract balance to his account.
   *
   * @param {bigint} value
   * @param {AccountId32Like} receiver
   * @param {ContractCallOptions} options
   *
   * @selector 0x07573e99
   **/
  adminTraitWithdrawFee: GenericContractQueryCall<
    ChainApi,
    (
      value: bigint,
      receiver: AccountId32Like,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<Result<[], ArtzeroProjectError>, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * This function allow contract owner withdraw PSP22 to an account in case there is any token sent to contract by mistake
   *
   * @param {AccountId32Like} psp22ContractAddress
   * @param {bigint} amount
   * @param {AccountId32Like} receiver
   * @param {ContractCallOptions} options
   *
   * @selector 0xd9aad284
   **/
  adminTraitTranferPsp22: GenericContractQueryCall<
    ChainApi,
    (
      psp22ContractAddress: AccountId32Like,
      amount: bigint,
      receiver: AccountId32Like,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<Result<[], ArtzeroProjectError>, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * This function allow contract owner modifies the code which is used to execute calls to this contract address (`AccountId`).
   *
   * @param {FixedBytes<32>} codeHash
   * @param {ContractCallOptions} options
   *
   * @selector 0xa9e46760
   **/
  upgradableTraitSetCode: GenericContractQueryCall<
    ChainApi,
    (
      codeHash: FixedBytes<32>,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<Result<[], ArtzeroProjectError>, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Get Staking Discount Rates
   *
   * @param {ContractCallOptions} options
   *
   * @selector 0x5db8b1aa
   **/
  artZeroMarketplaceTraitGetStakingDiscountRate: GenericContractQueryCall<
    ChainApi,
    (
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<Array<number>, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Get Staking Discount Criteria
   *
   * @param {ContractCallOptions} options
   *
   * @selector 0x983d74fd
   **/
  artZeroMarketplaceTraitGetStakingDiscountCriteria: GenericContractQueryCall<
    ChainApi,
    (
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<Bytes, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Get collection contract address
   *
   * @param {ContractCallOptions} options
   *
   * @selector 0x93955560
   **/
  artZeroMarketplaceTraitGetCollectionContractAddress: GenericContractQueryCall<
    ChainApi,
    (
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<AccountId32, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   *
   * @param {AccountId32Like} receiver
   * @param {ContractCallOptions} options
   *
   * @selector 0xc1c21add
   **/
  artZeroMarketplaceTraitReceiveHoldAmount: GenericContractQueryCall<
    ChainApi,
    (
      receiver: AccountId32Like,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<Result<[], ArtzeroProjectError>, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   *
   * @param {AccountId32Like} stakingContractAddress
   * @param {ContractCallOptions} options
   *
   * @selector 0x22eea22c
   **/
  artZeroMarketplaceTraitSetStakingContractAddress: GenericContractQueryCall<
    ChainApi,
    (
      stakingContractAddress: AccountId32Like,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<Result<[], ArtzeroProjectError>, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Get get total sale token ids of user account in a contract
   *
   * @param {AccountId32Like} nftContractAddress
   * @param {AccountId32Like} userAccount
   * @param {ContractCallOptions} options
   *
   * @selector 0x91440fa8
   **/
  artZeroMarketplaceTraitGetSaleTokensIdsCount: GenericContractQueryCall<
    ChainApi,
    (
      nftContractAddress: AccountId32Like,
      userAccount: AccountId32Like,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<bigint, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Withdraw Profit - only Contract Owner.
   *
   * @param {bigint} value
   * @param {AccountId32Like} reciever
   * @param {ContractCallOptions} options
   *
   * @selector 0xf232bfe4
   **/
  artZeroMarketplaceTraitWithdrawProfit: GenericContractQueryCall<
    ChainApi,
    (
      value: bigint,
      reciever: AccountId32Like,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<Result<[], ArtzeroProjectError>, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   *
   * @param {AccountId32Like} collectionContractAddress
   * @param {ContractCallOptions} options
   *
   * @selector 0x6c657127
   **/
  artZeroMarketplaceTraitSetCollectionContractAddress: GenericContractQueryCall<
    ChainApi,
    (
      collectionContractAddress: AccountId32Like,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<Result<[], ArtzeroProjectError>, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Get total Collection volume
   *
   * @param {AccountId32Like} collectionContractAddress
   * @param {ContractCallOptions} options
   *
   * @selector 0xe15e7a95
   **/
  artZeroMarketplaceTraitGetVolumeByCollection: GenericContractQueryCall<
    ChainApi,
    (
      collectionContractAddress: AccountId32Like,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<bigint, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Get listed token count by collection address
   *
   * @param {AccountId32Like} collectionContractAddress
   * @param {ContractCallOptions} options
   *
   * @selector 0xb5b56273
   **/
  artZeroMarketplaceTraitGetListedTokenCountByCollectionAddress: GenericContractQueryCall<
    ChainApi,
    (
      collectionContractAddress: AccountId32Like,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<bigint, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Get platform total Profit
   *
   * @param {ContractCallOptions} options
   *
   * @selector 0x026733c6
   **/
  artZeroMarketplaceTraitGetTotalProfit: GenericContractQueryCall<
    ChainApi,
    (
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<bigint, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Get all bids from (NFT Contract Address, User Address, token ID)
   *
   * @param {AccountId32Like} nftContractAddress
   * @param {AccountId32Like} userAccount
   * @param {OpenbrushContractsTypesId} tokenId
   * @param {ContractCallOptions} options
   *
   * @selector 0xd6bc3156
   **/
  artZeroMarketplaceTraitGetAllBids: GenericContractQueryCall<
    ChainApi,
    (
      nftContractAddress: AccountId32Like,
      userAccount: AccountId32Like,
      tokenId: OpenbrushContractsTypesId,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<
          Array<ArtzeroProjectImplsMarketplaceDataBidInformation> | undefined,
          InkPrimitivesLangError
        >,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Get hold amount of bidder
   *
   * @param {AccountId32Like} bidder
   * @param {ContractCallOptions} options
   *
   * @selector 0x3122a567
   **/
  artZeroMarketplaceTraitGetHoldAmountOfBidder: GenericContractQueryCall<
    ChainApi,
    (
      bidder: AccountId32Like,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<bigint | undefined, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Get Hold Bidder Count
   *
   * @param {ContractCallOptions} options
   *
   * @selector 0xe54b6b05
   **/
  artZeroMarketplaceTraitGetHoldBidderCount: GenericContractQueryCall<
    ChainApi,
    (
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<bigint, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Get all token ids currently for sale by a collection (nft_contract_address,user_account)
   *
   * @param {AccountId32Like} nftContractAddress
   * @param {AccountId32Like} userAccount
   * @param {ContractCallOptions} options
   *
   * @selector 0xf686aa21
   **/
  artZeroMarketplaceTraitTotalTokensForSale: GenericContractQueryCall<
    ChainApi,
    (
      nftContractAddress: AccountId32Like,
      userAccount: AccountId32Like,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<bigint, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Get platform current available profit
   *
   * @param {ContractCallOptions} options
   *
   * @selector 0x50427ba8
   **/
  artZeroMarketplaceTraitGetCurrentProfit: GenericContractQueryCall<
    ChainApi,
    (
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<bigint, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Get platform fee
   *
   * @param {ContractCallOptions} options
   *
   * @selector 0x51c22618
   **/
  artZeroMarketplaceTraitGetPlatformFee: GenericContractQueryCall<
    ChainApi,
    (
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<number, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Get market list information using NFT Collection and token ID
   *
   * @param {AccountId32Like} nftContractAddress
   * @param {OpenbrushContractsTypesId} tokenId
   * @param {ContractCallOptions} options
   *
   * @selector 0x8de4d038
   **/
  artZeroMarketplaceTraitGetNftSaleInfo: GenericContractQueryCall<
    ChainApi,
    (
      nftContractAddress: AccountId32Like,
      tokenId: OpenbrushContractsTypesId,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<
          ArtzeroProjectImplsMarketplaceDataForSaleItem | undefined,
          InkPrimitivesLangError
        >,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Get all token ids currently for sale for a collection (nft_contract_address,user_account)
   *
   * @param {AccountId32Like} nftContractAddress
   * @param {AccountId32Like} userAccount
   * @param {bigint} index
   * @param {ContractCallOptions} options
   *
   * @selector 0xa725c933
   **/
  artZeroMarketplaceTraitGetForSaleTokenId: GenericContractQueryCall<
    ChainApi,
    (
      nftContractAddress: AccountId32Like,
      userAccount: AccountId32Like,
      index: bigint,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<OpenbrushContractsTypesId | undefined, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Get Hold Bidders by Index
   *
   * @param {bigint} index
   * @param {ContractCallOptions} options
   *
   * @selector 0xdf67943a
   **/
  artZeroMarketplaceTraitGetHoldBiddersByIndex: GenericContractQueryCall<
    ChainApi,
    (
      index: bigint,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<AccountId32 | undefined, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   *
   * @param {number} platformFee
   * @param {ContractCallOptions} options
   *
   * @selector 0x8be523fb
   **/
  artZeroMarketplaceTraitSetPlatformFee: GenericContractQueryCall<
    ChainApi,
    (
      platformFee: number,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<Result<[], ArtzeroProjectError>, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   *
   * @param {BytesLike} criteria
   * @param {Array<number>} rates
   * @param {ContractCallOptions} options
   *
   * @selector 0x020c0a97
   **/
  artZeroMarketplaceTraitSetDiscount: GenericContractQueryCall<
    ChainApi,
    (
      criteria: BytesLike,
      rates: Array<number>,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<Result<[], ArtzeroProjectError>, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Get total platform volume
   *
   * @param {ContractCallOptions} options
   *
   * @selector 0xc15d33d5
   **/
  artZeroMarketplaceTraitGetTotalVolume: GenericContractQueryCall<
    ChainApi,
    (
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<bigint, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   * Get staking contract address
   *
   * @param {ContractCallOptions} options
   *
   * @selector 0x460816fa
   **/
  artZeroMarketplaceTraitGetStakingContractAddress: GenericContractQueryCall<
    ChainApi,
    (
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<AccountId32, InkPrimitivesLangError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   *
   * @param {AccountId32Like} operator
   * @param {AccountId32Like} from
   * @param {OpenbrushContractsTypesId} id
   * @param {BytesLike} data
   * @param {ContractCallOptions} options
   *
   * @selector 0xbb7df780
   **/
  psp34ReceiverBeforeReceived: GenericContractQueryCall<
    ChainApi,
    (
      operator: AccountId32Like,
      from: AccountId32Like,
      id: OpenbrushContractsTypesId,
      data: BytesLike,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<
          Result<[], OpenbrushContractsErrorsPsp34Psp34ReceiverError>,
          InkPrimitivesLangError
        >,
        ContractCallResult<ChainApi>
      >
    >
  >;
}