import { createClient } from 'wagmi'
import { configureChains } from '@wagmi/core'
import { publicProvider } from 'wagmi/providers/public'
import {
  arbitrum,
  arbitrumGoerli,
  avalanche,
  avalancheFuji,
  bsc,
  bscTestnet,
  fantom,
  fantomTestnet,
  foundry,
  goerli,
  mainnet,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
  sepolia
} from '@wagmi/core/chains'

const { provider, webSocketProvider } = configureChains(
  [
    arbitrum,
    arbitrumGoerli,
    avalanche,
    avalancheFuji,
    bsc,
    bscTestnet,
    fantom,
    fantomTestnet,
    foundry,
    goerli,
    mainnet,
    optimism,
    optimismGoerli,
    polygon,
    polygonMumbai,
    sepolia
  ],
  [publicProvider()]
)

export const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider
})
