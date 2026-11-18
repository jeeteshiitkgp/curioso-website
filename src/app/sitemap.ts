import type { MetadataRoute } from 'next';
import { articles } from '@/data/articles';
import { lessons } from '@/data/lessons';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.curioso.school';
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/lessons`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles
    .filter((article) => !article.date || new Date(article.date) <= now)
    .map((article) => ({
      url: `${baseUrl}/blog/${article.id}`,
      lastModified: article.date ? new Date(article.date) : now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    }));

  const lessonRoutes: MetadataRoute.Sitemap = lessons.map((lesson) => ({
    url: `${baseUrl}/lessons/${lesson.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes, ...lessonRoutes];
}
