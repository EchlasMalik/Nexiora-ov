import Image from 'next/image'
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
  image,
}: {
  eyebrow: string
  title: string
  titleHighlight?: string
  description: string
  breadcrumbs: Crumb[]
  primaryCta?: string
  secondaryCta?: { label: string; href: string }
  /** Illustration shown beside the copy. Rendered bare - these mockups carry
   *  their own window chrome and shadow, so a card wrapper would double up. */
  image?: { src: string; alt: string; width: number; height: number }
}) {
  return (
    <section className="relative overflow-hidden bg-secondary/40 py-14 md:py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 size-[28rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 size-[22rem] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div
          className={
            image
              ? 'mt-6 grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12'
              : 'mt-6 max-w-3xl'
          }
        >
          <div className="animate-fade-in-up">
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

          {image ? (
            <div className="animate-fade-in-up relative mx-auto w-full max-w-[340px] [animation-delay:150ms] sm:max-w-[380px] lg:mr-0 lg:ml-auto">
              <div className="pointer-events-none absolute inset-x-6 bottom-4 -z-10 h-24 rounded-full bg-primary/20 blur-2xl" />
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-auto w-full"
                sizes="(max-width: 640px) 340px, 380px"
                priority
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
