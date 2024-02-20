import withPlaiceholder from "@plaiceholder/next";

const config = {
  images: {
    remotePatterns: [
      {
        hostname: 'emporiumproductimages.sfo3.cdn.digitaloceanspaces.com',
      },
    ],
    minimumCacheTTL: 60,
  },
};
 
export default withPlaiceholder(config);
// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           hostname: 'emporiumproductimages.sfo3.cdn.digitaloceanspaces.com',
//         },
//       ],
//       minimumCacheTTL: 60,
//     },
//   }