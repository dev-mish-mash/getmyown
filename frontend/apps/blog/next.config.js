/** @type {import('next').NextConfig} */
const intercept = require('intercept-stdout');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx', 'mdx'],
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

/** prevent warnings from recoil */
intercept((text) => (text.includes('Duplicate atom key') ? '' : text));

module.exports = withMDX(nextConfig);
