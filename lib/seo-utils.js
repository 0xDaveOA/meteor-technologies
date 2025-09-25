// SEO utility functions for Meteor Technologies

export const generateMetaTitle = (title, includeCompany = true) => {
  const companyName = 'Meteor Technologies';
  if (includeCompany && !title.includes(companyName)) {
    return `${title} | ${companyName}`;
  }
  return title;
};

export const generateMetaDescription = (description, maxLength = 160) => {
  if (description.length <= maxLength) {
    return description;
  }
  return description.substring(0, maxLength - 3) + '...';
};

export const generateKeywords = (baseKeywords, additionalKeywords = []) => {
  const defaultKeywords = [
    'website design Ghana',
    'web development Ghana',
    'Meteor Technologies',
    'AI web development',
    'Ghana web developers'
  ];
  
  const allKeywords = [...baseKeywords, ...additionalKeywords, ...defaultKeywords];
  // Remove duplicates and return as comma-separated string
  return [...new Set(allKeywords)].join(', ');
};

export const generateStructuredData = {
  organization: (customData = {}) => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Meteor Technologies",
    "url": "https://meteortechnologies.gh",
    "logo": "https://meteortechnologies.gh/images/logo.png",
    "description": "AI-powered web development for Ghanaian businesses and beyond",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Ghana",
      "addressLocality": "Accra"
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
    ],
    ...customData
  }),

  service: (serviceName, description, customData = {}) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Meteor Technologies",
      "url": "https://meteortechnologies.gh"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Ghana"
    },
    "serviceType": "Web Development",
    "category": "Technology Services",
    ...customData
  }),

  webpage: (name, description, url, customData = {}) => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description,
    "url": url,
    "publisher": {
      "@type": "Organization",
      "name": "Meteor Technologies"
    },
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Meteor Technologies",
      "url": "https://meteortechnologies.gh"
    },
    ...customData
  }),

  breadcrumb: (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://meteortechnologies.gh${item.url}`
    }))
  }),

  faq: (faqs) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  })
};

export const generateOpenGraphImage = (title, description) => {
  // This would typically generate a dynamic OG image
  // For now, return the default image
  return '/images/og-image.jpg';
};

export const validateSEOData = (seoData) => {
  const errors = [];
  
  if (!seoData.title || seoData.title.length < 10) {
    errors.push('Title should be at least 10 characters long');
  }
  
  if (seoData.title && seoData.title.length > 60) {
    errors.push('Title should be less than 60 characters for optimal display');
  }
  
  if (!seoData.description || seoData.description.length < 50) {
    errors.push('Description should be at least 50 characters long');
  }
  
  if (seoData.description && seoData.description.length > 160) {
    errors.push('Description should be less than 160 characters for optimal display');
  }
  
  if (!seoData.keywords || seoData.keywords.length < 3) {
    errors.push('At least 3 keywords should be provided');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const generateCanonicalUrl = (path) => {
  const baseUrl = 'https://meteortechnologies.gh';
  return `${baseUrl}${path}`;
};

export const generateAlternateLanguages = (path) => {
  // For future internationalization
  return [
    { hreflang: 'en', href: `https://meteortechnologies.gh${path}` },
    { hreflang: 'x-default', href: `https://meteortechnologies.gh${path}` }
  ];
};

export const seoConstants = {
  SITE_NAME: 'Meteor Technologies',
  BASE_URL: 'https://meteortechnologies.gh',
  DEFAULT_IMAGE: '/images/og-image.jpg',
  TWITTER_HANDLE: '@meteortechgh',
  COMPANY_NAME: 'Meteor Technologies',
  COMPANY_DESCRIPTION: 'AI-powered web development for Ghanaian businesses and beyond',
  DEFAULT_KEYWORDS: [
    'website design Ghana',
    'web development Ghana',
    'AI web development',
    'Ghana web developers',
    'small business websites',
    'personal portfolio websites',
    'company websites Ghana'
  ]
};