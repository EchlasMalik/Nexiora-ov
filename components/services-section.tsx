import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Accent, SectionHeading } from '@/components/section-heading'
import { ServicePagesGrid } from '@/components/service-pages-grid'

export function ServicesSection() {
  return (
    <section id="services" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Everything You Need to <Accent>Grow Online</Accent>
            </>
          }
          description={
            <>
              Most clients start with a website, then need it to do more - take
              bookings, sync with a CRM, run quotes. We build the whole
              progression, from{' '}
              <Link
                href="/web-design"
                className="font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
              >
                bespoke web design
              </Link>{' '}
              through to{' '}
              <Link
                href="/custom-software"
                className="font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
              >
                custom software and automation
              </Link>
              .
            </>
          }
        />

        <ServicePagesGrid className="mt-12" stagger />

        <Reveal delay={300} className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="press group inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3.5 text-sm font-semibold text-primary shadow-sm hover:bg-primary/5"
          >
            View All Services
            <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
