/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    compress: true,
    poweredByHeader: false,
    allowedDevOrigins: [
        '192.168.1.84'
    ]
};

module.exports = nextConfig;
