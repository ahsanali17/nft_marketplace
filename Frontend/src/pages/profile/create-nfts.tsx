import { useState, useMemo, useCallback, useContext} from 'react'
import type { SetStateAction, Dispatch } from 'react'

import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import { Button, Input } from '@/components'
import images from '../../assets'
import { NFTContext } from '../../../context/NFTContext'

const CreatedNFTS = (): JSX.Element => {
  const [fileUrl, setFileUrl] = useState<string | undefined>();
  const [formInput, setFormInput] = useState<{}>({ price: '', name: '', description: '' })
  const { theme } = useTheme()
  const { uploadToIPFS } = useContext(NFTContext)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    // upload to ipfs
    // const url = await uploadToIPFS({ file: acceptedFiles[0], setFileUrl });

    // console.log(url);
    // setFileUrl(url || undefined)
  }, [uploadToIPFS])

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: {accept: ['img', 'png', 'jpeg']},
    maxSize: 5000000,
  })

  const fileStyle = useMemo(
    () => (
      `dark:bg-nft-black-1 bg-gray border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed
       ${isDragActive ? ' border-file-active ' : ''}
       ${isDragAccept ? ' border-file-accept ' : ''}
       ${isDragReject ? ' border-file-reject ' : ''}
      `),
    [isDragActive, isDragReject, isDragAccept],
  )

  console.log(formInput)

  return (
    <div className='flex justify-center'>
      <div className='flex justify-start sm:px-4 p-12' style={{padding: '5rem 3rem'}}>
        <div className='w-3/5 md:w-full'>
          <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold sm:mb-4" style={{fontSize: '1.5rem', padding: '1.5rem 1rem'}}>
            Create new NFT
          </h1>

          <div className='mt-16'>
            <p className='font-poppins dark:text-white text-nft-black-1 font-semibold text-xl'>
              Upload File
            </p>

            <div className='mt-4'>
              <div {... getRootProps()} className={fileStyle}>
                <input {... getInputProps()} />
                <div className='flexCenter flex-col text-center'>
                  <p className='font-poppins dark:text-white text-nft-black-1 font-semibold text-xl p-4'>
                    PNG, GIF, SVG, WEBM, Max 100mb.
                  </p>

                  <div className='mt-10 mb-10 my-12 w-full flex justify-center'>
                    <Image
                      src={images.upload}
                      alt='file upload'
                      width={50}
                      height={50}
                      objectFit='contain'
                      className={theme === 'light' ? 'filter invert' : undefined}
                    />
                  </div>

                  <p className='font-poppins dark:text-white text-nft-black-1 font-semibold text-sm'>
                    Drag and drop files
                  </p>
                  <p className='font-poppins dark:text-white text-nft-black-1 font-semibold text-sm mt-2'>
                    or browse media on your device
                  </p>
                </div>
              </div>
              {fileUrl && (
                <aside>
                  <div>
                    <img src={fileUrl} alt="asset_file" />
                  </div>
                </aside>
              )}
            </div>
          </div>
          <Input
            inputType="input"
            title="Name"
            placeholder="NFT Name"
            handleClick={(e) => setFormInput({...formInput, name: e.target.value})}
          />
          <Input
            inputType='textarea'
            title="Description"
            placeholder="NFT Description"
            handleClick={(e) => setFormInput({...formInput, description: e.target.value})}
          />
          <Input
            inputType='number'
            title="Price"
            placeholder="NFT Price"
            handleClick={(e) => setFormInput({...formInput, price: e.target.value})}
          />

          <div className='mt-7 w-full flex justify-end'>
            <Button
              btnName='Create NFT'
              classStyles='rounded-xl'
              handleClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatedNFTS
