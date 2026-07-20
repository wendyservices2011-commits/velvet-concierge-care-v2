interface BlogSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
}

export default function BlogSchema({ title, description, url, datePublished = "2026-07-01" }: BlogSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "author": {
      "@type": "Person",
      "name": "Wendy Bien-Aime",
      "jobTitle": "Registered Nurse",
      "url": "https://velvetconciergecare.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Velvet Concierge Care",
      "url": "https://velvetconciergecare.com"
    },
    "url": `https://velvetconciergecare.com${url}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://velvetconciergecare.com${url}`
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
