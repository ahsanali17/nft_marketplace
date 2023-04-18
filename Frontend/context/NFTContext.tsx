import { createContext, useContext } from 'react';
// import Web3Modal from 'web3modal';
// import { ethers } from 'ethers';
// import axios from 'axios';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { signIn, signOut } from 'next-auth/react';
import { useAccount, useConnect, useDisconnect, useSignMessage } from 'wagmi';
import { useAuthRequestChallengeEvm,  } from '@moralisweb3/next';

// import { MarketAddress, MarketAddressABI } from './constants';
// import { handleAuth, handleDisconnect } from '../src/app/walletConnect';
import { uploadToIPFS, UploadToIPFSProps } from '@/pages/api/ipfs/ipfs';

interface ContextObjectValue {
 nftCurrency: string;
 handleAuth:  () => Promise<void>,
 handleDisconnect:  () => Promise<void>,
 uploadToIPFS: ({ file, setFileUrl }: UploadToIPFSProps) => Promise<string | undefined>,
}

export const NFTContext = createContext<ContextObjectValue>({} as ContextObjectValue);

export const NFTProvider = ({ children }: any) => {
 const { connectAsync } = useConnect({ connector: new InjectedConnector() });
 const { disconnectAsync } = useDisconnect();
 const { isConnected } = useAccount();
 const { signMessageAsync } = useSignMessage();
 const { requestChallengeAsync } = useAuthRequestChallengeEvm();

 const nftCurrency = "ETH";
 const handleAuth = async () => {
  if (isConnected) {
    await disconnectAsync();
  }
  try {
    const { account, chain } = await connectAsync();

    const challenge = await requestChallengeAsync({ address: account, chainId: chain.id });

    if (!challenge) {
      throw new Error('No challenge received');
    }

    const signature = await signMessageAsync({ message: challenge.message });

    await signIn('moralis-auth', { message: challenge.message, signature, network: 'Evm', redirect: false });
    // window.location.reload();
  } catch (e: any) {
    console.error(`Error signing in: ${e.message}`);
  }
 };

 const handleDisconnect = async () => {
   await disconnectAsync();
   signOut({ callbackUrl: '/' });
  };

 const defaultContextObject: ContextObjectValue = {
  nftCurrency,
  handleAuth,
  handleDisconnect,
  uploadToIPFS
 }

 return (
  <NFTContext.Provider value={defaultContextObject}>
   {children}
  </NFTContext.Provider>
 )
}

export const useCalendarContext = () => useContext(NFTContext);
