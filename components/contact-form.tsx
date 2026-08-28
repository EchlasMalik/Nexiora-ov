'use client'

import { useEffect, useRef, useState } from 'react'
import { Select } from '@base-ui/react/select'
import { ArrowRight, Check, CheckCircle2, ChevronDown } from 'lucide-react'
import { CALENDLY_URL } from '@/lib/site-config'

const services = [
  'New Website',
  'Redesign',
  'Automation and CRM',
  'SEO and Content',
  'Paid Ads',
  'Other',
]

const hearAboutOptions = [
  'Google Search',
  'Social Media',
  'Referral / Word of Mouth',
  'LinkedIn',
  'Other',
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const successRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (submitted) successRef.current?.focus()
  }, [submitted])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const email = (formData.get('email') as string)?.trim()
    const phone = (formData.get('phone') as string)?.trim()

    if (!email && !phone) {
      setError('Please provide at least an email or a phone number.')
      return
    }

    setError(null)
    setLoading(true)

    const data = {
      ...Object.fromEntries(formData.entries()),
      services: formData.getAll('services'),
    }

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
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      // Focused and announced on mount - the form is replaced entirely, so
      // without this a screen reader user gets no feedback that it worked.
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="flex h-full flex-col items-center justify-center py-12 text-center outline-none"
      >
        <CheckCircle2 className="size-14 text-primary" aria-hidden="true" />

        <h3 className="mt-5 font-heading text-2xl font-bold text-foreground">
          You’re all set!
        </h3>

        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out. We’ve received your enquiry and will come
          back to you within 24 hours with your free mockup.
        </p>

        <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground">
          Want to talk it through first? Grab a free consultation and we’ll
          walk through your mockup together.
        </p>

        {/* Calendly is the primary next step here rather than on the button
            that opened this form - the enquiry is already captured, so booking
            is a bonus rather than a hurdle in front of the lead. */}
        <div className="mt-6 flex w-full max-w-xs flex-col gap-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            Book a Free Consultation
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>

          <a
            href="https://wa.me/447835385699?text=Hi%20Nexiora%20Studio,%20I%20just%20submitted%20your%20website%20form%20and%20would%20love%20to%20chat%20about%20my%20project."
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
    <form
      onSubmit={handleSubmit}
      className="mt-4 flex flex-1 flex-col justify-between gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Your Name" name="name" placeholder="Jane Doe" required />

        <Field
          label="Business Name"
          name="business"
          placeholder="Your Business"
          required
        />

        <Field
          label="Website (optional)"
          name="website"
          type="url"
          placeholder="https://"
        />
      </div>

      <div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="jane@business.com"
            describedBy="contact-method-hint"
            invalid={Boolean(error)}
          />

          <Field
            label="Phone"
            name="phone"
            type="tel"
            placeholder="+44 7123 456789"
            describedBy="contact-method-hint"
            invalid={Boolean(error)}
          />
        </div>
        <p id="contact-method-hint" className="mt-1.5 text-xs text-muted-foreground">
          * Email or phone required (at least one)
        </p>
      </div>

      <fieldset className="min-w-0 border-0 p-0">
        <legend className="mb-1.5 block text-sm font-medium text-foreground">
          Services You Are Interested In
        </legend>
        <div className="grid gap-x-4 gap-y-2 sm:grid-cols-3">
          {services.map((service) => (
            <CheckboxOption key={service} label={service} />
          ))}
        </div>
      </fieldset>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Tell Us About Your Project
        </label>

        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="What are your goals? What challenges are you facing?"
          className="w-full rounded-xl border border-border bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/40"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Field
          label="Budget Range (optional)"
          name="budget"
          placeholder="e.g., £500 - £5,000"
        />

        <SelectField
          label="Preferred Contact Method"
          name="contactMethod"
          defaultValue="Email"
          options={['Email', 'Phone Call', 'WhatsApp']}
        />

        <SelectField
          label="How Did You Hear About Us?"
          name="hearAbout"
          placeholder="Select"
          options={hearAboutOptions}
        />
      </div>

      <div aria-live="assertive" aria-atomic="true">
        {error && (
          <p
            role="alert"
            className="rounded-lg bg-destructive/10 px-3.5 py-2.5 text-sm text-destructive"
          >
            {error}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        aria-busy={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all hover:-translate-y-1 hover:shadow-md active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {loading ? 'Sending...' : 'Submit Request'}
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
  describedBy,
  invalid,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
  describedBy?: string
  invalid?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 flex items-end text-sm font-medium text-foreground sm:min-h-10"
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
        aria-describedby={describedBy}
        aria-invalid={invalid || undefined}
        className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/40"
      />
    </div>
  )
}

function SelectField({
  label,
  name,
  defaultValue,
  placeholder,
  options,
}: {
  label: string
  name: string
  defaultValue?: string
  placeholder?: string
  options: string[]
}) {
  return (
    <div>
      {/* htmlFor cannot label a <button>, which is what Select.Trigger renders -
          the trigger is named via aria-labelledby instead. */}
      <span
        id={`${name}-label`}
        className="mb-1.5 flex items-end text-sm font-medium text-foreground sm:min-h-10"
      >
        {label}
      </span>

      <Select.Root name={name} defaultValue={defaultValue ?? null}>
        <Select.Trigger
          id={name}
          aria-labelledby={`${name}-label ${name}`}
          className="group flex h-11 w-full items-center justify-between rounded-xl border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/40 data-popup-open:border-primary"
        >
          <Select.Value placeholder={placeholder ?? 'Select'} />
          <Select.Icon className="text-muted-foreground">
            <ChevronDown className="size-4 transition-transform duration-200 group-data-popup-open:rotate-180" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Positioner sideOffset={6} className="z-100 outline-none">
            <Select.Popup className="modal-pop max-h-64 min-w-40 overflow-y-auto rounded-2xl border border-border bg-card p-1.5 shadow-lg outline-none">
              <Select.List>
                {options.map((option) => (
                  <Select.Item
                    key={option}
                    value={option}
                    className="cursor-pointer rounded-lg px-3 py-2 text-sm text-foreground outline-none data-highlighted:bg-primary/10 data-highlighted:text-primary"
                  >
                    <Select.ItemText>{option}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.List>
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}

function CheckboxOption({ label }: { label: string }) {
  return (
    <label className="group flex cursor-pointer items-center gap-2.5 rounded-xl border border-border bg-background px-3.5 py-3 text-sm text-foreground transition-colors has-checked:border-primary has-checked:bg-primary/5">
      <input
        type="checkbox"
        name="services"
        value={label}
        className="peer sr-only"
      />
      <span className="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-border bg-background transition-colors peer-checked:border-primary peer-checked:bg-primary">
        <Check className="size-3 text-primary-foreground opacity-0 transition-opacity peer-checked:opacity-100" />
      </span>
      {label}
    </label>
  )
}
