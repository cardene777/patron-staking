/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: config => {
      config.resolve.fallback = { fs: false, net: false, tls: false };
      config.externals.push('pino-pretty', 'lokijs', 'encoding');
      return config;
    },

    experimental: {
      serverActions: true,
    },
    images: {
      domains: ['shxylfswlqbhwuppebtd.supabase.co'],
    },
};

module.exports = nextConfig


