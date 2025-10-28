/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://meteortechnologies.gh',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      'https://meteortechnologies.gh/sitemap.xml',
    ],
  },
  sitemapSize: 5000,
  exclude: ['/api/*'],
};

