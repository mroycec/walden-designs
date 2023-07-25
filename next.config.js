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
    }
}

module.exports = nextConfig
