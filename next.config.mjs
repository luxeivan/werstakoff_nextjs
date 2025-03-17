/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '1337',
            pathname: '/uploads/**',
            search: '',
          },
          {
            protocol: 'https',
            hostname: 'avatars.mds.yandex.net',
            // port: '1337',
            // pathname: '/uploads/**',
            search: '',
          },
        ],
      },
};

export default nextConfig;
