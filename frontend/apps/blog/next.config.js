/** @type {import('next').NextConfig} */
const intercept = require('intercept-stdout');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

intercept((text) => (text.includes('Duplicate atom key') ? '' : text));

module.exports = nextConfig;
