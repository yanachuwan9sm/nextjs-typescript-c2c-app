/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // styled-componentsの有効化
    styledComponents: true,
  },
};
module.exports = nextConfig;
