/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Enable standalone output for microfrontend deployment
    output: 'standalone',
    // Transpile Contentstack SDK
    transpilePackages: ['contentstack'],
}

module.exports = nextConfig
