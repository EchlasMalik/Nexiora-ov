import type { LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export type FeatureItem = {
  icon: LucideIcon
  title: string
  description: string
  points?: string[]
}

/** Card grid mirroring the existing /services core-services block. */
export function ServiceFeatureGrid({
  eyebrow,
  heading,
  intro,
  items,
  columns = 3,
  tone = 'default',
}: {
  eyebrow?: string
  heading: string
  intro?: string
  items: FeatureItem[]
  columns?: 2 | 3 | 4
  tone?: 'default' | 'muted'
}) {
  const columnClass =
    columns === 2
      ? 'sm:grid-cols-2'
      : columns === 4
        ? 'sm:grid-cols-2 lg:grid-cols-4'
        : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <section
      className={`${tone === 'muted' ? 'bg-secondary/40' : 'bg-background'} py-16 md:py-24`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            {heading}
          </h2>
          {intro ? (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {intro}
            </p>
          ) : null}
        </Reveal>

        <div className={`mt-12 grid gap-6 ${columnClass}`}>
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="size-6" />
                </span>

                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                {item.points?.length ? (
                  <ul className="mt-5 space-y-2 text-sm text-foreground">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/60" />
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
