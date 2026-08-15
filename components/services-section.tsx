import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { ServicePagesGrid } from '@/components/service-pages-grid'

export function ServicesSection() {
  return (
    <section id="services" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Everything You Need to Grow Online
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Most clients start with a website, then need it to do more - take
            bookings, sync with a CRM, run quotes. We build the whole
            progression, from{' '}
            <Link
              href="/web-design"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              bespoke web design
            </Link>{' '}
            through to{' '}
            <Link
              href="/custom-software"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              custom software and automation
            </Link>
            .
          </p>
        </Reveal>

        <ServicePagesGrid className="mt-12" stagger />

        <Reveal delay={300} className="mt-12 flex justify-center">
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
