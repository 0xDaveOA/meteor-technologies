import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.linkedin.com/company/meteor-technologies-ghana/",
                "https://www.facebook.com/share/p/1CYLBdDFr5/?mibextid=wwXIfr",
                "https://www.instagram.com/meteor_technologies",
                "https://twitter.com/meteortechgh"
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}


