// pages/sitemap.xml.js
import { GetServerSideProps } from 'next';

const Sitemap = () => {
  // This component doesn't render anything
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = 'https://meteortechnologies.gh';
  
  // Define all your static pages
  const staticPages = [
    {
      url: '',
      changefreq: 'weekly',
      priority: '1.0',
      lastmod: new Date().toISOString(),
    },
    {
      url: '/about',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: new Date().toISOString(),
    },
    {
      url: '/services',
      changefreq: 'weekly',
      priority: '0.9',
      lastmod: new Date().toISOString(),
    },
    {
      url: '/portfolio',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: new Date().toISOString(),
    },
    {
      url: '/blog',
      changefreq: 'daily',
      priority: '0.7',
      lastmod: new Date().toISOString(),
    },
    {
      url: '/contact',
      changefreq: 'monthly',
      priority: '0.6',
      lastmod: new Date().toISOString(),
    },
  ];

  // You can add dynamic pages here if you have them
  // For example, if you have blog posts or portfolio items from a CMS
  const dynamicPages = [];
  
  // Combine static and dynamic pages
  const allPages = [...staticPages, ...dynamicPages];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allPages
  .map((page) => {
    return `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;