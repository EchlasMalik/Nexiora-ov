import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BlogContent } from '@/components/blog-content'
import type { BlogBlock } from '@/lib/blog-posts'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Terms of Service',
  description:
    'The terms and conditions that govern your use of the Nexiora Studio website and our web design, development, and automation services.',
  path: '/terms-of-service',
})

const lastUpdated = '24 July 2026'

const content: BlogBlock[] = [
  {
    type: 'p',
    text: 'These terms of service ("Terms") govern your use of nexiorastudio.com and any project, quote, or agreement with Nexiora Studio ("Nexiora", "we", "us", or "our"). By using our website or engaging our services, you agree to these Terms. If you do not agree, please do not use our website or services.',
  },
  { type: 'h2', text: 'Our Services' },
  {
    type: 'p',
    text: 'Nexiora provides web design, website development, conversion optimisation, SEO, branding, and AI automation services, including custom software, chatbots, and business process automation. The exact scope, timeline, and deliverables for any project are agreed separately in an individual quote, proposal, or written agreement, which forms part of these Terms for that project.',
  },
  { type: 'h2', text: 'Use of This Website' },
  {
    type: 'p',
    text: 'When using our website, you agree that you will:',
  },
  {
    type: 'ul',
    items: [
      'Use the website only for lawful purposes and in a way that does not infringe the rights of others',
      'Not attempt to disrupt, hack, or gain unauthorised access to any part of the website',
      'Not copy, reproduce, or reuse our content, design, or branding without prior written permission',
    ],
  },
  {
    type: 'p',
    text: 'Content on this website, including our portfolio, blog, and service descriptions, is provided for general information and is not a guarantee of specific results for your own business.',
  },
  { type: 'h2', text: 'Quotes, Payment, and Project Terms' },
  {
    type: 'p',
    text: 'Quotes are estimates based on the scope discussed at the time and are confirmed in writing before work begins. A deposit is typically required to secure a project start date, with the remaining balance due according to the payment schedule set out in your proposal or invoice. Work may pause if payment is significantly overdue.',
  },
  { type: 'h2', text: 'Client Responsibilities' },
  {
    type: 'p',
    text: 'To keep your project on track, you agree to:',
  },
  {
    type: 'ul',
    items: [
      'Provide timely feedback, content, and access needed to complete the work',
      'Ensure that any materials you supply, such as images, copy, or logos, do not infringe the rights of a third party',
      'Respond to requests within a reasonable timeframe so agreed timelines can be met',
    ],
  },
  { type: 'h2', text: 'Intellectual Property' },
  {
    type: 'p',
    text: 'Once a project is paid for in full, ownership of the final agreed deliverables transfers to you, the client. Nexiora retains ownership of any pre-existing tools, frameworks, or reusable code libraries used to build your project. Unless otherwise agreed in writing, we reserve the right to showcase completed work in our portfolio, website, and marketing materials.',
  },
  { type: 'h2', text: 'Revisions and Changes' },
  {
    type: 'p',
    text: 'Each project includes an agreed number of revision rounds, outlined in your proposal. Requests that fall outside the original agreed scope may be treated as additional work and quoted separately before proceeding.',
  },
  { type: 'h2', text: 'Cancellations and Refunds' },
  {
    type: 'p',
    text: 'Deposits are non-refundable once work has commenced, as they secure time and resources allocated to your project. Specific cancellation terms, including any fees for work already completed, are set out in your individual project agreement.',
  },
  { type: 'h2', text: 'Limitation of Liability' },
  {
    type: 'p',
    text: 'We provide our services with reasonable skill and care. To the fullest extent permitted by law, Nexiora is not liable for any indirect or consequential loss, including loss of profits or business opportunity, arising from your use of our website or services. Our total liability for any project is limited to the fees paid for that project.',
  },
  { type: 'h2', text: 'Third-Party Tools and Links' },
  {
    type: 'p',
    text: 'Our website and services may rely on third-party platforms, including hosting providers, analytics tools, and automation software, each governed by their own terms and privacy policies. Our website may also link to third-party sites; we are not responsible for the content or practices of sites we do not operate.',
  },
  { type: 'h2', text: 'Termination' },
  {
    type: 'p',
    text: 'Either party may terminate an active project with written notice, in line with the terms set out in the relevant project agreement. Fees for work already completed at the point of termination remain payable.',
  },
  { type: 'h2', text: 'Governing Law' },
  {
    type: 'p',
    text: 'These Terms are governed by the laws of England and Wales. Any disputes arising from these Terms or our services will be subject to the exclusive jurisdiction of the courts of England and Wales.',
  },
  { type: 'h2', text: 'Changes to These Terms' },
  {
    type: 'p',
    text: 'We may update these Terms from time to time to reflect changes in our services or for legal reasons. The latest version will always be posted on this page along with its revised date.',
  },
  { type: 'h2', text: 'Contact Us' },
  {
    type: 'p',
    text: 'If you have any questions about these Terms, please get in touch at echlas@nexiorastudio.com or +44 7835 385 699.',
  },
]

export default function TermsOfServicePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-secondary/40 py-16 md:py-20">
          <div className="pointer-events-none absolute -top-24 -right-24 size-[28rem] rounded-full bg-primary/10 blur-3xl" />

          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Legal
            </p>

            <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-foreground text-balance sm:text-5xl">
              Terms of Service
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The terms and conditions that apply when you use our website or
              work with us on a project.
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
