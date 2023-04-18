import { create as ipfsHttpClient } from 'ipfs-http-client'
import type { StaticImageData } from 'next/image'

export interface UploadToIPFSProps {
  file: any | undefined
  setFileUrl: undefined
}

export const uploadToIPFS = async ({ file }: UploadToIPFSProps): Promise<string | undefined> => {
  try {
    const projectId = process.env.INFURA_PROJECT_ID ?? ''
    const projectSecret = process.env.INFURA_API_KEY ?? ''

    const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret)?.toString('base64')

    const client = ipfsHttpClient({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
      headers: {
        authorization: auth
      }
    })
    const added = await client.add({ content: file })
    const url = `https://ipfs.infura.io/ipfs/${added.path}`

    return url
  } catch (err) {
    console.error('error:', err)
  }
}
