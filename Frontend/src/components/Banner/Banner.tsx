import React from 'react'

interface bannerProps {
  bannerText: string
  parentStyles: string
  childStyles: string
}

const Banner = ({ bannerText, parentStyles, childStyles }: bannerProps): JSX.Element => {
  return (
    <div className={`relative flex items-center z-0 overflow-hidden nft-gradient ${parentStyles} border-t rounded-3xl justify-center items-center`}>
      <p className={`font-bold text-5xl font-poppins leading-70 ${childStyles}`}>
        {bannerText}
      </p>
      <div className="absolute w-48 h-48 sm:w-32 sm:h-32 rounded-full white-bg -top-9 -left-16 -z-5" />
      <div className="absolute w-72 h-72 sm:w-56 sm:h-56 rounded-full white-bg -bottom-24 -right-14 -z-5" />
    </div>
  )
}

export default Banner
