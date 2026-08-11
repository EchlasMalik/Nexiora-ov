import type { BlogPost } from '@/lib/blog-posts'
import {
  DEFAULT_OG_IMAGE,
  NAP,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from '@/lib/site-config'

/** Stable @ids so entities reference each other instead of being duplicated. */
const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`
const LOCAL_ID = `${SITE_URL}/#localbusiness`

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    legalName: NAP.legalName,
    url: SITE_URL,
    description:
      'UK web design and development agency building bespoke, high-converting websites, custom software and AI-powered systems.',
    email: NAP.email,
    telephone: NAP.phone,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/favicon1.png'),
    },
    image: absoluteUrl(DEFAULT_OG_IMAGE.url),
    address: {
      '@type': 'PostalAddress',
      addressLocality: NAP.locality,
      addressRegion: NAP.region,
      addressCountry: NAP.country,
    },
    areaServed: NAP.areaServed.map((name) => ({ '@type': 'Place', name })),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: NAP.email,
      telephone: NAP.phone,
      areaServed: 'GB',
      availableLanguage: 'English',
    },
  }
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      'Bespoke web design, custom web development and business software from a London-based UK agency.',
    inLanguage: 'en-GB',
    publisher: { '@id': ORG_ID },
  }
}

export function localBusinessSchema() {
  return {
    '@type': 'ProfessionalService',
    '@id': LOCAL_ID,
    name: SITE_NAME,
    url: SITE_URL,
    email: NAP.email,
    telephone: NAP.phone,
    image: absoluteUrl(DEFAULT_OG_IMAGE.url),
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      addressLocality: NAP.locality,
      addressRegion: NAP.region,
      addressCountry: NAP.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: NAP.geo.lat,
      longitude: NAP.geo.lng,
    },
    hasMap: NAP.mapsUrl,
    areaServed: NAP.areaServed.map((name) => ({ '@type': 'Place', name })),
    parentOrganization: { '@id': ORG_ID },
  }
}

export function serviceSchema(o: {
  name: string
  description: string
  path: string
  serviceType: string
  areaServed?: string[]
}) {
  return {
    '@type': 'Service',
    '@id': `${absoluteUrl(o.path)}#service`,
    name: o.name,
    description: o.description,
    serviceType: o.serviceType,
    url: absoluteUrl(o.path),
    provider: { '@id': ORG_ID },
    areaServed: (o.areaServed ?? [...NAP.areaServed]).map((name) => ({
      '@type': 'Place',
      name,
    })),
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function articleSchema(post: BlogPost) {
  const url = absoluteUrl(`/blog/${post.slug}`)
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    inLanguage: 'en-GB',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: post.author, url: SITE_URL },
    publisher: { '@id': ORG_ID },
    image: absoluteUrl(DEFAULT_OG_IMAGE.url),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

/** Wrap one or more schema nodes into a single @graph document. */
export function graph(...nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  }
}
