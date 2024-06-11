// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
    eslint: {
      dirs: [
        'stories',
        'src/__test__',
        'src/common',
        'src/helpers',
        'src/modules',
        'src/pages',
        'src/styles',
        'src/templates',
      ],
    },
    images: {
      domains: ['avatars.githubusercontent.com'],
    },
    async redirects() {
      return [
        {
          source: '/editor',
          destination: '/builder',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  