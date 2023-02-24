'use client';
import { Fragment, useEffect } from 'react';
import { useEvmWalletTransactions } from '@moralisweb3/next';
import { useSession } from 'next-auth/react';
import { getEllipsisTxt } from 'utils/format';
import { useAccount, useNetwork } from 'wagmi';

import { TransactionCard } from '@/components';

const MyTransactions = () => {
  const hoverTrColor = "hover:bg-gray-100";
  const { data } = useSession();
  const { isConnected, address } = useAccount();

  const { chain } = useNetwork();
  const { data: transactions } = useEvmWalletTransactions({
    address: address,
    chain: chain?.id,
  });

  useEffect(() => console.log('transactions: ', transactions), [transactions]);

  return (
  <div className="flex justify-center sm:px-4 p-12" style={{ padding: '6rem 2rem'}}>
   <div className="w-full minmd:w-4/5">
    <h1 className="flex-1 before:first:font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold sm:mb-4" style={{fontWeight: 'bold', paddingTop: '1rem', paddingLeft: '2rem', paddingBottom: '1rem', fontSize: '1.8rem'}}>
     Transactions
    </h1>
    {transactions?.length ? (
     <div
     className='w-full flex flex-wrap justify-start md:justify-center'
     >
       {transactions.map((tx, i) => (
         <Fragment key={i}>
          <TransactionCard transaction={tx} />
         </Fragment>
       ))}

     </div>
    ) : (
      <div>Looks Like you do not have any transactions</div>
    )}
   </div>
  </div>
  );
};

export default MyTransactions;