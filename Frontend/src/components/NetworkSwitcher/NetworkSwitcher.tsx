import React from 'react'
import { useNetwork, useSwitchNetwork } from 'wagmi'

const NetworkSwitcher = (): JSX.Element => {
  const { chain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()

  const isMainnet = chain?.id === 1

  const handleToggle = (event: any): void => {
    const chainId = isMainnet ? 5 : 1
    if (switchNetwork && typeof switchNetwork === 'function') {
      switchNetwork(chainId)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <input
        type="checkbox"
        id="network-toggle"
        className="hidden"
        checked={isMainnet}
        onChange={handleToggle}
      />
      <label
        htmlFor="network-toggle"
        className="flex items-center w-10 h-8 bg-gray-300 rounded-lg justify-center"
      >
        {isMainnet
        ? (
          <span className="text-lg font-bold text-gray-800">
            M
          </span>
        ) : (
          <span className="text-lg font-bold text-gray-800">
            G
          </span>
        )}
      </label>
      <div style={{ fontSize: '0.69rem' }} className="text-gray-400">
        {isMainnet ? 'Mainnet' : 'Testnet'}
      </div>
    </div>
  )
}

export default NetworkSwitcher
