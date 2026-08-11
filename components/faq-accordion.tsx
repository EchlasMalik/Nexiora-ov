'use client'

import { Accordion } from '@base-ui/react/accordion'
import { ChevronDown } from 'lucide-react'
import { generalFaqs, type Faq } from '@/lib/faqs'

export function FaqAccordion({ faqs = generalFaqs }: { faqs?: Faq[] }) {
  return (
    <Accordion.Root multiple keepMounted className="space-y-4">
      {faqs.map((faq, i) => (
        <Accordion.Item
          key={faq.question}
          value={String(i)}
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-200 hover:shadow-md"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
              <span className="text-lg font-semibold text-foreground">
                {faq.question}
              </span>
              <ChevronDown className="size-5 shrink-0 text-primary transition-transform duration-200 group-data-[open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden px-6 text-sm leading-relaxed text-muted-foreground transition-[height] duration-200 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
            <p className="pb-5">{faq.answer}</p>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
