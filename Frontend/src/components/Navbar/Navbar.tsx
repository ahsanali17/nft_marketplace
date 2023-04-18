import { useState, useEffect, useRef } from 'react'
import type { SetStateAction, Dispatch } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

import images from '../../assets'
import { ConnectToWallet, NetworkSwitcher } from '..'
import { useAccount } from 'wagmi'

interface menuItemsProps {
  isMobile: boolean
  active: string
  setActive: Dispatch<SetStateAction<string>>
}

const MenuItems = ({ isMobile, active, setActive }: menuItemsProps): JSX.Element => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { isConnected } = useAccount()

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const handleClickOutside = (event: MouseEvent): void => {
      if (!dropdownRef) {
        return
      }

      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  const toggleDropdown = (): void => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <ul className={`list-none flexCenter flex-row ${(isMobile ?? '') && 'flex-col h-full'}`}>
      <li className="relative">
        <div
          onClick={() => {
            setActive('Explore NFTs')
          }}
          className={`flex flex-row items-center font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3 ${active === 'Explore NFTs'
            ? 'dark:text-white text-nft-black-1'
            : 'dark:text-nft-gray-3 text-nft-gray-2'
            }`}
        >
          <Link href="/">Explore NFTs</Link>
        </div>
      </li>
      {isConnected && (
        <li onMouseEnter={() => { setDropdownOpen(true) }} className="relative" style={{ padding: '0.75rem 0.5rem' }}>
          <div
            onClick={toggleDropdown}
            className={`flex flex-row items-center font-semibold text-base dark:hover:text-nft-gray-1 hover:text-nft-black-3 mx-3 ${active === 'Profile' ? 'dark:text-white text-nft-black-3' : 'dark:text-white text-nft-black-3'
              }`}
          >
            <div className="flex items-center">
              <Link href="/profile" className="mr-1">
                Profile
              </Link>
              {dropdownOpen ? <i className="fas fa-regular fa-angle-up" /> : <i className="fas fa-regular fa-angle-down" />}
            </div>
          </div>
          {dropdownOpen && (
            <div ref={dropdownRef} className="absolute top-full left-0 mt-1 py-2 bg-white dark:bg-nft-dark rounded-md shadow-lg z-10">
              <div className="w-48 flex justify-center">
                <Link
                  href="/profile/my-nfts"
                  className="block text-center w-full py-1 text-nft-gray-2 hover:text-nft-black-1 dark:hover:text-nft-gray-1 dark:text-white"
                >
                  My NFTs
                </Link>
              </div>
              <div className="w-48 flex justify-center mt-2">
                <Link
                  href="/profile/my-transactions"
                  className="block text-center w-full py-1 text-nft-gray-2 hover:text-nft-black-1 dark:hover:text-nft-gray-1 dark:text-white"
                >
                  My Transactions
                </Link>
              </div>
              <div className="w-48 flex justify-center mt-2">
                <Link
                  href="/profile/my-tokens"
                  className="block text-center w-full py-1 text-nft-gray-2 hover:text-nft-black-1 dark:hover:text-nft-gray-1 dark:text-white"
                >
                  My Tokens
                </Link>
              </div>
              <div className="w-48 flex justify-center mt-2">
                <Link
                  href="/profile/create-nfts"
                  className="block text-center w-full py-1 text-nft-gray-2 hover:text-nft-black-1 dark:hover:text-nft-gray-1 dark:text-white"
                >
                  Create NFTs
                </Link>
              </div>
            </div>
          )}
        </li>
      )}
    </ul>
  )
}

const Navbar = (): JSX.Element => {
  const [active, setActive] = useState('Explore NFTs')
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const { isConnected } = useAccount()

  console.log({ theme })

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      <div className="flex flex-1 flex-row justify-start">
        <div className="flex items-center pr-5">
          <Link href="/">
            <div className="flexCenter md:hidden cursor-pointer" onClick={() => { console.log('clicked the logo 1') }}>
              <Image src={images.logo02} objectFit="contain" width={32} height={32} alt="logo" />
              <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1">Marketplace</p>
            </div>
          </Link>
          <Link href="/">
            <div className="hidden md:flex" onClick={() => { console.log('clicked the logo 1') }}>
              <Image src={images.logo02} objectFit="contain" width={32} height={32} alt="logo" />
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => { setTheme(theme === 'light' ? 'dark' : 'light') }}
          />
          <label htmlFor="checkbox" className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label">
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div>
      </div>
      <div className="flex flex-initial flex-row justify-end">
        <div className="md:hidden flex">
          <MenuItems active={active} setActive={setActive} isMobile={false} />
          <div className="ml-4">
            <ConnectToWallet />
          </div>
          {isConnected && <NetworkSwitcher />}
        </div>
      </div>

      <div className="hidden md:flex ml-2">
        {isOpen
          ? (
            <Image
              src={images.cross}
              alt="close mobile menu icon"
              objectFit="contain"
              width={20}
              height={20}
              onClick={() => { setIsOpen(false) }}
              className={theme === 'light' ? 'filter invert' : undefined}
            />
          ) : (
            <Image
              src={images.menu}
              alt="open mobile menu icon"
              objectFit="contain"
              width={25}
              height={25}
              onClick={() => { setIsOpen(!isOpen) }}
              className={theme === 'light' ? 'filter invert' : undefined}
            />
          )}

        {isOpen && (
          <div className="fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h flex justify-between flex-col">
            <div className="flex-1 p-4">
              <MenuItems active={active} setActive={setActive} isMobile />
            </div>
            <div className="p-4 border-t dark:border-nft-black-1 border-nft-gray-1">
              <ConnectToWallet />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
