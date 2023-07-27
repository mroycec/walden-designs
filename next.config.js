/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                'source': '/',
                'destination': '/pre-launch',
                'permanent': true
            }
        ]
    },
    images: {
        domains: ['files.stripe.com'],
    },
}

module.exports = nextConfig
