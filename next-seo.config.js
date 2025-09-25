const siteUrl = 'https://meteortechnologies.gh';

const SEO = {
  titleTemplate: '%s | Meteor Technologies',
  defaultTitle: 'Meteor Technologies - AI-Powered Website Design Studio in Ghana',
  description:
    'Professional website design services in Ghana. We create modern, AI-powered websites for small businesses. Boost your online presence with Meteor Technologies.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'Meteor Technologies',
    images: [
      {
        url: `${siteUrl}/images/tech-pattern.jpg`,
        width: 1200,
        height: 630,
        alt: 'Meteor Technologies',
      },
    ],
  },
  twitter: {
    handle: '@meteortechgh',
    site: '@meteortechgh',
    cardType: 'summary_large_image',
  },
  robotsProps: {
    nosnippet: false,
    noarchive: false,
    notranslate: false,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content:
        'website design Ghana, website design Accra, AI web development, Ghana web developers, small business websites',
    },
  ],
};

export default SEO;

