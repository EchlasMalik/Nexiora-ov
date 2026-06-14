'use client'

import { useState } from 'react'
import { Clock, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react'

const highlights = [
  'A free, no-pressure design consultation',
  'A clear plan to turn visitors into inquiries',
  'A response from our team within 24 hours',
]

export function ContactCta() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-navy py-20 text-navy-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-gold">
              <Clock className="size-3.5" />
              Free Design Consultation
            </span>
            <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Ready to Make the Most of Your Online Presence?
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-navy-foreground/70">
              Tell us a bit about your business and we&apos;ll put together a
              free strategic plan. No cost, no obligation — just a clearer path
              to more inquiries.
            </p>

            <ul className="mt-8 space-y-3.5">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                  <span className="text-sm leading-relaxed text-navy-foreground/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-3 text-sm text-navy-foreground/80">
              <p className="flex items-center gap-2.5">
                <Mail className="size-4 text-primary" />
                echlas@nexioratalent.com
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="size-4 text-primary" />
                +44 7835 385 699
              </p>
              <p className="flex items-center gap-2.5">
                <MapPin className="size-4 text-primary" />
                London Based · Serving clients worldwide
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="size-14 text-gold" />
                <h3 className="mt-5 font-heading text-2xl font-bold">
                  Thank you!
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
                  Your free consultation request is in. Our team will get back
                  to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" name="name" placeholder="Jane Doe" required />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jane@business.com"
                    required
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone" name="phone" type="tel" placeholder="(555) 000-0000" />
                  <Field label="Business Name" name="business" placeholder="Your Business" />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-sm font-medium text-navy-foreground/85"
                  >
                    What do you need?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="h-11 w-full rounded-xl border border-white/15 bg-navy px-3.5 text-sm text-navy-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/40"
                    defaultValue="A new high-converting website"
                  >
                    <option>A new high-converting website</option>
                    <option>A single landing page</option>
                    <option>Marketing & automations</option>
                    <option>SEO & local search</option>
                    <option>Not sure yet — need advice</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-navy-foreground/85"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us a little about your goals..."
                    className="w-full rounded-xl border border-white/15 bg-navy px-3.5 py-3 text-sm text-navy-foreground outline-none transition-colors placeholder:text-navy-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/40"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5"
                >
                  Get My Free Consultation
                </button>
                <p className="text-center text-xs text-navy-foreground/55">
                  We respond within 24 hours. Your details stay private.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-navy-foreground/85"
      >
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-white/15 bg-navy px-3.5 text-sm text-navy-foreground outline-none transition-colors placeholder:text-navy-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/40"
      />
    </div>
  )
}
