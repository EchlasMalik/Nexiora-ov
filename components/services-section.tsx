import Link from 'next/link'
import { LayoutTemplate, Code2, Megaphone, Server, ArrowRight } from 'lucide-react'
import { ContactTrigger } from '@/components/contact-trigger'
import { Reveal } from '@/components/reveal'

const services = [
  {
    number: '01',
    icon: LayoutTemplate,
    title: 'Conversion Focused Web Design',
    description:
      'High-converting websites built around your goals - from a focused single landing page to a full multi-page website for larger businesses.',
    points: ['Single landing pages or full multi-page sites', 'Conversion-optimized layout', 'Fast, mobile-first build'],
  },
  {
    number: '02',
    icon: Code2,
    title: 'Custom Software Solutions',
    description:
      'Custom software personally built by me around how your business actually runs, not a generic off-the-shelf tool.',
    points: ['More time back to focus on your business', 'Less time spent chasing leads manually'],
  },
  {
    number: '03',
    icon: Megaphone,
    title: 'SEO & Advertising',
    description:
      'Rank higher in search and run smarter ad campaigns that bring in qualified leads, not just clicks.',
    points: ['Local & on-page SEO', 'Targeted Google & Meta ad campaigns', 'Ongoing growth reporting'],
  },
  {
    number: '04',
    icon: Server,
    title: 'Hosting & Maintenance',
    description:
      'Reliable hosting and ongoing support so your website stays fast, secure, and updated.',
    points: ['Regular backups & security monitoring', 'SSL renewal & uptime protection', 'Direct support when you need changes'],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Everything You Need to Grow Online
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From stunning websites to automated systems that work while you
            sleep.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <service.icon className="size-6" />
                  </span>
                  <span className="font-heading text-3xl font-extrabold text-primary/15">
                    {service.number}
                  </span>
                </div>
                <h3 className="mt-5 min-h-14 font-heading text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 min-h-18 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <ContactTrigger className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80">
                  Learn More
                  <ArrowRight className="size-4" />
                </ContactTrigger>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={services.length * 100} className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3.5 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-primary/5"
          >
            View All Services
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
