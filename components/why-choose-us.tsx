import Link from 'next/link'
import { Target, Clock, Layers, ShieldCheck, ArrowRight } from 'lucide-react'
import { CountUp } from '@/components/count-up'
import { Reveal } from '@/components/reveal'
import { Accent, SectionHeading } from '@/components/section-heading'
import { SpotlightCard } from '@/components/spotlight-card'

// `to` animates; `display` is for values that aren't a single number.
const stats: { to?: number; suffix?: string; display?: string; label: string }[] = [
  { to: 100, suffix: '%', label: 'Client Satisfaction' },
  { to: 5, suffix: '+', label: 'Years of Experience' },
  { to: 20, suffix: '+', label: 'Websites Delivered' },
  { display: '2-3x', label: 'Higher Conversion Rates' },
]

const benefits = [
  {
    icon: Target,
    title: 'Pre-Qualifying Leads',
    description:
      'Clear structure and smart forms qualify enquiries early, so you spend time on real opportunities - not tire-kickers.',
  },
  {
    icon: Clock,
    title: 'Get Your Time Back',
    description:
      'Automated systems capture, nurture, and follow up with leads while you stay focused on the work that matters.',
  },
  {
    icon: Layers,
    title: 'All-in-One Support',
    description:
      'Design, hosting, and automations live in one place, so you are never juggling multiple vendors or platforms.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Earn Trust',
    description:
      'Polished, credible layouts answer common questions up front and make prospects confident enough to reach out.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="pointer-events-none absolute -top-40 left-1/2 size-144 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Why Nexiora"
          title={
            <>
              Built for Businesses That <Accent className="text-gold">Want Results</Accent>
            </>
          }
          description="We focus on what actually moves the needle for service businesses - not vanity metrics."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80} className="h-full">
              <SpotlightCard className="h-full rounded-2xl border border-white/10 bg-white/4 p-6 transition-[border-color,background-color] duration-300 hover:border-white/20">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/20 text-primary ring-1 ring-primary/30">
                  <b.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">
                  {b.description}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/3 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={[
                  'flex flex-col-reverse items-center p-7 text-center sm:p-9',
                  i % 2 === 1 ? 'border-l border-white/10' : '',
                  i >= 2 ? 'border-t border-white/10 lg:border-t-0' : '',
                  i === 2 ? 'lg:border-l' : '',
                ].join(' ')}
              >
                <dt className="mt-2 text-sm font-medium text-navy-foreground/65">
                  {stat.label}
                </dt>
                <dd className="font-heading text-4xl font-extrabold tracking-tight text-gold tabular-nums sm:text-5xl">
                  {stat.display ?? <CountUp to={stat.to ?? 0} suffix={stat.suffix} />}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="mt-14 flex justify-center">
          <Link
            href="/why-us"
            className="press group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-navy-foreground shadow-sm hover:border-white/30 hover:bg-white/10"
          >
            More on Why Clients Choose Us
            <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
