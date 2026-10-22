import Link from 'next/link'
import { ArrowRight, Search, PenTool, Rocket } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Accent, SectionHeading } from '@/components/section-heading'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover & Strategise',
    description:
      'We learn your business, your goals, and your customers - then map a clear plan for a site that actually converts.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design & Build',
    description:
      'We craft a custom, mobile-first design and wire up the smart systems that capture and nurture every lead.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Grow',
    description:
      'We launch fast, track performance, and keep optimising so your site keeps turning visitors into booked work.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <>
              A Simple, <Accent>Proven</Accent> Process
            </>
          }
          description="Three clear steps from first call to a website that works while you sleep."
        />

        <Reveal direction="none" className="relative mt-14">
          {/* Connector drawn behind the cards; only the gaps show it. */}
          <div
            aria-hidden="true"
            className="absolute inset-x-[16%] top-[3.25rem] hidden origin-left scale-x-0 border-t-2 border-dashed border-primary/30 transition-[scale] delay-300 duration-1000 ease-in-out group-data-[visible=true]/reveal:scale-x-100 md:block"
          />

          <ol className="relative grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.number}>
                <Reveal delay={i * 120} className="h-full">
                  <div className="group relative h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-[translate,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-navy/10">
                    <span className="absolute right-6 top-6 font-heading text-4xl font-extrabold text-primary/15 transition-colors duration-300 group-hover:text-primary/30">
                      {step.number}
                    </span>
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                      <step.icon className="size-6" />
                    </span>
                    <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-12 flex justify-center">
          <Link
            href="/process"
            className="press group inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3.5 text-sm font-semibold text-primary shadow-sm hover:bg-primary/5"
          >
            View Our Process
            <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
