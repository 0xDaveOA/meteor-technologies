import { getServerSideProps } from 'next';

function generateImageSiteMap() {
  const images = [
    {
      loc: 'https://meteortechnologies.gh',
      images: [
        {
          loc: 'https://meteortechnologies.gh/images/logo.png',
          caption: 'Meteor Technologies Logo',
          title: 'Meteor Technologies - AI-Powered Web Development'
        },
        {
          loc: 'https://meteortechnologies.gh/images/og-image.jpg',
          caption: 'Meteor Technologies - Professional Web Development Services',
          title: 'Website Design Services in Ghana'
        }
      ]
    },
    {
      loc: 'https://meteortechnologies.gh/about',
      images: [
        {
          loc: 'https://meteortechnologies.gh/images/optimized/about-us.webp',
          caption: 'About Meteor Technologies Team',
          title: 'Our Development Team'
        }
      ]
    },
    {
      loc: 'https://meteortechnologies.gh/portfolio',
      images: [
        {
          loc: 'https://meteortechnologies.gh/images/optimized/portfolio-1.webp',
          caption: 'AutoSell Ghana Website Project',
          title: 'AutoSell Ghana - Automotive Sales Website'
        },
        {
          loc: 'https://meteortechnologies.gh/images/optimized/portfolio-2.webp',
          caption: 'FastTech CCTV Installations Project',
          title: 'FastTech CCTV - Security Platform'
        }
      ]
    }
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
           xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
     ${images.map(page => `
       <url>
         <loc>${page.loc}</loc>
         ${page.images.map(image => `
           <image:image>
             <image:loc>${image.loc}</image:loc>
             <image:caption>${image.caption}</image:caption>
             <image:title>${image.title}</image:title>
           </image:image>
         `).join('')}
       </url>
     `).join('')}
   </urlset>
 `;
}

function ImageSiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const sitemap = generateImageSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default ImageSiteMap;