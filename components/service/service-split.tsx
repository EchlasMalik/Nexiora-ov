import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { renderRichText } from '@/components/rich-text'

/** Alternating narrative section for the longer-form parts of a service page. */
export function ServiceSplit({
  eyebrow,
  heading,
  body,
  points,
  aside,
  link,
  reverse = false,
  tone = 'default',
}: {
  eyebrow?: string
  heading: string
  body: string[]
  points?: string[]
  /** Optional callout panel shown beside the copy. */
  aside?: { title: string; items: string[] }
  link?: { label: string; href: string }
  reverse?: boolean
  tone?: 'default' | 'muted'
}) {
  return (
    <section
      className={`${tone === 'muted' ? 'bg-secondary/40' : 'bg-background'} py-16 md:py-24`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className={reverse ? 'lg:order-2' : undefined}>
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                {eyebrow}
              </p>
            ) : null}

            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              {heading}
            </h2>

            {body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-4 text-base leading-relaxed text-muted-foreground"
              >
                {renderRichText(paragraph)}
              </p>
            ))}

            {points?.length ? (
              <ul className="mt-6 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}

            {link ? (
              <Link
                href={link.href}
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                {link.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : null}
          </Reveal>

          {aside ? (
            <Reveal
              delay={100}
              className={reverse ? 'lg:order-1' : undefined}
            >
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {aside.title}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {aside.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  )
}
