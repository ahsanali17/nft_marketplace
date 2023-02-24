import { create as ipfsHttpClient } from 'ipfs-http-client';


export type uploadToIPFSProps = {
  file: any,
  setFileUrl: any,
}

export const uploadToIPFS = async ({file}: uploadToIPFSProps) => {
 try {
  const projectId = process.env.INFURA_PROJECT_ID || '';
  const projectSecret = process.env.INFURA_API_KEY || '';

  const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

  const client = ipfsHttpClient({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      authorization: auth,
    },
   })
  const added = await client.add({ content: file });
  const url = `https://ipfs.infura.io/ipfs/${added.path}`;

  return url
 } catch(err) {
  console.error('error:', err)
 }
}