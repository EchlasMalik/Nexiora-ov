import { Target, Clock, Layers, ShieldCheck } from 'lucide-react'

const stats = [
  { value: '100%', label: 'Client Satisfaction' },
  { value: '5+', label: 'Years of Experience' },
  { value: '20+', label: 'Websites Delivered' },
  { value: '3x', label: 'Higher Conversion Rates' },
]

const benefits = [
  {
    icon: Target,
    title: 'Pre-Qualifying Leads',
    description:
      'Clear structure and smart forms qualify inquiries early, so you spend time on real opportunities — not tire-kickers.',
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
    <section id="why-us" className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center"
            >
              <p className="font-heading text-4xl font-extrabold text-gold sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-navy-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why Us
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Why Clients Choose Nexiora
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-foreground/70">
            We focus on what actually moves the needle for service businesses.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <b.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
