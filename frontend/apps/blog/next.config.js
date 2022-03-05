/** @type {import('next').NextConfig} */
const intercept = require('intercept-stdout');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});
module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});

/** prevent warnings from recoil */
intercept((text) => (text.includes('Duplicate atom key') ? '' : text));

module.exports = nextConfig;
