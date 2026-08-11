import Link from 'next/link'
import {
  ArrowRight,
  Check,
  X,
  Compass,
  Layers,
  MessageSquare,
  Gauge,
  ShieldCheck,
  LineChart,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ContactTrigger } from '@/components/contact-trigger'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ServiceSplit } from '@/components/service/service-split'
import { ServiceFeatureGrid } from '@/components/service/service-feature-grid'
import { ServiceProof } from '@/components/service/service-proof'
import { ServiceCta } from '@/components/service/service-cta'
import { FaqSection } from '@/components/faq-section'
import { whyUsFaqs } from '@/lib/faqs'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Why Choose Us | Bespoke Web Design UK',
  description:
    'Most websites look professional and still fail to convert. Here is how Nexiora Studio builds bespoke, high-converting websites that turn visitors into booked clients.',
  path: '/why-us',
})

const comparisons = [
  {
    feature: 'Load Time',
    standard: 'Slow - 5s+ and visitors bounce',
    pro: 'Lightning fast - under 2 seconds',
  },
  {
    feature: 'Mobile Optimised',
    standard: 'Breaks or feels clunky on phones',
    pro: 'Flawless on every screen size',
  },
  {
    feature: 'Conversion Focus',
    standard: 'Looks pretty, but rarely converts',
    pro: 'Engineered to turn clicks into leads',
  },
  {
    feature: 'Design',
    standard: 'Generic template everyone else uses',
    pro: 'Custom-built around your brand',
  },
  {
    feature: 'Structure',
    standard: 'Sections in whatever order the theme shipped',
    pro: 'Ordered around the questions buyers ask',
  },
  {
    feature: 'Search Foundations',
    standard: 'Bolted on afterwards, if at all',
    pro: 'Clean markup and speed built in from day one',
  },
  {
    feature: 'Room to Grow',
    standard: 'Fighting the theme to add anything new',
    pro: 'Custom functionality added without a rebuild',
  },
]

const reasons = [
  {
    icon: Compass,
    title: 'Built Around Your Sales Process',
    description:
      'Before anything is designed we work out who lands on the page, what makes them hesitate, and what a genuinely good enquiry looks like for you. The layout follows from those answers rather than from a theme.',
    points: ['Audience-first structure', 'Objections answered early'],
  },
  {
    icon: Layers,
    title: 'Design and Development Under One Roof',
    description:
      'Most agencies stop at the brochure site. We also build the systems behind it, so bookings, portals, quoting tools and integrations stay on the table instead of becoming somebody else’s problem.',
    points: ['Bespoke web design', 'Custom web development', 'Business software'],
  },
  {
    icon: MessageSquare,
    title: 'You Speak to the People Building It',
    description:
      'No account manager relaying messages to a team you never meet. Fewer layers means faster answers, and someone on the call who can tell you immediately whether a change is trivial or expensive.',
    points: ['Direct access', 'Straight answers on cost'],
  },
  {
    icon: Gauge,
    title: 'Speed Treated as a Feature',
    description:
      'Performance is designed in rather than tidied up at the end. It affects how many people stay, how many convert, and how search engines read the site - so it is not left until launch week.',
    points: ['Core Web Vitals in mind', 'Fast on mobile data'],
  },
  {
    icon: ShieldCheck,
    title: 'You Own What We Build',
    description:
      'The website, the domain and the content are yours. No arrangement where the site stops working if you stop paying, and no situation where leaving means starting again from nothing.',
    points: ['Full ownership', 'No lock-in'],
  },
  {
    icon: LineChart,
    title: 'Judged on Enquiries, Not Traffic',
    description:
      'A site that halves your traffic while doubling booked work has done its job. Analytics are set up properly at launch so those numbers are visible to you, not just to us.',
    points: ['Measured on real outcomes', 'Reporting you can read'],
  },
]

