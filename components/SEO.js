import Head from 'next/head';
import { useRouter } from 'next/router';

const SEO = ({
  title = 'Meteor Technologies - AI-Powered Website Design Studio in Ghana',
  description = 'Professional website design services in Ghana. We create modern, AI-powered websites for small businesses. Boost your online presence with Meteor Technologies.',
  keywords = 'website design Ghana, website design Accra, AI web development, Ghana web developers, small business websites',
  image = '/images/og-image.jpg',
  article = false,
  author = 'Meteor Technologies',
  publishedTime,
  modifiedTime,
  canonicalUrl,
  noindex = false,
  nofollow = false,
  structuredData,
  breadcrumbs,
}) => {
  const router = useRouter();
  const baseUrl = 'https://meteortechnologies.gh';
  const currentUrl = canonicalUrl || `${baseUrl}${router.asPath}`;
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  // Generate breadcrumb structured data
  const breadcrumbStructuredData = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${baseUrl}${crumb.url}`
    }))
  } : null;

  // Default organization structured data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Meteor Technologies",
    "url": baseUrl,
    "logo": `${baseUrl}/images/logo.png`,
    "description": "AI-powered web development for Ghanaian businesses and beyond",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Ghana",
      "@id": "https://meteortechnologies.gh/#address"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+233-XX-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/meteor-technologies-ghana/",
      "https://www.facebook.com/share/p/1CYLBdDFr5/?mibextid=wwXIfr",
      "https://www.instagram.com/meteor_technologies",
      "https://twitter.com/meteortechgh"
    ],
    "foundingDate": "2025",
    "founder": {
      "@type": "Person",
      "name": "Meteor Technologies Team"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Ghana"
    },
    "serviceType": [
      "Web Development",
      "Website Design",
      "AI Integration",
      "SEO Services",
      "Brand Design"
    ]
  };

  // Website structured data
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Meteor Technologies",
    "url": baseUrl,
    "description": description,
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      {/* Robots Meta Tags */}
      <meta 
        name="robots" 
        content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'},max-snippet:-1,max-image-preview:large,max-video-preview:-1`} 
      />
      <meta name="googlebot" content="index,follow" />
      <meta name="bingbot" content="index,follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Meteor Technologies" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific Open Graph tags */}
      {article && (
        <>
          <meta property="article:author" content={author} />
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          <meta property="article:section" content="Technology" />
          <meta property="article:tag" content="Web Development" />
          <meta property="article:tag" content="Ghana" />
          <meta property="article:tag" content="AI" />
        </>
      )}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@meteortechgh" />
      <meta name="twitter:creator" content="@meteortechgh" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#ee2b6c" />
      <meta name="msapplication-TileColor" content="#ee2b6c" />
      <meta name="application-name" content="Meteor Technologies" />
      <meta name="apple-mobile-web-app-title" content="Meteor Technologies" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Geo Tags for Ghana */}
      <meta name="geo.region" content="GH" />
      <meta name="geo.placename" content="Accra, Ghana" />
      <meta name="geo.position" content="5.6037;-0.1870" />
      <meta name="ICBM" content="5.6037, -0.1870" />
      
      {/* Language and Content Tags */}
      <meta httpEquiv="content-language" content="en-us" />
      <meta name="language" content="English" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData)
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData)
        }}
      />
      
      {/* Breadcrumb Structured Data */}
      {breadcrumbStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbStructuredData)
          }}
        />
      )}
      
      {/* Custom Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  );
};

export default SEO;