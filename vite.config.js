import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

/*
  SEO helper: fills the site address into index.html and creates
  robots.txt + sitemap.xml at build time.
  Set VITE_SITE_URL in .env to your real domain, e.g. https://hasanain.dev
*/
function seo(siteUrl) {
  const url = siteUrl.replace(/\/$/, '');
  return {
    name: 'portfolio-seo',
    transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', url),
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${url}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const target = env.VITE_PROXY_TARGET || 'http://localhost:5000';
  const siteUrl = env.VITE_SITE_URL || 'https://your-domain.com';

  if (mode === 'production' && !env.VITE_SITE_URL) {
    console.warn('\n[SEO] VITE_SITE_URL is not set in .env. Using https://your-domain.com as a placeholder.\n');
  }

  return {
    plugins: [react(), seo(siteUrl)],
   server : {
      port: 5173,
      proxy: {
        '/api': { target, changeOrigin: true },
        '/uploads': { target, changeOrigin: true },
      },
    },
  };
});
