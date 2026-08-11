import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BlogContent } from '@/components/blog-content'
import type { BlogBlock } from '@/lib/blog-posts'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How Nexiora Studio collects, uses, and protects your personal information across our website and services.',
  path: '/privacy-policy',
})

const lastUpdated = '24 July 2026'

const content: BlogBlock[] = [
  {
    type: 'p',
    text: 'Nexiora Studio ("Nexiora", "we", "us", or "our") respects your privacy and is committed to protecting the personal information you share with us. This policy explains what information we collect, how we use it, and the choices and rights you have when you visit nexiorastudio.com or work with us as a client.',
  },
  { type: 'h2', text: 'Information We Collect' },
  {
    type: 'p',
    text: 'We collect information in a few different ways, depending on how you interact with our website and services.',
  },
  {
    type: 'ul',
    items: [
      'Contact details you submit through our forms, such as your name, email address, phone number, and business name',
      'Project details and messages you share with us via our contact form, email, WhatsApp, or our website chatbot',
      'Basic technical data collected automatically, such as browser type, device, and the pages you visit, gathered through our website analytics',
    ],
  },
  { type: 'h2', text: 'How We Use Your Information' },
  {
    type: 'p',
    text: 'We use the information we collect to run our business and deliver the services you ask us for, specifically to:',
  },
  {
    type: 'ul',
    items: [
      'Respond to enquiries and provide quotes or proposals',
      'Plan, deliver, and manage web design, development, and automation projects',
      'Send updates, invoices, or information related to an active enquiry or project',
      'Improve our website, services, and the experience of visiting nexiorastudio.com',
      'Meet our legal, accounting, and regulatory obligations',
    ],
  },
  { type: 'h2', text: 'Cookies and Analytics' },
  {
    type: 'p',
    text: 'We use Vercel Analytics to understand how visitors use our website - which pages are popular, how people arrive at our site, and how our content performs. This data is aggregated and does not identify you personally. Our website also uses essential cookies required for basic site functionality, such as remembering your navigation preferences.',
  },
  { type: 'h2', text: 'AI Chatbot and Third-Party Tools' },
  {
    type: 'p',
    text: 'Our website includes an AI chatbot assistant designed to answer common questions. Messages you send through the chatbot may be processed by our automation provider in order to generate a response. We use Resend to deliver contact form submissions to our team by email, and if you choose to message us on WhatsApp, that conversation is also governed by WhatsApp\'s own privacy policy.',
  },
  { type: 'h2', text: 'How We Protect Your Data' },
  {
    type: 'p',
    text: 'We use reasonable technical and organisational measures to protect the personal information we hold, including secure hosting, SSL encryption across our website, and restricted access to client data. No method of transmission or storage is completely secure, but we work to keep your information protected at every stage.',
  },
  { type: 'h2', text: 'Data Retention' },
  {
    type: 'p',
    text: 'We keep personal information only for as long as necessary to fulfil the purpose it was collected for, including any legal, accounting, or reporting requirements. Enquiry details from prospective clients who do not proceed with a project are retained for a reasonable period and then deleted.',
  },
  { type: 'h2', text: 'Your Rights' },
  {
    type: 'p',
    text: 'If you are based in the UK or EU, data protection law gives you a number of rights over your personal information, including the right to:',
  },
  {
    type: 'ul',
    items: [
      'Access the personal information we hold about you',
      'Request correction of inaccurate or incomplete information',
      'Request deletion of your personal information',
      'Object to or restrict certain processing of your data',
      'Request a copy of your data in a portable format',
      'Withdraw consent at any time where we rely on consent to process your data',
    ],
  },
  {
    type: 'p',
    text: 'To exercise any of these rights, contact us using the details below. You also have the right to lodge a complaint with the UK Information Commissioner\'s Office (ICO) if you believe your data has not been handled correctly.',
  },
  { type: 'h2', text: "Children's Privacy" },
  {
    type: 'p',
    text: 'Our website and services are intended for businesses and individuals aged 18 and over. We do not knowingly collect personal information from children.',
  },
  { type: 'h2', text: 'Changes to This Policy' },
  {
    type: 'p',
    text: 'We may update this privacy policy from time to time to reflect changes in our practices or for legal and regulatory reasons. The latest version will always be posted on this page along with its revised date.',
  },
  { type: 'h2', text: 'Contact Us' },
  {
    type: 'p',
    text: 'If you have any questions about this privacy policy or how we handle your personal information, please get in touch at echlas@nexiorastudio.com or +44 7835 385 699.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* HERO */}
        <section className="relative overflow-hidden bg-secondary/40 py-16 md:py-20">
          <div className="pointer-events-none absolute -top-24 -right-24 size-[28rem] rounded-full bg-primary/10 blur-3xl" />

          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Legal
            </p>

            <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-foreground text-balance sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We take your privacy seriously. Here is exactly what we collect,
              why we collect it, and how you stay in control.
            </p>

            <p className="mt-6 inline-flex items-center rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="bg-background py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <BlogContent blocks={content} />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
