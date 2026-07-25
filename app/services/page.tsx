import type { Metadata } from 'next'
import { ArrowRight, LayoutTemplate, Code2, Megaphone, Server } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ServicesExplorer } from '@/components/services-explorer'

export const metadata: Metadata = {
  title: 'Services - Nexiora',
  description:
    'Web design, marketing systems, SEO, automation, and ongoing support to help your business grow online.',
}

const services = [
  {
    id: 'landing-page',
    exploreId: 'web-design',
    number: '01',
    icon: LayoutTemplate,
    title: 'Conversion Focused Web Design',
    description:
      'High-converting websites built around your goals - from a focused single landing page to a full multi-page website for larger businesses.',
    points: [
      'Single landing pages or full multi-page sites',
      'Conversion-optimized layout',
      'Fast, mobile-first build',
    ],
  },
  {
    id: 'custom-software',
    exploreId: 'automation',
    number: '02',
    icon: Code2,
    title: 'Custom Software Solutions',
    description:
      'Custom software personally built by me around how your business actually runs, not a generic off-the-shelf tool.',
    points: [
      'More time back to focus on your business',
      'Less time spent chasing leads manually',
    ],
  },
  {
    id: 'marketing',
    exploreId: 'advertising',
    number: '03',
    icon: Megaphone,
    title: 'SEO & Advertising',
    description:
      'Rank higher in search and run smarter ad campaigns that bring in qualified leads, not just clicks.',
    points: [
      'Local & on-page SEO',
      'Targeted Google & Meta ad campaigns',
      'Ongoing growth reporting',
    ],
  },
  {
    id: 'seo',
    exploreId: 'hosting',
    number: '04',
    icon: Server,
    title: 'Hosting & Maintenance',
    description:
      'Reliable hosting and ongoing support so your website stays fast, secure, and updated.',
    points: [
      'Regular backups & security monitoring',
      'SSL renewal & uptime protection',
      'Direct support when you need changes',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-secondary/40 py-16 md:py-24">
          <div className="pointer-events-none absolute -top-24 -right-24 size-[28rem] rounded-full bg-primary/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                What We Do
              </p>

              <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-foreground text-balance sm:text-5xl">
                Everything You Need to{' '}
                <span className="text-primary">Grow Online</span>
              </h1>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                From high-converting websites to automated systems that work
                while you sleep - everything is built to generate real growth,
                not just traffic.
              </p>
            </div>
          </div>
        </section>

        {/* CORE SERVICES */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  id={service.id}
                  className="group flex h-full scroll-mt-24 flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <service.icon className="size-6" />
                    </span>
                    <span className="font-heading text-3xl font-extrabold text-primary/15">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-5 min-h-14 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-18 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mt-5 flex-1 space-y-2 text-sm text-foreground">
                    {service.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-1 size-1.5 rounded-full bg-primary/60" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`#${service.exploreId}`}
                    className="mt-6 flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Learn More
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE DETAILS */}
        <section className="bg-secondary/40 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Service Details
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Explore Our Services
              </h2>
              <p className="mt-3 text-muted-foreground">
                Click a category to see what is included.
              </p>
            </div>

            <div className="mt-10">
              <ServicesExplorer />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}