/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
                port: ''
            }
        ]
    },
    experimental: {
        serverActions: true
    },
    eslint: {
        ignoreDuringBuilds: true
    }
}

module.exports = nextConfig
