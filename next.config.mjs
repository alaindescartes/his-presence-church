/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dmtmat9y5/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
