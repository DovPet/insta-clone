/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "scontent.fkun1-1.fna.fbcdn.net",
      "cdn.fakercloud.com",
      "firebasestorage.googleapis.com"
    ]
  }
};

module.exports = nextConfig;
