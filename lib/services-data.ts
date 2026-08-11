/**
 * Cross-cutting metadata for the dedicated service pages.
 *
 * Navigation, footer and sitemap all read this array so they cannot diverge.
 * Page body content lives in each page file, not here - the pages are
 * deliberately structured differently from one another.
 */
export type ServicePage = {
  slug: string
  navLabel: string
  /** Short label used in footers and inline link lists. */
  shortLabel: string
  title: string
  description: string
  serviceType: string
  priority: number
  /**
   * Date this page's content last meaningfully changed (YYYY-MM-DD).
   * Feeds <lastmod> in the sitemap - update it when you edit the page, and
   * leave it alone otherwise so the value stays trustworthy.
   */
  lastModified: string
}

export const servicePages: ServicePage[] = [
  {
    slug: 'web-design',
    navLabel: 'Bespoke Web Design',
    shortLabel: 'Web Design',
    title: 'Bespoke Web Design',
    description:
      'Bespoke web design built around your business, not a template. High-converting websites designed to turn visitors into booked clients.',
    serviceType: 'Web Design',
    priority: 0.9,
    lastModified: '2026-08-11',
  },
  {
    slug: 'web-development',
    navLabel: 'Web Development',
    shortLabel: 'Web Development',
    title: 'Web Development',
    description:
      'Custom web development for businesses that have outgrown a brochure site - web applications, dashboards, integrations and automation.',
    serviceType: 'Web Development',
    priority: 0.9,
    lastModified: '2026-08-11',
  },
  {
    slug: 'ecommerce-web-design',
    navLabel: 'Ecommerce Web Design',
    shortLabel: 'Ecommerce',
    title: 'Ecommerce Web Design',
    description:
      'Bespoke ecommerce web design focused on the sale - product pages, checkout experience and mobile conversion built to shift more units.',
    serviceType: 'Ecommerce Web Design',
    priority: 0.85,
    lastModified: '2026-08-11',
  },
  {
    slug: 'custom-software',
    navLabel: 'Custom Software',
    shortLabel: 'Custom Software',
    title: 'Custom Software Development',
    description:
      'Bespoke software development built around how your business actually runs - internal tools, client portals, dashboards and automation.',
    serviceType: 'Custom Software Development',
    priority: 0.85,
    lastModified: '2026-08-11',
  },
  {
    slug: 'ai-seo-agency-london',
    navLabel: 'AI SEO & GEO',
    shortLabel: 'AI SEO',
    title: 'AI SEO & Generative Engine Optimisation',
    description:
      'Technical SEO, structured data and content built so your business stays visible in Google and in AI-powered search experiences.',
    serviceType: 'Search Engine Optimisation',
    priority: 0.85,
    lastModified: '2026-08-11',
  },
  {
    slug: 'web-design-london',
    navLabel: 'Web Design London',
    shortLabel: 'Web Design London',
    title: 'Web Design London',
    description:
      'A London web design and development agency working with businesses across the capital, building high-converting websites and custom systems.',
    serviceType: 'Web Design',
    priority: 0.8,
    lastModified: '2026-08-11',
  },
]

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug)
}
