import { useContext } from 'react'
import { useAccount } from 'wagmi'

import Button from '../Button/Button'
import { getEllipsisTxt } from '../../../utils/format'
import { NFTContext } from '../../../context/NFTContext'

const ConnectToWallet = (): JSX.Element => {
  const { isConnected, address } = useAccount()
  const { handleAuth, handleDisconnect } = useContext(NFTContext)

  const handleConnection = async (): Promise<void> => {
    if (isConnected) {
      await handleDisconnect()
    } else {
      await handleAuth()
    }
  }

  const handleClick = async (): Promise<void> => {
    await handleConnection()
  }

  return (
    <div className="relative">
      <Button
        btnName={isConnected ? getEllipsisTxt(address) : 'Connect Wallet'}
        classStyles="flex items-center cursor-pointer mx-2 rounded-xl"
        handleClick={handleClick}
      />
    </div>
  )
}

export default ConnectToWallet
