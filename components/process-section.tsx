import { Search, PenTool, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover & Strategize',
    description:
      'We learn your business, your goals, and your customers — then map a clear plan for a site that actually converts.',
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
      'We launch fast, track performance, and keep optimizing so your site keeps turning visitors into booked work.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            A Simple, Proven Process
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Three clear steps from first call to a website that works while you
            sleep.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <span className="absolute right-6 top-6 font-heading text-4xl font-extrabold text-primary/15">
                {step.number}
              </span>
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <step.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
