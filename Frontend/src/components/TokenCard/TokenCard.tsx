import type { EvmAddress, EvmChain } from '@moralisweb3/common-evm-utils'

import { getEllipsisTxt } from 'utils/format'

interface TokenCardProps {
  value: string
  decimals: number | undefined
  name: string | undefined
  symbol: string | undefined
  contractAddress: EvmAddress | string | undefined
  chain: EvmChain | string | undefined
}

const TokenCard = ({ value, decimals, name, symbol, contractAddress, chain }: TokenCardProps): JSX.Element => {
  return (
    <div className="flex-1 min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256 minlg:min-w-327 dark:bg-white bg-white rounded-2xl p-4 m-4 minlg:m-8 sm:my-2 sm:mx-2 cursor-pointer shadow-md">
      <div className="mt-3 flex flex-col">
        <div className="flex items-center justify-between">
          <p className="text-nft-black-3 font-semibold text-sm">
            Chain:
          </p>
          <p className="text-nft-black-1 font-semibold text-sm">
            {chain?.toString()}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-nft-black-3 font-semibold text-sm">
            Contract Address:
          </p>
          <p className="text-nft-black-1 font-semibold text-sm">
            {getEllipsisTxt(contractAddress?.toString())}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-nft-black-3 font-semibold text-sm">
            Decimals:
          </p>
          <p className="text-nft-black-1 font-semibold text-sm">
            {decimals?.toString()}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-nft-black-3 font-semibold text-sm">
            Name:
          </p>
          <p className="text-nft-black-1 font-semibold text-sm">
            {name?.toString()}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-nft-black-3 font-semibold text-sm">
            Symbol:
          </p>
          <p className="text-nft-black-1 font-semibold text-sm">
            {symbol?.toString()}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-nft-black-3 font-semibold text-sm">
            Value:
          </p>
          <p className="text-nft-black-1 font-semibold text-sm">
            {value?.toString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TokenCard
