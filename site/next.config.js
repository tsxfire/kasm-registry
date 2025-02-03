/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'NerdsWork Registry',
    description: 'The NerdsWork Kasm workspaces.',
    icon: 'https://tsxfire.github.io/kasm-registry/1.1/NerdsworkLogo.png',
    listUrl: 'https://tsxfire.github.io/kasm-registry/',
    contactUrl: 'https://github.com/tsxfire/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
