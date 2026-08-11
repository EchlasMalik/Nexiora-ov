import { ArrowRight } from 'lucide-react'
import { Breadcrumbs, type Crumb } from '@/components/breadcrumbs'
import { ContactTrigger } from '@/components/contact-trigger'
import { CALENDLY_URL } from '@/lib/site-config'

/**
 * Service page hero. Mirrors the /services hero block so the new pages sit
 * naturally alongside the existing design.
 *
 * Deliberately uses the `animate-fade-in-up` class rather than <Reveal>, which
 * starts at opacity-0 - the H1 should never be invisible to a crawler or an
 * audit screenshot.
 */
export function ServiceHero({
  eyebrow,
  title,
  titleHighlight,
  description,
  breadcrumbs,
  primaryCta = 'Book a Free Consultation',
  secondaryCta,
}: {
  eyebrow: string
  title: string
  titleHighlight?: string
  description: string
  breadcrumbs: Crumb[]
  primaryCta?: string
  secondaryCta?: { label: string; href: string }
}) {
  return (
    <section className="relative overflow-hidden bg-secondary/40 py-14 md:py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 size-[28rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 size-[22rem] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-6 max-w-3xl animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>

          <h1 className="mt-3 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground text-balance sm:text-5xl">
            {title}
            {titleHighlight ? (
              <>
                {' '}
                <span className="text-primary">{titleHighlight}</span>
              </>
            ) : null}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ContactTrigger className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
              {primaryCta}
              <ArrowRight className="size-4" />
            </ContactTrigger>

            {secondaryCta ? (
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                {secondaryCta.label}
              </a>
            ) : (
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                Book a Call
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
