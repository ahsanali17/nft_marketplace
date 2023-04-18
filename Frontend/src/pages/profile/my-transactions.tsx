import { Fragment } from 'react'
import { useEvmNativeBalance, useEvmWalletTransactions } from '@moralisweb3/next'
import { useAccount, useNetwork } from 'wagmi'

import { TransactionCard } from '@/components'

const MyTransactions = (): JSX.Element => {
  const { address } = useAccount()
  const { chain } = useNetwork()

  const { data: transactions } = useEvmWalletTransactions({
    address: address ?? '',
    chain: chain?.id
  })

  const { data: nativeBalance } = useEvmNativeBalance({
    address: address ?? '',
    chain: chain?.id
  })

  return (
    <div className="flex justify-center sm:px-4 p-12" style={{ padding: '6rem 2rem' }}>
      <div className="w-full minmd:w-4/5">
        <div className="flex flex-1 flex-row">
          <h1
            className="flex-1 before:first:font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold sm:mb-4"
            style={{
              fontWeight: 'bold',
              paddingTop: '1rem',
              paddingLeft: '2rem',
              paddingBottom: '1rem',
              fontSize: '1.8rem'
            }}
          >
            Transactions
          </h1>
          <h1
            className="flex-1 before:first:font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold sm:mb-4"
            style={{
              fontWeight: 'bold',
              paddingTop: '1rem',
              paddingLeft: '2rem',
              paddingBottom: '1rem',
              fontSize: '1.3rem'
            }}
          >
            Wallet Balance: {nativeBalance?.balance?.ether ?? 0}/ether
          </h1>
        </div>
        {transactions?.length
          ? (
            <div className="w-full flex flex-wrap justify-start md:justify-center">
              {transactions.map((tx: any, i: number) => (
                <Fragment key={i}>
                  <TransactionCard transaction={tx} />
                </Fragment>
              ))}
            </div>
          )
          : (
            <div>Looks Like you do not have any transactions</div>
          )}
      </div>
    </div>
  )
}

export default MyTransactions
