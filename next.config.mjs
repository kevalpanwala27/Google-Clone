/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["upload.wikimedia.org"],
    },
};

export default nextConfig;
