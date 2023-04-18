import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import { Banner, CreatorCard, NFTCard } from '../components'
import images from '../assets'
import { makeId } from '../../utils/makeId'

const Home = (): JSX.Element => {
  const [hideButtons, setHideButtons] = useState(false)
  const { theme, setTheme } = useTheme()
  const parentRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: string): void => {
    const { current } = scrollRef

    const scrollAmount = window.innerWidth > 1800 ? 270 : 210

    if (current && (current ?? '')) {
      if (direction === 'left') {
        current.scrollLeft -= scrollAmount
      }

      if (direction === 'right') {
        current.scrollLeft += scrollAmount
      }
    }
  }

  const isScrollable = (): void => {
    const { current } = scrollRef
    const { current: parent } = parentRef

    if (current && parent && current.scrollWidth >= parent.offsetWidth && (current ?? '') && (parent ?? '')) {
      setHideButtons(false)
    } else {
      setHideButtons(true)
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    isScrollable()

    window.addEventListener('resize', isScrollable)

    return () => {
      window.removeEventListener('resize', isScrollable)
    }
  }, [])

  return (
    <div className="flex justify-center sm:px-4 p-12" style={{ padding: '6rem 2rem'}}>
      <div className="w-full minmd:w-4/5">
        <Banner
          bannerText='Discover, collect and sell extraordinary NFTs'
          parentStyles='mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl'
          childStyles='md:text-4xl sm:text-2xl xs:text-xl text-center'
        />

        <div className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
          <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0" style={{fontWeight: 'bold', paddingTop: '2rem', fontSize: '1.8rem'}}>
            Best Creators
          </h1>
          <div
            className="relative flex-1 max-w-full flex mt-3"
            ref={parentRef}
          >
            <div className='flex flex-row w-max overflow-x-scroll no-scrollbar select-none' ref={scrollRef} style={{ maxWidth:'100%', overflow:'auto' }}
            >
              {[1,2,3,4,5,6,7,8,9,10].map((i) => (
                <CreatorCard
                  key={`creator-${i}`}
                  rank={i}
                  creatorImage={images[`creator${i}`]}
                  creatorName={`0x${makeId(3)}...${makeId(4)}`}
                  creatorEth={10 - i * 0.5}
                />
              ))}
              {!hideButtons && (
                <>
                  <div
                    onClick={() => handleScroll('left')} className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0"
                    style={{ left: '0', top: '7rem'}}
                  >
                    {
                      <Image
                        src={images.left}
                        layout="fill"
                        objectFit="contain"
                        alt="left_arrow"
                        className={theme === 'light' ? 'filter invert' : undefined}
                      />
                    }
                  </div>
                  <div
                    onClick={() => handleScroll('right')} className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0"
                    style={{ right: '0', top: '7rem'}}
                  >
                    {
                      <Image
                        src={images.right}
                        layout="fill"
                        objectFit="contain"
                        alt="left_arrow"
                        className={theme === 'light' ? 'filter invert' : undefined}
                      />
                    }
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className='mt-10'>
          <div className='flexBetween mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start'>
            <h1 className="flex-1 before:first:font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold sm:mb-4" style={{fontWeight: 'bold', paddingTop: '1rem', paddingLeft: '2rem', paddingBottom: '1rem', fontSize: '1.8rem'}}>
              Hot Bids
            </h1>
          <div>SearchBar</div>
        </div>
        <div className='mt-3 w-full flex flex-wrap justify-start md:justify-center'>
          {[1,2,3,4,5,6,7,8,9,10].map((i) => (
            <NFTCard
              key={i}
              nft={{
                i,
                name: `Nifty NFT ${i}`,
                price: (10 - i * 0.534).toFixed(2),
                seller: `0x${makeId(3)}...${makeId(4)}`,
                owner: `0x${makeId(3)}...${makeId(4)}`,
                description: 'NFT for sale'
              }}
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
