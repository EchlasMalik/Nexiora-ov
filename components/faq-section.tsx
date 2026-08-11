import { FaqAccordion } from '@/components/faq-accordion'
import { JsonLd } from '@/components/json-ld'
import type { Faq } from '@/lib/faqs'
import { faqSchema, graph } from '@/lib/schema'

/**
 * FAQ section with matching FAQPage schema.
 *
 * The accordion renders with `keepMounted`, so every answer is present in the
 * server-rendered HTML - which is what keeps the schema an honest reflection of
 * visible content.
 */
export function FaqSection({
  eyebrow = 'Common Questions',
  heading = 'Frequently Asked Questions',
  intro,
  faqs,
  emitSchema = true,
  tone = 'muted',
}: {
  eyebrow?: string
  heading?: string
  intro?: string
  faqs: Faq[]
  emitSchema?: boolean
  tone?: 'default' | 'muted'
}) {
  return (
    <section
      className={`${tone === 'muted' ? 'bg-secondary/40' : 'bg-background'} py-16 md:py-20`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            {heading}
          </h2>

          {intro ? <p className="mt-3 text-muted-foreground">{intro}</p> : null}
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </div>
      </div>

      {emitSchema ? <JsonLd data={graph(faqSchema(faqs))} /> : null}
    </section>
  )
}
