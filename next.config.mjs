/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       basePath: 'https://ecommerce-af.s3.amazonaws.com/',
  //       regex: /^https:\/\/ecommerce-af\.s3\.amazonaws\.com\/.*/
  //     },
  //     {
  //       basePath: 'https://ecommerce-af.s3.amazonaws.com/',
  //       regex: /^https:\/\/ecommerce-af\.s3\.amazonaws\.com\/.*/
  //     },
  //     {
  //       basePath: 'https://ecommerce-af.s3.eu-north-1.amazonaws.com/',
  //       regex: /^https:\/\/ecommerce-af\.s3\.eu-north-1\.amazonaws\.com\/.*/
  //     }
  //   ]
  // },
  compiler: {
    styledComponents: true,
  }
};

export default nextConfig;
