// Structured Data Schemas for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Meteor Technologies",
  "url": "https://meteortechnologies.gh",
  "logo": "https://meteortechnologies.gh/images/logo.png",
  "description": "AI-powered web development for Ghanaian businesses and beyond",
  "foundingDate": "2025",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Ghana",
    "addressLocality": "Accra",
    "addressRegion": "Greater Accra Region"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+233-505-677-556",
    "contactType": "customer service",
    "email": "meteortechnologies2@gmail.com",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.linkedin.com/company/meteor-technologies-ghana/",
    "https://www.facebook.com/share/p/1CYLBdDFr5/?mibextid=wwXIfr",
    "https://www.instagram.com/meteor_technologies",
    "https://twitter.com/meteortechgh"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Ghana"
  },
  "serviceType": [
    "Web Development",
    "Website Design",
    "Personal Portfolio Development",
    "Business Website Development",
    "AI-Powered Web Solutions"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Meteor Technologies",
  "url": "https://meteortechnologies.gh",
  "description": "Professional website design services in Ghana. AI-powered web development for personal portfolios and business websites.",
  "publisher": {
    "@type": "Organization",
    "name": "Meteor Technologies"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://meteortechnologies.gh/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Development Services",
  "description": "Professional web development services for personal portfolios and business websites in Ghana",
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
  "offers": [
    {
      "@type": "Offer",
      "name": "Personal Portfolio Package",
      "description": "Professional personal portfolio website with modern design and SEO optimization",
      "price": "599",
      "priceCurrency": "USD"
    },
    {
      "@type": "Offer",
      "name": "Business Website Package",
      "description": "Complete business website with CMS and advanced features",
      "price": "1299",
      "priceCurrency": "USD"
    },
    {
      "@type": "Offer",
      "name": "Web Application Package",
      "description": "Custom web application with AI integration and advanced functionality",
      "price": "2499",
      "priceCurrency": "USD"
    }
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://meteortechnologies.gh/#localbusiness",
  "name": "Meteor Technologies",
  "image": "https://meteortechnologies.gh/images/logo.png",
  "description": "AI-powered web development studio specializing in personal portfolios and business websites in Ghana",
  "url": "https://meteortechnologies.gh",
  "telephone": "+233-505-677-556",
  "email": "meteortechnologies2@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Accra",
    "addressLocality": "Accra",
    "addressRegion": "Greater Accra Region",
    "addressCountry": "Ghana"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "5.6037",
    "longitude": "-0.1870"
  },
  "openingHours": "Mo-Fr 09:00-17:00",
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "currenciesAccepted": "GHS, USD",
  "areaServed": {
    "@type": "Country",
    "name": "Ghana"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Personal Portfolio Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Website Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Application Development"
        }
      }
    ]
  }
};

export const breadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const faqSchema = (faqs) => ({
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
});

export const reviewSchema = (reviews) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Meteor Technologies",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": reviews.length
  },
  "review": reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating
    },
    "reviewBody": review.content
  }))
});

export const portfolioItemSchema = (project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": project.title,
  "description": project.description,
  "creator": {
    "@type": "Organization",
    "name": "Meteor Technologies"
  },
  "dateCreated": project.dateCreated,
  "url": project.liveUrl,
  "image": project.image,
  "keywords": project.technologies.join(", "),
  "genre": project.category,
  "inLanguage": "en"
});