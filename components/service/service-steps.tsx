import type { LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export type Step = {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

/** Numbered process section, mirroring the existing process-section layout. */
export function ServiceSteps({
  eyebrow = 'How It Works',
  heading,
  intro,
  steps,
  tone = 'muted',
}: {
  eyebrow?: string
  heading: string
  intro?: string
  steps: Step[]
  tone?: 'default' | 'muted'
}) {
  return (
    <section
      className={`${tone === 'muted' ? 'bg-secondary/40' : 'bg-background'} py-16 md:py-24`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            {heading}
          </h2>
          {intro ? (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {intro}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <step.icon className="size-6" />
                  </span>
                  <span className="font-heading text-3xl font-extrabold text-primary/15">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
