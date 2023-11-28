/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['res.cloudinary.com', 'upload.wikimedia.org'],
  },
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] },
    });
    return cfg;
  },
};

module.exports = nextConfig;
