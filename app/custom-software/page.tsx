import {
  Bot,
  CalendarCheck,
  ClipboardList,
  LayoutDashboard,
  Users,
  Workflow,
  Search,
  PencilRuler,
  Rocket,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ServiceHero } from '@/components/service/service-hero'
import { ServiceSplit } from '@/components/service/service-split'
import { ServiceFeatureGrid } from '@/components/service/service-feature-grid'
import { ServiceSteps } from '@/components/service/service-steps'
import { ServiceCta } from '@/components/service/service-cta'
import { FaqSection } from '@/components/faq-section'
import { JsonLd } from '@/components/json-ld'
import { customSoftwareFaqs } from '@/lib/faqs'
import { graph, serviceSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Custom Software Development UK',
  description:
    'Bespoke software development built around how your business actually runs - internal tools, client portals, dashboards, booking systems and automation.',
  path: '/custom-software',
})

const builds = [
  {
    icon: ClipboardList,
    title: 'Internal Tools',
    description:
      'The jobs currently held together by a shared spreadsheet and someone remembering to update it. Quoting, job tracking, stock, scheduling - built to match your process exactly.',
    points: ['Replaces fragile spreadsheets', 'Built to your workflow', 'Everyone sees the same data'],
  },
  {
    icon: Users,
    title: 'Client Portals',
    description:
      'A place for clients to log in, see progress, approve work and download what they need - instead of emailing you to ask where things are.',
    points: ['Secure client logins', 'Document sharing', 'Fewer status-update emails'],
  },
  {
    icon: CalendarCheck,
    title: 'Booking & Scheduling',
    description:
      'Booking systems that understand your actual availability, travel time, staff and services - not a generic calendar that double-books you twice a month.',
    points: ['Real availability rules', 'Automated reminders', 'Fewer no-shows'],
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboards & Reporting',
    description:
      'Your numbers pulled into one view, updating on their own. Enquiries, jobs, revenue and sources, without exporting anything to a spreadsheet first.',
    points: ['Live business metrics', 'Multiple sources in one view', 'Decisions on current data'],
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description:
      'The admin between enquiry and payment handled automatically - follow-ups, reminders, routing, review requests and record-keeping that never gets forgotten.',
    points: ['Automated follow-up', 'Review requests that go out', 'Nothing slips through'],
  },
  {
    icon: Bot,
    title: 'AI-Powered Systems',
    description:
      'AI applied where it saves genuine time: answering repeat questions, qualifying enquiries, summarising information and drafting routine replies for approval.',
    points: ['24/7 first-line responses', 'Lead qualification', 'Less repetitive admin'],
  },
]

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Map the Process',
    description:
      'We sit with how the job is done today, including the workarounds. The expensive part of custom software is usually building the wrong thing accurately.',
  },
  {
    number: '02',
    icon: PencilRuler,
    title: 'Build in Phases',
    description:
      'We start with the piece that removes the most manual work, get it into your hands, then extend. You see value long before the full system is finished.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Roll Out & Refine',
    description:
      'Training, migration and support while your team settles in. Then we adjust based on how it is genuinely used, not how we expected it to be used.',
  },
]

export default function CustomSoftwarePage() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <ServiceHero
          eyebrow="Custom Software"
          title="Custom Software Built Around How Your"
          titleHighlight="Business Actually Runs"
          description="Most businesses do not have a software problem. They have five tools that almost fit, and a person quietly gluing them together. Bespoke software replaces that glue with something built for the way you already work."
          breadcrumbs={[
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Custom Software', path: '/custom-software' },
          ]}
          secondaryCta={{ label: 'Read: Custom vs off-the-shelf', href: '/blog/custom-software-vs-off-the-shelf-software' }}
          image={{
            src: '/custom-software.png',
            alt: 'Browser window showing a business dashboard with a growth chart and summary figures for users, revenue and orders',
            width: 1224,
            height: 1285,
          }}
        />

        <ServiceSplit
          eyebrow="Build vs Buy"
          heading="When Off-the-Shelf Stops Being the Cheaper Option"
          body={[
            'Off-the-shelf software is almost always the right place to start. It is quick, it is cheap, and someone else maintains it. We will happily tell you to keep using it.',
            'The problem is what happens at the edges. You end up paying per seat for features nobody touches, exporting data so two systems agree, and shaping your process around what the tool allows. None of that shows up as a line on an invoice, which is exactly why it goes unnoticed for years.',
            'Custom software makes sense when the workaround has become the job. If a task takes ten hours a week and could take one, the payback period is something you can actually calculate.',
          ]}
          aside={{
            title: 'Worth costing out honestly',
            items: [
              'Hours per week spent on manual admin',
              'Per-seat licences that grow as you hire',
              'Mistakes caused by data living in two places',
              'Work you turn down because the process cannot scale',
              'Features you pay for and have never opened',
            ],
          }}
        />

        <ServiceFeatureGrid
          eyebrow="What We Build"
          heading="Software That Removes Work, Not Adds It"
          intro="Most projects start with one painful process rather than a grand plan to replace everything. These are the areas we are asked for most."
          items={builds}
          tone="muted"
        />

        <ServiceSplit
          eyebrow="The Progression"
          heading="Website, Web App, Software, Automation"
          reverse
          body={[
            'These are not four separate services so much as four points on the same line. A business usually starts with a website, then needs it to do something, then needs the thing it does to talk to everything else, then wants the routine parts handled without anyone watching.',
            'Because we build across all four, the decision about where you sit on that line stays a business decision rather than a limitation of whoever you hired. Nothing has to be rebuilt from scratch just because you outgrew the last stage.',
          ]}
          points={[
            'A website that earns trust and generates enquiries',
            'A web application that handles real work',
            'Custom software shaped around your operation',
            'Automation and AI that keep it all moving',
          ]}
          link={{ label: 'See our web development services', href: '/web-development' }}
        />

        <ServiceSteps
          heading="How a Software Project Runs"
          intro="Phased, visible and reversible - so you are never betting the business on a single delivery date."
          steps={steps}
          tone="muted"
        />

        <FaqSection
          faqs={customSoftwareFaqs}
          intro="Common questions about bespoke software development."
        />

        <ServiceCta
          heading="What's the job you keep doing manually?"
          body="Tell us the process that eats your week. We'll tell you honestly whether it is worth automating, whether an existing tool already solves it, or whether custom software would pay for itself."
          buttonLabel="Book a Free Consultation"
          related={[
            { label: 'Web Development', href: '/web-development' },
            { label: 'Bespoke Web Design', href: '/web-design' },
            { label: 'All Services', href: '/services' },
          ]}
        />
      </main>

      <SiteFooter />

      <JsonLd
        data={graph(
          serviceSchema({
            name: 'Custom Software Development',
            description:
              'Bespoke software development for UK businesses - internal tools, client portals, booking systems, dashboards, process automation and AI-powered systems.',
            path: '/custom-software',
            serviceType: 'Custom Software Development',
          }),
        )}
      />
    </>
  )
}
