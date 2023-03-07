/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    API_HOST: process.env.API_HOST,
  },
  images: {
    domains: ['d1ralsognjng37.cloudfront.net']
  },
}

module.exports = nextConfig
