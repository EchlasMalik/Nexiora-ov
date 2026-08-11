import { Fragment } from 'react'
import { ArrowDown, ArrowRight, Search, PencilRuler, Rocket } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ContactTrigger } from '@/components/contact-trigger'
import { ProcessExplorer } from '@/components/process-explorer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Our Web Design & Development Process',
  description:
    'How a Nexiora project runs, from discovery and strategy through design, build and launch - and what happens once your website goes live.',
  path: '/process',
})

const steps = [
  {
    icon: Search,
    title: 'Discover & Strategise',
    description:
      'We learn your business, your goals, and your customers - then map a clear plan for a site that actually converts.',
  },
  {
    icon: PencilRuler,
    title: 'Design & Build',
    description:
      'We craft a custom, mobile-first design and implement smart systems that capture and nurture every lead.',
  },
  {
    icon: Rocket,
    title: 'Launch & Grow',
    description:
      'We launch fast, track performance, and continuously optimise so your site keeps turning visitors into booked work.',
  },
]

export default function ProcessPage() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* HERO */}
        <section className="relative overflow-hidden bg-secondary/40 py-16 md:py-24">
          <div className="pointer-events-none absolute -top-24 -right-24 size-[28rem] rounded-full bg-primary/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: 'Home', path: '/' },
                { name: 'Process', path: '/process' },
              ]}
            />

            <div className="mt-6 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                How It Works
              </p>

              <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-foreground text-balance sm:text-5xl">
                Our Web Design &amp; Development{' '}
                <span className="text-primary">Process</span>
              </h1>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                From first call to a website that works while you sleep - we
                handle everything end-to-end with clarity and precision.
              </p>
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
                The Three Stages of a Project
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Every build follows the same path, so you always know what is
                happening and what comes next.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
              {steps.map((step, i) => (
                <Fragment key={step.title}>
                  <div className="group relative rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    <div className="absolute right-6 top-6 text-5xl font-bold text-muted-foreground/10">
                      0{i + 1}
                    </div>

                    <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-110">
                      <step.icon className="size-6" />
                    </div>

                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>

                    <div className="mt-6 h-px w-0 bg-primary/40 transition-all duration-200 group-hover:w-full" />
                  </div>

                  {i < steps.length - 1 && (
                    <div className="flex items-center justify-center py-1 md:py-0">
                      <ArrowRight
                        className="animate-arrow-flow-x hidden size-7 text-primary md:block"
                        style={{ animationDelay: `${i * 300}ms` }}
                      />
                      <ArrowDown
                        className="animate-arrow-flow-y size-6 text-primary md:hidden"
                        style={{ animationDelay: `${i * 300}ms` }}
                      />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* GOING FURTHER + IMPACT */}
        <section className="bg-secondary/40 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Beyond the Build
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Systems, Support, and the Impact It Has
              </h2>
              <p className="mt-3 text-muted-foreground">
                Explore what we set up behind the scenes, and the difference
                it makes once your system is live.
              </p>
            </div>

            <div className="mt-10">
              <ProcessExplorer />
            </div>

            {/* FINAL LINE */}
            <div className="mt-16 rounded-2xl bg-navy p-8 text-center text-navy-foreground md:p-10">
              <p className="mx-auto max-w-2xl text-balance text-lg font-medium">
                The goal isn’t more enquiries - it’s better enquiries,
                smoother operations, and a business that feels organised and
                predictable.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 rounded-2xl border border-border bg-card p-8 text-center shadow-sm md:p-10">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Ready to build something that actually performs?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Let’s map out your website, leads, and growth system - in one
                simple conversation.
              </p>

              <div className="mt-6">
                <ContactTrigger className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md active:scale-95">
                  Book a Free Consultation
                  <ArrowRight className="size-4" />
                </ContactTrigger>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
