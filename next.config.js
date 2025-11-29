const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  basePath: "/surveys-front",
  assetPrefix: "/surveys-front/",
};

module.exports = nextConfig;
