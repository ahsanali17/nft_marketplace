import React from 'react'
import Image from 'next/image'
// import { EvmAddress, EvmNft } from '@moralisweb3/common-evm-utils'

import images from '../../assets'

// interface nftCardProps {
//   nft: {
//     contractType: string,
//     tokenAddress: {
//       config: {
//         items: Record<string, unknown>
//       },
//       _value: string,
//     },
//     tokenId: string,
//     tokenUri: string,
//     metadata: {
//       name: string,
//       description: string,
//       image: string,
//       animation_url: string,
//       attributes: Record<string, unknown>[],
//     },
//     name: string,
//     symbol: string,
//     amount: number,
//     blockNumberMinted: string,
//     blockNumber: string,
//     ownerOf: {
//       config: {
//         items: Record<string, unknown>
//       },
//       _value: string,
//     },
//     tokenHash: string,
//   }
//   chain: string | undefined
//   address: EvmAddress | string
// }

// Keeping it any for now since the type object is too large.
const MyNFTCard = ({ nft }: any): JSX.Element => {
  const { name, symbol, tokenId } = nft

  // const { data: nftMetadata } = useEvmContractNFTs({
  //    address: tokenAddress,
  //    chain: chain?.id,
  //    normalizeMetadata: true,
  //    limit: 10
  //  })
  // const { data: nftData } = useEvmNFTMetadata({
  //    address: address,
  //    chain: chain?.id,
  //  })

  return (
    <div className="flex-1 min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256 minlg:min-w-327 dark:bg-nft-black-3 bg-white rounded-2xl p-4 m-4 minlg:m-8 sm:my-2 sm:mx-2 cursor-pointer shadow-md">
      <div className="relative w-full h-52 sm:h-36 xs:h-56 mind:h-60 minlg:h-300 rounded-2xl overflow-hidden">
        <Image alt="nft-placeholder" layout="fill" objectFit="cover" src={images.twitter} />
      </div>

      <div className="mt-3 flex flex-col">
        <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-xl">{name}</p>
        <div className="flexBetween mt-1 minlg:mt-3 flex-row xs:flex-col xs:items-start xs:mt-3">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-lg">
            {symbol}
          </p>
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-lg">#{tokenId}</p>
        </div>
      </div>
    </div>
  )
}

export default MyNFTCard
