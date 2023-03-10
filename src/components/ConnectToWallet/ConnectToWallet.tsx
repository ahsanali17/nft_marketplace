'use client';
import { useContext } from 'react';
import { useAccount } from 'wagmi';

import Button from '../Button/Button';
import { getEllipsisTxt } from '../../../utils/format';
import { NFTContext } from '../../../context/NFTContext';

const ConnectToWallet = () => {
  const { isConnected, address } = useAccount();
  const { handleAuth, handleDisconnect } = useContext(NFTContext);

  return (
    <div className="relative">
      <Button
        btnName={isConnected ? getEllipsisTxt(address) : 'Connect Wallet'}
        classStyles="flex items-center cursor-pointer mx-2 rounded-xl"
        handleClick={isConnected ? handleDisconnect : handleAuth}
      />
    </div>
  );
};

export default ConnectToWallet;
