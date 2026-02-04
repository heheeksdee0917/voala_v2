// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');

const hostname = 'https://voalainterior.com';

const routes = [
  { url: '/', changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString().split('T')[0] },
  { url: '/projects', changefreq: 'monthly', priority: 0.9 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects/emhubgf', changefreq: 'monthly', priority: 0.8, lastmod: '2025-11-01' },
  { url: '/projects/thesesh', changefreq: 'monthly', priority: 0.8, lastmod: '2025-11-01' },
  // Add new project slugs here manually or load from data/projects.js later
];

(async () => {
  const sitemap = new SitemapStream({ hostname });

  routes.forEach(route => sitemap.write(route));

  sitemap.end();

  const xml = await streamToPromise(sitemap);

  fs.writeFileSync(path.resolve(__dirname, 'public/sitemap.xml'), xml);
  console.log('✅ Sitemap generated at public/sitemap.xml');
})();