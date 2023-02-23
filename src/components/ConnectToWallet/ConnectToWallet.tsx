'use client';
import { useContext } from 'react';
import { useSession } from 'next-auth/react';
import { useAccount } from 'wagmi';

import Button from '../Button/Button';
import { getEllipsisTxt } from '../../../utils/format';
import { NFTContext } from '../../../context/NFTContext';

const ConnectToWallet = () => {
  const { isConnected, address } = useAccount();
  const { data } = useSession();
  const {handleAuth, handleDisconnect} = useContext(NFTContext)

  return (
    <>
      {isConnected ? (
        <Button
          btnName={getEllipsisTxt(data?.user?.address || address)}
          classStyles='flex items-center cursor-pointer mx-2 rounded-xl'
          handleClick={handleDisconnect}
        />
      ) : (
        <Button
          btnName="Connect Wallet"
          classStyles="mx-2 rounded-xl"
          handleClick={handleAuth}
        />
      )}
    </>
  );
};

export default ConnectToWallet;