'use client'

import { Accordion } from '@base-ui/react/accordion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How long will my website take to build?',
    answer:
      'Most projects are completed within 2-6 weeks depending on scope, content readiness, and any additional systems or integrations required.',
  },
  {
    question: 'Do you work with businesses outside London?',
    answer:
      "Absolutely. While we're based in London, we work with businesses across the UK and internationally through video calls, email, and online collaboration.",
  },
  {
    question: 'How does pricing work?',
    answer:
      "Pricing depends on the size of the project and the systems involved. After a quick consultation, we'll provide a clear proposal with no hidden costs.",
  },
  {
    question: 'What if I already have a website?',
    answer:
      "That's completely fine. We can improve, redesign, or rebuild your existing website while preserving what's already working and fixing what isn't.",
  },
]

export function FaqAccordion() {
  return (
    <Accordion.Root multiple keepMounted className="space-y-4">
      {faqs.map((faq) => (
        <Accordion.Item
          key={faq.question}
          value={faq.question}
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
              <span className="text-lg font-semibold text-foreground">
                {faq.question}
              </span>
              <ChevronDown className="size-5 shrink-0 text-primary transition-transform duration-300 group-data-[open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden px-6 text-sm leading-relaxed text-muted-foreground transition-[height] duration-300 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
            <p className="pb-5">{faq.answer}</p>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
