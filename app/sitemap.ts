import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts'
import { servicePages } from '@/lib/services-data'
import { SITE_URL } from '@/lib/site-config'

/**
 * Static routes and the date each page's content last meaningfully changed.
 *
 * These are literal dates rather than `new Date()` on purpose. A build
 * timestamp tells Google every page changed on every deploy, which makes
 * <lastmod> untrustworthy - and Google's documented response to inaccurate
 * lastmod is to ignore the signal entirely. Update a date here only when you
 * actually change that page.
 *
 * Note: `priority` and `changeFrequency` are ignored by Google. They are kept
 * because other crawlers still read them, but they do not affect ranking.
 */
const staticRoutes: {
  path: string
  lastModified: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}[] = [
  { path: '', lastModified: '2026-08-11', changeFrequency: 'weekly', priority: 1 },
  { path: '/services', lastModified: '2026-08-11', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/portfolio', lastModified: '2026-08-11', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', lastModified: '2026-08-11', changeFrequency: 'yearly', priority: 0.8 },
  { path: '/process', lastModified: '2026-08-11', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/why-us', lastModified: '2026-08-11', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/privacy-policy', lastModified: '2026-07-24', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-of-service', lastModified: '2026-07-24', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const serviceEntries: MetadataRoute.Sitemap = servicePages.map((page) => ({
    url: `${SITE_URL}/${page.slug}`,
    lastModified: page.lastModified,
    changeFrequency: 'monthly',
    priority: page.priority,
  }))

  // blogPosts is sorted newest-first, so the index reflects its latest article
  // rather than the time of the last deploy.
  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/blog`,
      lastModified: blogPosts[0]?.date,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticEntries, ...serviceEntries, ...blogIndex, ...blogEntries]
}
