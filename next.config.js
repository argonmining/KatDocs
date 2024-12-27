const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: 'standalone',
  // Explicitly set Node.js runtime
  experimental: {
    serverComponentsExternalPackages: ['fs', 'path']
  }
};

module.exports = withMDX(nextConfig);
