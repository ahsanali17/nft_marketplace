import { Fragment } from 'react'
import { useEvmNativeBalance, useEvmWalletTokenBalances } from '@moralisweb3/next'
import { useAccount, useNetwork } from 'wagmi'

import { TokenCard } from '@/components'

const MyTokens = (): JSX.Element => {
  const { address } = useAccount()
  const { chain } = useNetwork()

  const { data: tokens } = useEvmWalletTokenBalances({
    address: address ?? '',
    chain: chain?.id,
  })

  const { data: nativeBalance } = useEvmNativeBalance({
    address: address ?? '',
    chain: chain?.id,
  })

  console.log(nativeBalance, 'llllllllllllll')

  console.log(tokens, 'tokens****')
  return (
    <div className="flex justify-center sm:px-4 p-12" style={{ padding: '6rem 2rem'}}>
      <div className="w-full minmd:w-4/5">
        <div className='flex flex-1 flex-row'>
          <h1 className="flex-1 before:first:font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold sm:mb-4" style={{fontWeight: 'bold', paddingTop: '1rem', paddingLeft: '2rem', paddingBottom: '1rem', fontSize: '1.8rem'}}>
            Tokens
          </h1>
          <h1 className="flex-1 before:first:font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold sm:mb-4" style={{fontWeight: 'bold', paddingTop: '1rem', paddingLeft: '2rem', paddingBottom: '1rem', fontSize: '1.3rem'}}>
            Wallet Balance: {nativeBalance?.balance.ether}/ether
          </h1>
        </div>
        {tokens?.length ? (
          <div className='w-full flex flex-wrap justify-start md:justify-center'>
            {tokens.map((token, i) => (
              <Fragment key={i}>
                <TokenCard
                  value={token.value}
                  decimals={token.token?.decimals}
                  name={token.token?.name}
                  symbol={token.token?.symbol}
                  contractAddress={token.token?.contractAddress.lowercase}
                  chain={token.token?.chain.name}
                />
              </Fragment>
            ))}
          </div>
        ) : (
          <div>Looks like you do not have any tokens</div>
        )}
      </div>
    </div>
  )
}

export default MyTokens
