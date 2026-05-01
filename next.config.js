/** @type {import('next').NextConfig} */
const fs = require('fs');
const path = require('path');

// Auto-detect static HTML reports in /public/research/
// Any *.html file there gets a clean URL rewrite (e.g. metadao-q1-2026.html -> /research/metadao-q1-2026)
const reportSlugs = (() => {
  try {
    const dir = path.join(__dirname, 'public', 'research');
    return fs.readdirSync(dir)
      .filter((f) => f.endsWith('.html'))
      .map((f) => f.replace(/\.html$/, ''));
  } catch {
    return [];
  }
})();

const nextConfig = {
  async rewrites() {
    return reportSlugs.map((slug) => ({
      source: `/research/${slug}`,
      destination: `/research/${slug}.html`,
    }));
  },
  async redirects() {
    return [
      { source: '/ir-score', destination: '/ir', permanent: true },
      { source: '/ir-score/:path*', destination: '/ir/:path*', permanent: true },
    ];
  },
};

module.exports = nextConfig;
