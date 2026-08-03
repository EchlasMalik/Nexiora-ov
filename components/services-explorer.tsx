'use client'

import { useEffect, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Code2,
  MapPin,
  MessageSquare,
  RefreshCw,
  Search,
  Server,
  ShieldCheck,
  Star,
  Target,
  Zap,
} from 'lucide-react'
import { ContactTrigger } from '@/components/contact-trigger'
import { cn } from '@/lib/utils'

type ServiceCard = {
  icon: LucideIcon
  title: string
  description: string
  points: string[]
  full?: boolean
}

type Category = {
  id: string
  label: string
  cards: ServiceCard[]
}

const categories: Category[] = [
  {
    id: 'web-design',
    label: 'Web Design',
    cards: [
      {
        icon: Target,
        title: 'Clear, Professional Layout',
        description:
          'Sites are built on a tested structure that keeps what you do, where you serve, strong trust elements and clear CTAs visible at the right times.',
        points: [
          'Turn visitors into booked calls',
          'Website becomes an asset with measurable ROI',
          'Strategic placement of trust signals and social proof',
        ],
      },
      {
        icon: Zap,
        title: 'Custom Plans for Your Goals',
        description:
          'Packages are tailored around your goals, ideal customer and budget. We help you choose the right balance of design, SEO and systems.',
        points: [
          'No cookie-cutter solutions',
          'Budget aligned with your priorities',
          'Scales with your business growth',
        ],
      },
      {
        icon: CheckCircle2,
        title: 'What Every Build Includes',
        description:
          'Every website project comes with a complete set of essentials so you are ready to go from day one.',
        points: [
          'Responsive design tested across phones, tablets, and desktops',
          'Privacy Policy and Terms of Service pages set up with your details',
          'Google Analytics (or GA4) connected so you can track traffic and leads',
          'Google review funnel wired into the site so happy clients can leave feedback easily',
          'Strong SEO and security foundation: fast hosting, SSL, clean structure, and best-practice on-page SEO',
        ],
        full: true,
      },
    ],
  },
  {
    id: 'automation',
    label: 'Automation and Software',
    cards: [
      {
        icon: Star,
        title: 'Smart Review Request Forms',
        description:
          'Automated review requests help generate more consistent reviews, which are vital for ranking and building trust.',
        points: [
          'More 5-star reviews without manual effort',
          'Address concerns before they become public',
          'Consistent review flow builds credibility',
        ],
      },
      {
        icon: MessageSquare,
        title: 'Automatic Lead Follow Up',
        description:
          'Quick automatic responses let leads know their request was received, keeping them engaged even when you are busy.',
        points: [
          'Quick responses even when you are busy or asleep',
          'Leads know their request was received',
          'Conversations keep moving in the background',
        ],
      },
      {
        icon: RefreshCw,
        title: 'Lead Reactivation Campaigns',
        description:
          'Old clients who have not booked in a while can be automatically contacted with friendly check-ins and simple incentives.',
        points: [
          'Turn a static contact list into repeat work',
          'Gentle reminders bring past clients back',
          'Small incentives drive quick rebooking',
        ],
      },
      {
        icon: Code2,
        title: 'Custom Software Solutions',
        description:
          'Beyond off-the-shelf tools, we build bespoke software, portals, and dashboards designed around exactly how your business operates.',
        points: [
          'Client portals and booking systems built to spec',
          'Dashboards that track what actually matters to you',
          'Scales as your business and processes grow',
        ],
      },
    ],
  },
  {
    id: 'advertising',
    label: 'SEO and Advertising',
    cards: [
      {
        icon: Search,
        title: 'SEO Ready Builds',
        description:
          'Every build includes strong on-site SEO fundamentals to give you the best realistic starting position for climbing the search results.',
        points: [
          'Proper meta tags, headings, and content structure',
          'Fast loading speeds for better rankings',
          'Clear recommendations for ongoing SEO growth',
        ],
      },
      {
        icon: MapPin,
        title: 'Google Business Profile Overhaul',
        description:
          'Align your website, Google listing, and ongoing updates so local SEO works as a complete system.',
        points: [
          'Move steadily up the local search results',
          'Consistent information across all platforms',
          'Better visibility in "near me" searches',
        ],
      },
      {
        icon: BarChart3,
        title: 'Smart Advertising Campaigns',
        description:
          'High-quality ad creatives and hooks designed to attract the right leads, not just clicks.',
        points: [
          'Traffic sent to focused landing pages',
          'Leads arrive pre-qualified',
          'Better ROI on your ad spend',
        ],
      },
      {
        icon: Target,
        title: 'Google and Meta Ads',
        description:
          'Ad setup and optimization on Google and Meta with a focus on high-quality local leads.',
        points: [
          'Targeting refined for your ideal customers',
          'Ongoing optimization for better results',
          'Clear reporting on performance',
        ],
      },
    ],
  },
  {
    id: 'hosting',
    label: 'Hosting and Support',
    cards: [
      {
        icon: ShieldCheck,
        title: 'Security and Reliability',
        description:
          'Secure, standard practices to protect your site from common attacks and keep everything running smoothly.',
        points: [
          'Regular backups and up-to-date backend tools',
          'SSL renewal and security monitoring',
          'Minimize risk of downtime or hacking',
        ],
      },
      {
        icon: Server,
        title: 'Hosting and Maintenance',
        description:
          'Plans ranging from base-level hosting to higher-tier maintenance packages with banked hours for edits.',
        points: [
          'Stress-free way to make tweaks as you live with your site',
          'Regular updates keep everything current',
          'Direct support when you need changes made',
        ],
      },
    ],
  },
]

export function ServicesExplorer() {
  const [activeId, setActiveId] = useState(categories[0].id)

  useEffect(() => {
    function syncFromHash() {
      const hash = window.location.hash.replace('#', '')
      if (categories.some((category) => category.id === hash)) {
        setActiveId(hash)
      }
    }

    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [])

  const active = categories.find((c) => c.id === activeId) ?? categories[0]

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            id={category.id}
            type="button"
            onClick={() => setActiveId(category.id)}
            className={cn(
              'scroll-mt-24 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200',
              category.id === activeId
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'border border-border bg-card text-foreground hover:border-primary/30 hover:text-primary',
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div
        key={active.id}
        className="animate-fade-in-up mt-10 grid gap-6 md:grid-cols-2"
      >
        {active.cards.map((card) => (
          <div
            key={card.title}
            className={cn(
              'rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md',
              card.full && 'md:col-span-2',
            )}
          >
            <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <card.icon className="size-5" />
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              {card.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {card.description}
            </p>

            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {card.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-green-500" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <ContactTrigger className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all hover:-translate-y-1 hover:shadow-md active:scale-95">
          Start My Project
          <ArrowRight className="size-4" />
        </ContactTrigger>
      </div>
    </div>
  )
}
