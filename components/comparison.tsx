import Link from 'next/link'
import { ArrowRight, Check, X } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const rows = [
  {
    label: 'Load Time',
    standard: 'Slow - 5s+ and visitors bounce',
    high: 'Lightning fast - under 2 seconds',
    standardGood: false,
  },
  {
    label: 'Mobile Optimized',
    standard: 'Breaks or feels clunky on phones',
    high: 'Flawless on every screen size',
    standardGood: false,
  },
  {
    label: 'Conversion Focus',
    standard: 'Looks pretty, but rarely converts',
    high: 'Engineered to turn clicks into leads',
    standardGood: false,
  },
  {
    label: 'Design',
    standard: 'Generic template everyone else uses',
    high: 'Custom-built around your brand',
    standardGood: false,
  },
]

export function Comparison() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            The Difference
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Standard Website vs. High-Converting Website
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="grid grid-cols-3 border-b border-border bg-muted/50">
            <div className="p-4 sm:p-5" />
            <div className="border-l border-border p-4 text-center sm:p-5">
              <span className="font-heading text-sm font-bold text-muted-foreground sm:text-base">
                Standard Site
              </span>
            </div>
            <div className="border-l border-border bg-primary/5 p-4 text-center sm:p-5">
              <span className="font-heading text-sm font-bold text-primary sm:text-base">
                High-Converting
              </span>
            </div>
          </div>

          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-3 border-b border-border last:border-b-0"
            >
              <div className="flex items-center p-4 text-sm font-semibold text-foreground sm:p-5">
                {row.label}
              </div>
              <div className="flex items-start gap-2 border-l border-border p-4 sm:p-5">
                <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                <span className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {row.standard}
                </span>
              </div>
              <div className="flex items-start gap-2 border-l border-border bg-primary/5 p-4 sm:p-5">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-xs leading-relaxed text-foreground sm:text-sm">
                  {row.high}
                </span>
              </div>
            </div>
          ))}

          <div className="border-t border-border bg-navy p-6 text-center sm:p-8">
            <p className="mx-auto max-w-2xl font-heading text-lg font-semibold text-navy-foreground text-balance sm:text-xl">
              Same traffic, triple the conversions. That&apos;s the power of a
              high-converting website.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-10 flex justify-center">
          <Link
            href="/why-us"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3.5 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-primary/5"
          >
            See The Difference
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
