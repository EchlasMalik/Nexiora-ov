import { ArrowRight, CalendarDays, Check } from 'lucide-react'
import { ContactTrigger } from '@/components/contact-trigger'
import { Reveal } from '@/components/reveal'
import { Accent } from '@/components/section-heading'
import { CALENDLY_URL } from '@/lib/site-config'

const assurances = ['Free, no-obligation mockup', 'Custom-built, never templated', 'UK-based team']

export function HomeCta() {
  return (
    <section id="get-started" className="scroll-mt-16 bg-background pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-navy px-6 py-16 text-center text-navy-foreground shadow-2xl shadow-navy/20 sm:px-12 md:py-20">
          <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 opacity-60" />
          <div className="pointer-events-none absolute -left-24 -top-24 -z-10 size-96 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-16 -z-10 size-96 rounded-full bg-gold/20 blur-3xl" />

          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold tracking-tight text-balance sm:text-5xl sm:leading-[1.08]">
            Ready to Turn Your Website Into Your{' '}
            <Accent className="text-gold">Best Salesperson?</Accent>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/75 text-pretty sm:text-lg">
            Tell us about your business and we&apos;ll put together a free mockup
            of your new site - so you can see exactly what you&apos;d get before
            spending a penny.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ContactTrigger className="press group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-gold-foreground shadow-lg shadow-gold/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30 sm:w-auto">
              Get My Free Mockup
              <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
            </ContactTrigger>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-navy-foreground hover:border-white/30 hover:bg-white/10 sm:w-auto"
            >
              <CalendarDays className="size-4" />
              Book a Free Strategy Call
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {assurances.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 text-sm text-navy-foreground/70"
              >
                <Check className="size-4 text-gold" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
