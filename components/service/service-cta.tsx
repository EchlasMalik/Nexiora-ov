import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ContactTrigger } from '@/components/contact-trigger'

export type RelatedLink = { label: string; href: string }

/**
 * Closing CTA plus a short set of related service links, so every service page
 * ends with both a conversion path and onward internal linking.
 */
export function ServiceCta({
  heading,
  body,
  buttonLabel = 'Get a Free Quote',
  related,
  relatedHeading = 'Explore related services',
}: {
  heading: string
  body: string
  buttonLabel?: string
  related?: RelatedLink[]
  relatedHeading?: string
}) {
  return (
    <section className="bg-navy py-16 text-navy-foreground md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-foreground/75">
            {body}
          </p>

          <ContactTrigger className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
            {buttonLabel}
            <ArrowRight className="size-4" />
          </ContactTrigger>
        </div>

        {related?.length ? (
          <div className="mx-auto mt-12 max-w-3xl border-t border-white/10 pt-8">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-navy-foreground/60">
              {relatedHeading}
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-navy-foreground/85 transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