export default function WhyUsPage() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* HERO */}
        <section className="relative overflow-hidden bg-secondary/40 py-16 md:py-24">
          <div className="pointer-events-none absolute -top-24 -right-24 size-[28rem] rounded-full bg-primary/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: 'Home', path: '/' },
                { name: 'Why Us', path: '/why-us' },
              ]}
            />

            <div className="mt-6 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Why Nexiora
              </p>

              <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-foreground text-balance sm:text-5xl">
                Most Websites Look Good.{' '}
                <span className="text-primary">Ours Make You Money.</span>
              </h1>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The difference between a standard website and a high-converting
                system isn’t design - it’s strategy, speed, and psychology. It’s
                also why we build{' '}
                <Link
                  href="/web-design"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  bespoke websites
                </Link>{' '}
                rather than dressing up a template.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Standard Website vs. High-Converting Website
              </h2>
              <p className="mt-3 text-muted-foreground">
                Same traffic. Different results. Here’s why.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="grid grid-cols-3 border-b border-border bg-muted/30 px-6 py-4 text-sm font-semibold text-foreground">
                <div>Feature</div>
                <div className="text-muted-foreground">Standard Site</div>
                <div className="text-primary">High-Converting</div>
              </div>

              {comparisons.map((item, i) => (
                <div
                  key={item.feature}
                  className={`grid grid-cols-3 px-6 py-5 text-sm ${
                    i !== comparisons.length - 1
                      ? 'border-b border-border'
                      : ''
                  }`}
                >
                  <div className="font-medium text-foreground">
                    {item.feature}
                  </div>

                  <div className="flex items-start gap-2 text-muted-foreground">
                    <X className="mt-0.5 size-4 text-red-500" />
                    {item.standard}
                  </div>

                  <div className="flex items-start gap-2 font-medium text-foreground">
                    <Check className="mt-0.5 size-4 text-green-500" />
                    {item.pro}
                  </div>
                </div>
              ))}
            </div>

            {/* VALUE STRIP */}
            <div className="mt-14 grid gap-6 rounded-2xl border border-border bg-secondary/40 p-8 text-center md:p-10">
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                Same traffic. 2–3x more conversions.
              </h3>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                We don’t just build websites - we build systems designed to turn
                visitors into booked clients and keep your pipeline consistent.
              </p>

              <div className="mt-4">
                <ContactTrigger className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  Get Your High-Converting Website
                  <ArrowRight className="size-4" />
                </ContactTrigger>
              </div>
            </div>
          </div>
        </section>

        <ServiceSplit
          eyebrow="The Real Difference"
          heading="Good-Looking Isn't the Same as Good"
          tone="muted"
          body={[
            'Almost every business we speak to already has a website, and most of them are perfectly presentable. That is exactly the problem. Looking professional has become the baseline, not the advantage - your competitors cleared that bar years ago.',
            'What separates a site that generates enquiries from one that just exists is rarely visual. It is whether the page answers the question a visitor actually arrived with, in the order they think about it, before they lose patience. That is a strategy problem wearing a design costume.',
            'It is also why we start with your customers rather than a moodboard. A [bespoke web design](/web-design) is not about being precious over pixels - it is that hierarchy, proof and clarity are the parts a generic theme gets wrong, and they are the parts that decide whether anyone gets in touch.',
          ]}
          aside={{
            title: 'Where good sites quietly lose work',
            items: [
              'The main objection is answered on a page nobody visits',
              'Three clicks between interest and a way to get in touch',
              'No pricing signal at all, so people assume the worst',
              'Proof buried below content about the company',
              'Slow enough on mobile data that patience runs out first',
            ],
          }}
        />

        <ServiceFeatureGrid
          eyebrow="Why Clients Stay"
          heading="Six Reasons Businesses Choose Nexiora"
          intro="Not awards or agency-speak - the practical differences clients tell us actually mattered once the project was underway."
          items={reasons}
          columns={3}
          tone="default"
        />

        <ServiceSplit
          eyebrow="Beyond the Website"
          heading="We Don't Stop Where Most Agencies Do"
          reverse
          tone="muted"
          body={[
            'A lot of businesses outgrow their website without realising it. The site is fine; the problem is that everything around it is still manual. Enquiries retyped into a spreadsheet, quotes rebuilt from scratch each time, follow-up that depends on somebody remembering.',
            'At that point you do not need a redesign - you need the website to start doing work. That is [custom web development](/web-development) and, further along, [bespoke software](/custom-software) shaped around how you actually operate.',
            'Because we build across that whole range, where you sit on it stays a decision about your business rather than a limit of whoever you hired. Nothing gets rebuilt from scratch just because the requirement grew.',
          ]}
          points={[
            'A website that earns trust and generates enquiries',
            'Custom functionality when a brochure site stops being enough',
            'Software and automation that remove the manual admin',
            'Search and AI visibility so the right people find it',
          ]}
          link={{ label: 'See what we build', href: '/services' }}
        />

        <ServiceProof
          eyebrow="Proof"
          heading="Real Businesses, Real Websites"
          intro="Every site below is live. Most are London businesses in competitive markets where the website has to earn trust quickly."
          tone="default"
        />

        <FaqSection
          faqs={whyUsFaqs}
          eyebrow="Before You Decide"
          heading="Questions Worth Asking Any Agency"
          intro="Including the one most agencies avoid answering honestly."
          tone="muted"
        />

        <ServiceCta
          heading="Want to know if we're a good fit?"
          body="Tell us what your business does and what the current site isn't doing. If a smaller piece of work would fix it, or if you genuinely don't need us yet, we'll say so."
          buttonLabel="Book a Free Consultation"
          related={[
            { label: 'Bespoke Web Design', href: '/web-design' },
            { label: 'Web Development', href: '/web-development' },
            { label: 'Our Process', href: '/process' },
          ]}
        />
      </main>

      <SiteFooter />
    </>
  )
}
