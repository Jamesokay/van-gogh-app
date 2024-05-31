/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.leonardo.ai',
            port: '',
            pathname: '/users/**',
          },
          {
            protocol: 'https',
            hostname: 'app.leonardo.ai',
            port: '',
            pathname: '/_next/**',
          },
        ],
      },
      async redirects() {
        return [
          {
            source: "/",
            destination: "/ai-generations",
            permanent: true,
          },
        ];
      }
};

export default nextConfig;
