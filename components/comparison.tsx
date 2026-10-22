import Link from 'next/link'
import { ArrowRight, Check, Sparkles, X } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Accent, SectionHeading } from '@/components/section-heading'

const rows = [
  {
    label: 'Load Time',
    standard: 'Slow - 5s+ and visitors bounce',
    high: 'Lightning fast - under 2 seconds',
  },
  {
    label: 'Mobile Optimised',
    standard: 'Breaks or feels clunky on phones',
    high: 'Flawless on every screen size',
  },
  {
    label: 'Conversion Focus',
    standard: 'Looks pretty, but rarely converts',
    high: 'Engineered to turn clicks into leads',
  },
  {
    label: 'Design',
    standard: 'Generic template everyone else uses',
    high: 'Custom-built around your brand',
  },
]

// Below `sm` the label gets its own full-width line and the two verdicts sit
// side by side underneath - three columns at 375px left ~90px per cell.
const grid = 'grid grid-cols-2 sm:grid-cols-[0.8fr_1fr_1fr]'

export function Comparison() {
  return (
    <section id="difference" className="scroll-mt-16 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Difference"
          title={
            <>
              A Standard Website vs. One That <Accent>Converts</Accent>
            </>
          }
        />

        <Reveal className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-navy/5">
          <div className={`${grid} border-b border-border bg-muted/50`}>
            <div className="hidden p-5 sm:block" />
            <div className="p-4 text-center sm:border-l sm:border-border sm:p-5">
              <span className="font-heading text-sm font-bold text-muted-foreground sm:text-base">
                Standard Site
              </span>
            </div>
            <div className="border-l border-border bg-primary/5 p-4 text-center sm:p-5">
              <span className="inline-flex items-center gap-1.5 font-heading text-sm font-bold text-primary sm:text-base">
                <Sparkles className="size-4" />
                High-Converting
              </span>
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`${grid} border-b border-border transition-colors duration-200 last:border-b-0 hover:bg-muted/30`}
            >
              <div className="col-span-2 flex items-center px-4 pt-4 text-sm font-semibold text-foreground sm:col-span-1 sm:p-5">
                {row.label}
              </div>
              <div className="flex items-start gap-2 p-4 sm:border-l sm:border-border sm:p-5">
                <X className="mt-0.5 size-4 shrink-0 text-destructive/80" />
                <span className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {row.standard}
                </span>
              </div>
              <div className="flex items-start gap-2 border-l border-border bg-primary/5 p-4 sm:p-5">
                <span
                  className="mt-0.5 inline-flex size-4 shrink-0 scale-50 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-[scale,opacity] duration-500 ease-out group-data-[visible=true]/reveal:scale-100 group-data-[visible=true]/reveal:opacity-100"
                  style={{ transitionDelay: `${400 + i * 120}ms` }}
                >
                  <Check className="size-3" strokeWidth={3} />
                </span>
                <span className="text-xs font-medium leading-relaxed text-foreground sm:text-sm">
                  {row.high}
                </span>
              </div>
            </div>
          ))}

          <div className="border-t border-border bg-navy p-6 text-center sm:p-8">
            <p className="mx-auto max-w-2xl font-heading text-lg font-semibold text-navy-foreground text-balance sm:text-xl">
              Same traffic, <span className="text-gold">2-3x more conversions</span>.
              That&apos;s the power of a high-converting website.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-10 flex justify-center">
          <Link
            href="/why-us"
            className="press group inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3.5 text-sm font-semibold text-primary shadow-sm hover:bg-primary/5"
          >
            See The Difference
            <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
