import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import { ContactModalProvider } from '@/components/contact-modal'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nexiorastudio.com'),
  title: 'Nexiora Studio - High-Converting Websites for Service Businesses',
  description:
    'Nexiora builds high-converting websites and smart systems for service businesses. Book a free design consultation and get a response within 24 hours.',
  generator: 'v0.app',
  icons: {
    icon: "/favicon1.png",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ContactModalProvider>{children}</ContactModalProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <script src="https://nexiora-ai-agent.vercel.app/widget.js" data-chatbot-id="bot_b31bh7tlkw" async></script>
      </body>
    </html>
  )
}
