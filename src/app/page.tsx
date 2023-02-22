'use client';
import {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import { Banner, CreatorCard } from "../components/index";
import images from '../assets';
import { makeId } from 'utils/makeId';

const Home = () => {
  const { theme, setTheme } = useTheme();
  const parentRef = useRef(null);
  const scrollRef = useRef(null);

  const handleScroll = (direction: string) => {
    const { current } = scrollRef;

    if (current !== null && current !== undefined) {
      if(direction === 'left') {
        current.scrollLeft -= 100;
      }

      if(direction === 'right') {
        current.scrollLeft += 100;
      }
    }
  }

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4/5">
        <Banner
          bannerText='Discover, collect and sell extraordinary NFTs'
          parentStyles='justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl'
          childStyles='md:text-4xl sm:text-2xl xs:text-xl text-left'
        />

        <div className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
          <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
            Best Creators
          </h1>
          <div
            className="relative flex-1 max-w-full flex mt-3"
            ref={parentRef}
          >
            <div
              className='flex flex-row w-max overflow-x-scroll no-scrollbar select-none'
              ref={scrollRef}
              style={{ maxWidth: '100%', overflow:'auto' }}
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
              <>
                <div
                  onClick={() => handleScroll('left')} className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0"
                >
                  <Image
                    src={images.left}
                    layout="fill"
                    objectFit="contain"
                    alt="left_arrow"
                    className={theme === 'light' ? 'filter invert' : undefined}
                  />
                </div>
                <div
                  onClick={() => handleScroll('right')} className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0"
                  style={{ right: '0'}}
                >
                  <Image
                    src={images.right}
                    layout="fill"
                    objectFit="contain"
                    alt="left_arrow"
                    className={theme === 'light' ? 'filter invert' : undefined}
                  />
                </div>
              </>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
};

export default Home;

