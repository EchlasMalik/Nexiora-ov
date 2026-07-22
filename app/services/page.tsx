import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  LayoutTemplate,
  Megaphone,
  Search,
  ShieldCheck,
  Server,
  Lock,
  RefreshCw,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Services - Nexiora',
  description:
    'Web design, marketing systems, SEO, automation, and ongoing support to help your business grow online.',
}

const services = [
  {
    icon: LayoutTemplate,
    title: 'Single Landing Page',
    description:
      'A focused, high-converting page built around one goal - capturing leads for a specific offer or campaign.',
    points: [
      'Conversion-optimized layout',
      'Fast, mobile-first build',
      'Lead capture & tracking',
    ],
  },
  {
    icon: Megaphone,
    title: 'Marketing Services',
    description:
      'Smart advertising and automation systems that bring more qualified inquiries from every dollar you spend.',
    points: [
      'Targeted ad campaigns',
      'Automated lead follow-up',
      'CRM & systems setup',
    ],
  },
  {
    icon: Search,
    title: 'SEO',
    description:
      'Rank higher in local and organic search so the right customers find you long after launch.',
    points: [
      'Local & on-page SEO',
      'Technical optimization',
      'Ongoing growth reporting',
    ],
  },
]

const serviceDetails = [
  {
    title: 'Web Design',
    description:
      'High-performance websites designed to convert visitors into real enquiries.',
  },
  {
    title: 'Automations and CRM',
    description:
      'Systems that track, manage, and follow up with your leads automatically.',
  },
  {
    title: 'SEO and Advertising',
    description:
      'Visibility strategies that combine organic search and paid traffic for consistent growth.',
  },
  {
    title: 'Hosting and Support',
    description:
      'Reliable hosting and ongoing support so your website stays fast, secure, and updated.',
  },
]

const reliability = [
  {
    icon: ShieldCheck,
    title: 'Security and Reliability',
    description:
      'Secure, standard practices to protect your site from common attacks and keep everything running smoothly.',
    points: [
      'Regular backups and updated backend tools',
      'SSL renewal and security monitoring',
      'Minimize risk of downtime or hacking',
    ],
  },
  {
    icon: Server,
    title: 'Hosting and Maintenance',
    description:
      'Flexible hosting and maintenance plans designed to keep your site running without stress.',
    points: [
      'Stress-free updates and tweaks',
      'Ongoing improvements and fixes',
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
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <service.icon className="size-6" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {service.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-1 size-1.5 rounded-full bg-primary/60" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                    Learn More
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE DETAILS */}
        <section className="bg-secondary/40 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Service Details
              </h2>
              <p className="mt-3 text-muted-foreground">
                A closer look at everything included in our systems.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {serviceDetails.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* RELIABILITY */}
            <div className="mt-20 grid gap-6 md:grid-cols-2">
              {reliability.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-1 size-1.5 rounded-full bg-primary/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-20 rounded-2xl border border-border bg-primary/5 p-8 text-center md:p-10">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Ready to build a system that actually grows your business?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Let’s turn your website, marketing, and SEO into one connected
                growth system.
              </p>

              <div className="mt-6">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  Book a Free Consultation
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}