import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.dummyjson.com',
      't3.ftcdn.net',
      'cdn1.iconfinder.com',
      'dummyjson.com',
      'lh3.googleusercontent.com',
      'encrypted-tbn0.gstatic.com',
      's.gravatar.com',
    ], // Add the hostname here
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en/products',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
