/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["s3.us-east-2.amazonaws.com", "nomics-api.s3.us-east-2.amazonaws.com", "set-core.s3.amazonaws.com"],
  },
};
