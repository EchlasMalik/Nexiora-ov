'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      form.reset()
      setSubmitted(true)
    } catch (error) {
      console.error(error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center py-12 text-center">
        <CheckCircle2 className="size-14 text-primary" />

        <h3 className="mt-5 font-heading text-2xl font-bold text-foreground">
          You're all set!
        </h3>

        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out. We've received your enquiry and will get
          back to you within 24 hours.
        </p>

        <div className="mt-8 flex w-full max-w-xs flex-col gap-3">
          <a
            href="https://wa.me/447835385699?text=Hi%20Nexiora%20Talent,%20I%20just%20submitted%20your%20website%20form%20and%20would%20love%20to%20chat%20about%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Chat on WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+44 7123 456789"
        />

        <Field
          label="Business Name"
          name="business"
          placeholder="Your Business"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          What do you need?
        </label>

        <select
          id="service"
          name="service"
          defaultValue="A new high-converting website"
          className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/40"
        >
          <option>A new high-converting website</option>
          <option>A single landing page</option>
          <option>Marketing & automations</option>
          <option>SEO & local search</option>
          <option>Not sure yet - need advice</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Project Details
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us a little about your goals..."
          className="w-full rounded-xl border border-border bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/40"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all hover:-translate-y-1 hover:shadow-md active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {loading ? 'Sending...' : 'Send Message'}
        {!loading && <ArrowRight className="size-4" />}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        We respond within 24 hours. Your details stay private.
      </p>
    </form>
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
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/40"
      />
    </div>
  )
}
