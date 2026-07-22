import { LayoutTemplate, Megaphone, TrendingUp, ArrowRight } from 'lucide-react'

const services = [
  {
    number: '01',
    icon: LayoutTemplate,
    title: 'Single Landing Page',
    description:
      'A focused, high-converting page built around one goal - capturing leads for a specific offer or campaign.',
    points: ['Conversion-optimized layout', 'Fast, mobile-first build', 'Lead capture & tracking'],
  },
  {
    number: '02',
    icon: Megaphone,
    title: 'Marketing Services',
    description:
      'Smart advertising and automations that bring more qualified inquiries from every dollar you spend.',
    points: ['Targeted ad campaigns', 'Automated lead follow-up', 'CRM & systems setup'],
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'SEO',
    description:
      'Rank higher in local and organic search so the right customers find you long after launch.',
    points: ['Local & on-page SEO', 'Technical optimization', 'Ongoing growth reporting'],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Everything You Need to Grow Online
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From stunning websites to automated systems that work while you
            sleep.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="size-6" />
                </span>
                <span className="font-heading text-3xl font-extrabold text-primary/15">
                  {service.number}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Learn More
                <ArrowRight className="size-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
