'use client'

import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  CheckCircle2,
  Star,
  MessageSquare,
  Mail,
  Clock,
  Users,
  TrendingUp,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type Card = {
  icon: LucideIcon
  title: string
  description: string
}

type Tab = {
  id: string
  label: string
  description: string
  cards: Card[]
  columns: string
}

const tabs: Tab[] = [
  {
    id: 'systems',
    label: 'Systems We Build',
    description:
      'The extra systems we put in place to help your business run more smoothly.',
    columns: 'md:grid-cols-2',
    cards: [
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
          'We set up automated review flows that engage customers at the right moment - while the experience is still fresh, helping you generate more Google reviews and manage feedback privately.',
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
    ],
  },
  {
    id: 'impact',
    label: 'Real Impact',
    description: 'What changes after your system goes live.',
    columns: 'md:grid-cols-3',
    cards: [
      {
        icon: Clock,
        title: 'A Lighter Day-to-Day Workflow',
        description:
          'All enquiries are organised in one place with clear next steps - no more scattered messages across texts, emails, and DMs.',
      },
      {
        icon: Users,
        title: 'Better-Prepared Clients',
        description:
          'Most leads already understand your services and process before speaking to you, leading to smoother conversations and faster decisions.',
      },
      {
        icon: TrendingUp,
        title: 'Stronger Return on Marketing',
        description:
          'Every click from Google or ads lands on a system designed to convert, making your marketing spend significantly more effective.',
      },
    ],
  },
]

export function ProcessExplorer() {
  const [activeId, setActiveId] = useState(tabs[0].id)
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0]

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveId(tab.id)}
            // Active state was conveyed by colour alone.
            aria-pressed={tab.id === activeId}
            className={cn(
              'rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200',
              tab.id === activeId
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'border border-border bg-card text-foreground hover:border-primary/30 hover:text-primary',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
        {active.description}
      </p>

      <div className={cn('mt-10 grid gap-6', active.columns)}>
        {active.cards.map((card, i) => (
          <div
            key={`${active.id}-${card.title}`}
            style={{ animationDelay: `${i * 90}ms` }}
            className="animate-fade-in-up group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
          >
            <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-110">
              <card.icon className="size-5" />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-foreground">
              {card.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {card.description}
            </p>

            <div className="mt-5 h-px w-0 bg-primary/40 transition-all duration-200 group-hover:w-full" />
          </div>
        ))}
      </div>
    </div>
  )
}
