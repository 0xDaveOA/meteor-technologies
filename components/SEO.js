import Head from 'next/head';

const SEO = ({
  title = "Meteor Technologies - AI-Powered Website Design Studio in Ghana",
  description = "Professional website design services in Ghana. We create modern, AI-powered websites for small businesses. Boost your online presence with Meteor Technologies.",
  keywords = "website design Ghana, website design Accra, AI web development, Ghana web developers, small business websites, personal portfolio websites",
  image = "/images/og-image.jpg",
  url = "https://meteortechnologies.gh",
  type = "website",
  author = "Meteor Technologies",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  nofollow = false,
  canonical,
  alternateHreflang = [],
  structuredData = null
}) => {
  const fullTitle = title.includes('Meteor Technologies') ? title : `${title} | Meteor Technologies`;
  const fullUrl = url.startsWith('http') ? url : `https://meteortechnologies.gh${url}`;
  const fullImage = image.startsWith('http') ? image : `https://meteortechnologies.gh${image}`;
  
  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
    'max-snippet:-1',
    'max-image-preview:large',
    'max-video-preview:-1'
  ].join(', ');

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || fullUrl} />
      
      {/* Alternate Language Versions */}
      {alternateHreflang.map(({ hreflang, href }) => (
        <link key={hreflang} rel="alternate" hrefLang={hreflang} href={href} />
      ))}
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Meteor Technologies" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@meteortechgh" />
      <meta name="twitter:creator" content="@meteortechgh" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#ee2b6c" />
      <meta name="msapplication-TileColor" content="#ee2b6c" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Meteor Technologies" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="GH" />
      <meta name="geo.placename" content="Accra" />
      <meta name="geo.position" content="5.6037;-0.1870" />
      <meta name="ICBM" content="5.6037, -0.1870" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="Accra, Greater Accra Region" />
      <meta name="business:contact_data:locality" content="Accra" />
      <meta name="business:contact_data:region" content="Greater Accra Region" />
      <meta name="business:contact_data:postal_code" content="00233" />
      <meta name="business:contact_data:country_name" content="Ghana" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
    </Head>
  );
};

export default SEO;