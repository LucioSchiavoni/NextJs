/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    backendURL: "http://127.0.0.1:8080"
  }

}

module.exports = nextConfig;