import { Fragment } from 'react'
import { useEvmWalletNFTs } from '@moralisweb3/next'
import { useAccount, useNetwork } from 'wagmi'

import MyNFTCard from '../../components/MyNFTCard/MyNFTCard'

const MyNFTs = (): JSX.Element => {
  const { address } = useAccount();
  const { chain } = useNetwork();

  const { data: nftWalletNFT } = useEvmWalletNFTs({
    address: address ?? '',
    chain: chain?.id,
    format: 'decimal'
  });

  const sortedCollections = nftWalletNFT?.sort((a, b) =>
    (a?.name ?? '').localeCompare(b?.name ?? '')
  );

  console.log(sortedCollections, 'sorted');

  return (
    <div
      className="flex justify-center sm:px-4 p-12"
      style={{ padding: '6rem 2rem' }}
    >
      <div className="w-full minmd:w-4/5">
        <div className="flex flex-1 flex-row">
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
            Collection:
          </h1>
        </div>
        {nftWalletNFT?.length ? (
          <div className="w-full flex flex-wrap justify-start md:justify-center">
            {sortedCollections?.map((nft, i) => (
              <Fragment key={i}>
                <MyNFTCard nft={nft} />
              </Fragment>
            ))}
          </div>
        ) : (
          <div>Looks Like you do not have any transactions</div>
        )}
      </div>
    </div>
  )
}

export default MyNFTs
