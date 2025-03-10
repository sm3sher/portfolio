import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jumatov.com/en',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          de: 'https://jumatov.com/de',
        },
      },
    },
    {
      url: 'https://jumatov.com/en/legal-notice',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
      alternates: {
        languages: {
          de: 'https://jumatov.com/de/legal-notice',
        },
      },
    },
    {
      url: 'https://jumatov.com/en/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
      alternates: {
        languages: {
          de: 'https://jumatov.com/de/privacy-policy',
        },
      },
    },
  ];
}
