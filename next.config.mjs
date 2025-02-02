/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || "https://next-cu6ouww11-sizan14789s-projects.vercel.app/" 
  },
  images:{
    domains:[
      "images.pexels.com"
    ]
  }
};

export default nextConfig;
