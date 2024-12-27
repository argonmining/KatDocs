const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [require('remark-gfm')],
    rehypePlugins: [require('rehype-slug'), require('rehype-pretty-code')],
  }
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: 'standalone',
  experimental: {
    mdxRs: true,
  }
};

module.exports = withMDX(nextConfig);
