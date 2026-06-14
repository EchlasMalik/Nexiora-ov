import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — Nexiora',
  description:
    'Get in touch with Nexiora to build a high-converting website and growth system for your business.',
}

export default function ContactPage() {
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
                Contact
              </p>

              <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-foreground text-balance sm:text-5xl">
                Let’s Build Something That{' '}
                <span className="text-primary">Grows Your Business</span>
              </h1>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Tell us about your project. We’ll respond with clarity on how
                we can help turn your website into a system that brings in
                consistent leads.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            
            {/* FORM */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground">
                Send a Message
              </h2>

              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                />

                <input
                  type="text"
                  placeholder="Service you're interested in"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                />

                <textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                />

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all hover:-translate-y-1 hover:shadow-md active:scale-95"
                >
                  Send Message
                  <ArrowRight className="size-4" />
                </button>
              </form>
            </div>

            {/* INFO + MAP */}
            <div className="space-y-6">

              {/* CONTACT INFO */}
              <div className="rounded-2xl border border-border bg-secondary/40 p-8">
                <h2 className="text-xl font-semibold text-foreground">
                  Contact Information
                </h2>

                <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Mail className="size-4 text-primary" />
                    echlas@nexioratalent.com
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="size-4 text-primary" />
                    +44 7835 385 699
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="size-4 text-primary" />
                    London, United Kingdom
                  </div>
                </div>
              </div>

              {/* MAP */}
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="p-4 border-b border-border">
                  <h3 className="text-sm font-semibold text-foreground">
                    Based in London
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Working with clients worldwide
                  </p>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199192.83829522418!2d-0.2664029591612803!3d51.52873980508483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e1!3m2!1sen!2suk!4v1781395404409!5m2!1sen!2suk"
                  className="h-[320px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
            <section className="bg-secondary/40 py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    Common Questions
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                    Frequently Asked Questions
                </h2>

                <p className="mt-3 text-muted-foreground">
                    A few things people often ask before getting started.
                </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-lg font-semibold text-foreground">
                    How long will my website take to build?
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Most projects are completed within 2–6 weeks depending on scope,
                    content readiness, and any additional systems or integrations
                    required.
                    </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-lg font-semibold text-foreground">
                    Do you work with businesses outside London?
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Absolutely. While we're based in London, we work with businesses
                    across the UK and internationally through video calls, email, and
                    online collaboration.
                    </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-lg font-semibold text-foreground">
                    How does pricing work?
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Pricing depends on the size of the project and the systems involved.
                    After a quick consultation, we'll provide a clear proposal with no
                    hidden costs.
                    </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-lg font-semibold text-foreground">
                    What if I already have a website?
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    That's completely fine. We can improve, redesign, or rebuild your
                    existing website while preserving what's already working and fixing
                    what isn't.
                    </p>
                </div>
                </div>
            </div>
            </section>
      </main>

      <SiteFooter />
    </>
  )
}