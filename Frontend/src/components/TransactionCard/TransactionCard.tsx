import { getEllipsisTxt } from '../../../utils/format'
import Button from '../Button/Button'

interface TransactionData {
  from: {
    config: {
      items: unknown
    }
    _value: string
  }
  to: {
    config: {
      items: unknown
    }
    _value: string
  }
  nonce: string
  data: string
  value: {
    rawValue: string
  }
  hash: string
  chain: {
    config: {
      items: unknown
    }
    _value: string
    _chainlistData: {
      name: string
      chain: string
      icon: string
      rpc: string[]
      faucets: unknown[]
      nativeCurrency: {
        name: string
        symbol: string
        decimals: number
      }
      infoURL: string
      shortName: string
      chainId: number
      networkId: number
      slip44: number
      ens: {
        registry: string
      }
      explorers: Array<{
        name: string
        url: string
        standard: string
      }>
    }
  }
  gas: string
  gasPrice: string
  index: number
  blockNumber: string
  blockHash: string
  blockTimestamp: string
  cumulativeGasUsed: string
  gasUsed: string
  receiptStatus: number
  logs: unknown[]
}

const TransactionCard = ({ transaction }: any): JSX.Element => {
  const txArray: Array<[string, unknown]> = Object.entries(transaction)
  const [txData] = txArray

  const [
    _data,
    {
      from: { _value: fromValue },
      to: { _value: toValue },
      nonce,
      data,
      value: { rawValue: valueRawValue },
      hash,
      chain: {
        _value: chainValue,
        _chainlistData: {
          name: chainName,
          chain: chainId,
          icon: chainIcon,
          rpc: chainRpc,
          nativeCurrency: { name: currencyName, symbol: currencySymbol },
          infoURL: chainInfoUrl,
          shortName: chainShortName,
          explorers: [{ url: explorerUrl }]
        }
      },
      gas,
      gasPrice,
      index,
      blockNumber,
      blockHash,
      blockTimestamp,
      cumulativeGasUsed,
      gasUsed,
      receiptStatus,
      logs
    }
  ] = txData as [string, TransactionData]

  const handleExplorerLink = (): void => {
    window.open(`${explorerUrl}/tx/${hash}`, '_blank')
  }

  return (
    <div className="flex-1 min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256 minlg:min-w-327 dark:bg-white bg-white rounded-2xl p-4 m-4 minlg:m-8 sm:my-2 sm:mx-2 cursor-pointer shadow-md">
      <div className="mt-3 flex flex-col">
        <div className="flex items-center justify-between">
          <p className="text-nft-black-1 font-semibold text-md">{getEllipsisTxt(hash)}</p>
          <p className={`text-nft-black-1 font-semibold text-md ${receiptStatus === 0 ? 'text-red-500' : 'text-green-500'}`}>
            {receiptStatus === 0 ? 'Failed' : 'Success'}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-nft-black-3 font-semibold text-sm">From:</p>
          <p className="text-nft-black-1 font-semibold text-sm">{getEllipsisTxt(fromValue)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-nft-black-3 font-semibold text-sm">To:</p>
          <p className="text-nft-black-1 font-semibold text-sm">{getEllipsisTxt(toValue)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-nft-black-3 font-semibold text-sm">Gas used:</p>
          <p className="text-nft-black-1 font-semibold text-sm">{gasUsed?.toString()}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-nft-black-3 font-semibold text-sm">Date:</p>
          <p className="text-nft-black-1 font-semibold text-sm">{new Date(blockTimestamp).toLocaleDateString()}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-nft-black-3 font-semibold text-sm">Value:</p>
          <p className="text-nft-black-1 font-semibold text-sm">{valueRawValue?.toString()}</p>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-4 p-1">
        <div>
          <Button btnName="Link" classStyles="rounded-2xl" handleClick={handleExplorerLink} />
        </div>
      </div>
    </div>
  )
}

export default TransactionCard
