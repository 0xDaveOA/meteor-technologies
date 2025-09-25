import { getServerSideProps } from 'next';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Static pages -->
     <url>
       <loc>https://meteortechnologies.gh</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>https://meteortechnologies.gh/about</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>https://meteortechnologies.gh/services</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>https://meteortechnologies.gh/portfolio</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>https://meteortechnologies.gh/contact</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>https://meteortechnologies.gh/blog</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.6</priority>
     </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap([]);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;