import type { Metadata } from 'next'
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from '@/lib/site-config'

export type BuildMetadataOptions = {
  /** Page title without the " | Nexiora Studio" suffix - the root layout
   *  template appends it. Pass `titleAbsolute` to opt out. */
  title: string
  description: string
  /** Site-relative path, e.g. '/web-design'. Becomes the canonical URL. */
  path: string
  titleAbsolute?: boolean
  ogType?: 'website' | 'article'
  image?: { url: string; width?: number; height?: number; alt?: string }
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  noIndex?: boolean
}

/**
 * Builds a complete Metadata object: canonical, Open Graph and Twitter card.
 *
 * Next does NOT deep-merge `openGraph` from the layout into a page, so any page
 * that declares a partial openGraph loses siteName/locale/images. Routing every
 * page through this helper keeps the full object intact everywhere.
 */
export function buildMetadata({
  title,
  description,
  path,
  titleAbsolute = false,
  ogType = 'website',
  image,
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(path)
  const socialTitle = titleAbsolute ? title : `${title} | ${SITE_NAME}`

  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: ogType,
      title: socialTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_GB',
      // Images intentionally omitted: app/opengraph-image.tsx supplies them for
      // every route. Pass `image` only to override on a specific page.
      ...(image ? { images: [image] } : {}),
      ...(ogType === 'article' ? { publishedTime, modifiedTime, authors } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      ...(image ? { images: [image.url] } : {}),
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  }
}

export { SITE_URL }
