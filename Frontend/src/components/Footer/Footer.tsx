import Image from 'next/image'
import { useTheme } from 'next-themes'

import images from '../../assets'
import { Button } from '..'

interface FooterLinksProps {
  heading: string
  items: string[]
}

const FooterLinks = ({ heading, items }: FooterLinksProps): JSX.Element => (
  <div className='flex-1 justify-start items-start'>
    <h3 className='font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-10'>
      {heading}
    </h3>
    {items.map((item, i) => (
      <p className='font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3'
        key={i}
      >
        {item}
      </p>
    ))}
  </div>
)

const Footer = (): JSX.Element => {
  const { theme } = useTheme()

  return (
    <footer className='flexCenter flex-col border-t border-nft-gray-1 dark:border-nft-black-1 py-16 sm:py-8'>
      <div className='w-full px-16 sm:px-4 flex flex-row md:flex-col minmd:w-4/5'>
        <div className='flex-1 flex-col flexStart'>
          <div className='cursor-pointer flexCenter'>
            <Image src={images.logo02} alt='logo' width={32} height={32} objectFit='contain' />
            <p className='ml-1 font-semibold text-lg dark:text-white text-nft-black-1'>Marketplace</p>
          </div>
          <p className='mt-6 font-semibold text-base font-poppins dark:text-white text-nft-black-1'>Get the latest updates</p>
          <div className='flexBetween w-357 mt-6 md:w-full minlg:w-557 bg-white border border-nft-gray-2 rounded-md dark:bg-nft-black-2 dark:border-nft-black-2'>
            <input
              type='email'
              placeholder='Your Email'
              className='w-full h-full px-4 text-xs minlg:text-lg font-normal dark:text-white text-nft-black-1 bg-white dark:bg-nft-black-2 rounded-md outline-none'
            />
            <div className='flex-initial'>
              { <Button btnName='Email me' classStyles='rounded-md' handleClick={() => console.log('footer email me button pressed')} /> }
            </div>
          </div>
        </div>
        <div className='ml-10 md:ml-0 md:mt-8 flex-1 flex-wrap flexBetweenStart'>
          <FooterLinks heading='Marketplace' items={['Explore', 'How it Works', 'Contact Us']} />
          <FooterLinks heading='Support' items={['Help Center', 'Terms of Service', 'Legal', 'Privacy Policy']} />
        </div>
      </div>
      <div className='px-16 sm:px-4 flexCenter border-t border-nft-gray-1 dark:border-nft-black-1 mt-5'>
        <div className='flex-row w-full minmd:w-4/5 sm:flex-col mt-7 flexBetween'>
          <p className='mt-6 font-semibold text-base font-poppins dark:text-white text-nft-black-1'>Marketplace, Inc. All Rights Reserved.</p>
          <div className='flex flex-row sm:mt-4'>
            {[images.instagram, images.twitter, images.telegram, images.discord].map((image, i) => (
              <div className='mx-2 cursor-pointer' key={i}>
                <Image
                  src={image}
                  alt='social icons'
                  width={24}
                  height={24}
                  objectFit='contain'
                  className={theme === 'light' ? 'filter invert' : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
