import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Search, PencilRuler, Rocket, CheckCircle2, Star, MessageSquare, Mail } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'How It Works — Nexiora',
  description:
    'A simple, proven 3-step process from discovery to launch and growth with Nexiora.',
}

const steps = [
  {
    icon: Search,
    title: 'Discover & Strategize',
    description:
      'We learn your business, your goals, and your customers — then map a clear plan for a site that actually converts.',
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
      'We launch fast, track performance, and continuously optimize so your site keeps turning visitors into booked work.',
  },
]

const systems = [
  {
    icon: CheckCircle2,
    title: 'Lead Qualifying Forms',
    description:
      'Instead of sending traffic straight to a generic homepage, we design focused landing pages and intake forms that filter and qualify leads before they ever reach you.',
  },
  {
    icon: Star,
    title: 'Smart Review Routing',
    description:
      'We set up automated review flows that engage customers at the right moment — while the experience is still fresh, helping you generate more Google reviews and manage feedback privately.',
  },
  {
    icon: MessageSquare,
    title: 'Reputation & Search Alignment',
    description:
      'We align your website, content, and Google Business Profile with real customer search behaviour so your visibility and trust grow together.',
  },
  {
    icon: Mail,
    title: 'Automated Follow-Up Systems',
    description:
      'Every enquiry gets an instant response confirming their request, keeping leads engaged while you stay focused on your work.',
  },
]

const outcomes = [
  {
    title: 'A Lighter Day-to-Day Workflow',
    text: 'All enquiries are organised in one place with clear next steps — no more scattered messages across texts, emails, and DMs.',
  },
  {
    title: 'Better-Prepared Clients',
    text: 'Most leads already understand your services and process before speaking to you, leading to smoother conversations and faster decisions.',
  },
  {
    title: 'Stronger Return on Marketing',
    text: 'Every click from Google or ads lands on a system designed to convert, making your marketing spend significantly more effective.',
  },
]

export default function ProcessPage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-secondary/40 py-16 md:py-24">
          <div className="pointer-events-none absolute -top-24 -right-24 size-[28rem] rounded-full bg-primary/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                How It Works
              </p>

              <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-foreground text-balance sm:text-5xl">
                A Simple, Proven{' '}
                <span className="text-primary">3-Step Process</span>
              </h1>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                From first call to a website that works while you sleep — we
                handle everything end-to-end with clarity and precision.
              </p>
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="group relative rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="absolute right-6 top-6 text-5xl font-bold text-muted-foreground/10">
                    0{i + 1}
                  </div>

                  <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <step.icon className="size-6" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>

                  <div className="mt-6 h-px w-0 bg-primary/40 transition-all duration-300 group-hover:w-full" />
                </div>
              ))}
            </div>

            {/* 🔥 EXTRA SYSTEMS SECTION */}
            <div className="mt-20">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Going Further
                </h2>
                <p className="mt-3 text-muted-foreground">
                  The extra systems we put in place to help your business run more smoothly.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {systems.map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="size-5" />
                    </div>

                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>

                    <div className="mt-5 h-px w-0 bg-primary/40 transition-all duration-300 group-hover:w-full" />
                  </div>
                ))}
              </div>

              {/* IMPACT */}
              <div className="mt-20">
                <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Real Impact
                </h3>

                <p className="mt-3 text-muted-foreground">
                  What changes after your system goes live.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                  {outcomes.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-border bg-secondary/40 p-7 transition-all duration-300 hover:-translate-y-1"
                    >
                      <h4 className="text-base font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* FINAL LINE */}
                <div className="mt-14 rounded-2xl border border-border bg-primary/5 p-8 text-center">
                  <p className="text-base font-medium text-foreground">
                    The goal isn’t more enquiries — it’s better enquiries, smoother operations, and a business that feels organised and predictable.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-20 rounded-2xl border border-border bg-secondary/40 p-8 text-center md:p-10">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Ready to build something that actually performs?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Let’s map out your website, leads, and growth system — in one simple conversation.
              </p>

              <div className="mt-6">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95"
                >
                  Book a Free Consultation
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}