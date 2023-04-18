/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    INFURA_PROJECT_ID: process.env.INFURA_PROJECT_ID,
    INFURA_API_KEY: process.env.INFURA_API_KEY
  },
  images: {

    domains: ['ipfs.moralis.io']
  }
}

module.exports = nextConfig
