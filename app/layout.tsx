import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Geist, Poppins } from 'next/font/google'
import { ContactModalProvider } from '@/components/contact-modal'
import { JsonLd } from '@/components/json-ld'
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
      'Bespoke Web Design & Development Agency UK | Nexiora Studio',
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: 'Bespoke Web Design & Development Agency UK | Nexiora Studio',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bespoke Web Design & Development Agency UK | Nexiora Studio',
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
        <ContactModalProvider>{children}</ContactModalProvider>
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
