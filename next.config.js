/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  }
};

module.exports = nextConfig;
