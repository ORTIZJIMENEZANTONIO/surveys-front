const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  nextConfig,
};
