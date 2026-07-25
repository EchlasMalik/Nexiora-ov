import type { Metadata } from 'next'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ContactForm } from '@/components/contact-form'
import { FaqAccordion } from '@/components/faq-accordion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact - Nexiora',
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
          <div className="mx-auto grid grid-cols-1 items-stretch gap-10 max-w-7xl px-4 sm:px-6 lg:grid-cols-[3fr_2fr] lg:px-8">
            {/* FORM */}
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground">
                Send a Message
              </h2>

              <ContactForm />
            </div>

            {/* INFO + MAP */}
            <div className="flex h-full flex-col gap-6">
              {/* CONTACT INFO */}
              <div className="rounded-2xl border border-border bg-secondary/40 p-8">
                <h2 className="text-xl font-semibold text-foreground">
                  Contact Information
                </h2>

                <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Mail className="size-4 text-primary" />
                    echlas@nexiorastudio.com
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

              {/* TIMELINE */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="size-5" />
                  </span>
                  <h2 className="text-xl font-semibold text-foreground">
                    Project Timeline
                  </h2>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Most projects go live within one to two weeks of your design
                  being approved.
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Larger or more complex builds can take a little longer, and
                  we'll map out a clear timeline together once we've
                  discussed your goals on a strategy call.
                </p>
              </div>

              {/* MAP */}
              <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
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
                  className="min-h-65 w-full flex-1"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="border-t border-border p-4">
                  <a
                    href="https://maps.app.goo.gl/qqJCMBc42c6YjcM37"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-sm transition-all hover:-translate-y-1 hover:shadow-md active:scale-95"
                  >
                    <Image
                      src="/google-maps.png"
                      alt=""
                      width={20}
                      height={20}
                      className="size-5"
                    />
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-secondary/40 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
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

            <div className="mx-auto mt-10 max-w-3xl">
              <FaqAccordion />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
