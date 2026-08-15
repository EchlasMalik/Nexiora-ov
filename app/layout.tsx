import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Geist, Poppins } from 'next/font/google'
import { ContactModalProvider } from '@/components/contact-modal'
import { JsonLd } from '@/components/json-ld'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { graph, organizationSchema, websiteSchema } from '@/lib/schema'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site-config'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Nexiora Studio | Bespoke Web Design & Development Agency UK',
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: 'Nexiora Studio | Bespoke Web Design & Development Agency UK',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexiora Studio | Bespoke Web Design & Development Agency UK',
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: '/favicon1.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f7fb',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${poppins.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to content
        </a>

        <JsonLd data={graph(organizationSchema(), websiteSchema())} />

        {/* Header and footer live here rather than in each page on purpose.
            Rendered inside the page, the sticky header was the first DOM node
            of the routed segment, and Next skips its scroll-to-top when that
            node's top edge is already in the viewport - which for a `top-0`
            sticky element is always true. Every cross-page navigation kept the
            old scroll position as a result. With them hoisted, <main> is the
            segment's first node and the scroll lands at the top. */}
        <ContactModalProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ContactModalProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}

        {/* Loaded after the page is interactive so it does not compete with LCP. */}
        <Script
          src="https://nexiora-ai-agent.vercel.app/widget.js"
          data-chatbot-id="bot_b31bh7tlkw"
          data-avoid-selector="#marquee-strip"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
