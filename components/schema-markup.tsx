import Script from "next/script";

interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: string;
    longitude: string;
  };
  openingHours: string[];
  sameAs: string[];
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed: string;
  serviceType: string;
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  author: {
    name: string;
    url: string;
  };
  publisher: {
    name: string;
    url: string;
  };
  datePublished: string;
  dateModified: string;
  image?: string;
  url: string;
}

export function LocalBusinessSchema({
  name,
  description,
  url,
  telephone,
  email,
  address,
  geo,
  openingHours,
  sameAs,
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    description,
    url,
    telephone,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    openingHours,
    sameAs,
    priceRange: "$$",
    currenciesAccepted: "NPR, USD",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Services Nepal",
            description: "Search engine optimization services for businesses in Nepal",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Marketing Nepal",
            description: "Social media marketing and management services for Nepali businesses",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development Nepal",
            description: "Professional web development services for businesses in Nepal",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Advertising Nepal",
            description: "Google Ads, Facebook Ads, and other digital advertising services in Nepal",
          },
        },
      ],
    },
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  provider,
  areaServed,
  serviceType,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: provider.name,
      url: provider.url,
    },
    areaServed: {
      "@type": "Country",
      name: areaServed,
    },
    serviceType,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  headline,
  description,
  author,
  publisher,
  datePublished,
  dateModified,
  image,
  url,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    author: {
      "@type": "Organization",
      name: author.name,
      url: author.url,
    },
    publisher: {
      "@type": "Organization",
      name: publisher.name,
      url: publisher.url,
      logo: {
        "@type": "ImageObject",
        url: "https://uddheshyagroup.com/logo.png",
      },
    },
    datePublished,
    dateModified,
    image: image || "https://uddheshyagroup.com/logo.png",
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UDDHESHYA GROUP",
    alternateName: "Uddheshya Group",
    description: "Best digital marketing platform in Nepal, providing comprehensive digital marketing services including SEO, social media marketing, web development, and branding for businesses across Nepal.",
    url: "https://uddheshyagroup.com",
    logo: "https://uddheshyagroup.com/logo.png",
    image: "https://uddheshyagroup.com/logo.png",
    telephone: "+9779805533602",
    email: "uddheshyastudio@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sanepa, Lalitpur",
      addressLocality: "Lalitpur",
      addressRegion: "Bagmati Province",
      addressCountry: "Nepal",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "27.6710",
      longitude: "85.3250",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61578545593783",
      "https://www.instagram.com/studio.uddheshya",
      "https://www.linkedin.com/company/uddheshya-group",
    ],
    foundingDate: "2020",
    numberOfEmployees: "10-50",
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    knowsAbout: [
      "Digital Marketing",
      "SEO",
      "Social Media Marketing",
      "Web Development",
      "Brand Development",
      "Digital Advertising",
      "Content Marketing",
      "E-commerce",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services in Nepal",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Services Nepal",
            description: "Search engine optimization services for businesses in Nepal",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Marketing Nepal",
            description: "Social media marketing and management services for Nepali businesses",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development Nepal",
            description: "Professional web development services for businesses in Nepal",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Advertising Nepal",
            description: "Google Ads, Facebook Ads, and other digital advertising services in Nepal",
          },
        },
      ],
    },
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
