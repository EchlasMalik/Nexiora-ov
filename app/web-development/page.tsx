import {
  Boxes,
  Cable,
  Database,
  Gauge,
  LayoutDashboard,
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
import { ServiceProof } from '@/components/service/service-proof'
import { ServiceCta } from '@/components/service/service-cta'
import { FaqSection } from '@/components/faq-section'
import { JsonLd } from '@/components/json-ld'
import { webDevelopmentFaqs } from '@/lib/faqs'
import { graph, serviceSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Web Development Agency | Custom Web Development',
  description:
    'A UK web development agency building custom functionality, web applications, dashboards and integrations - for businesses that have outgrown a brochure website.',
  path: '/web-development',
})

const capabilities = [
  {
    icon: Boxes,
    title: 'Web Applications',
    description:
      'Software that happens to live in a browser. Logins, user accounts, permissions, and workflows your customers or staff use every day rather than read once.',
    points: ['User accounts & permissions', 'Multi-step workflows', 'Secure by default'],
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboards & Client Portals',
    description:
      'A single place to see what is happening, and a place for clients to log in, check progress and find documents without emailing you for them.',
    points: ['Live reporting views', 'Client self-service', 'Role-based access'],
  },
  {
    icon: Cable,
    title: 'APIs & Integrations',
    description:
      'Connecting the tools you already pay for so information moves by itself - your CRM, payment provider, booking platform and accounting software talking to each other.',
    points: ['Third-party integrations', 'Custom API endpoints', 'Webhooks & sync jobs'],
  },
  {
    icon: Database,
    title: 'Databases & Data Modelling',
    description:
      'Getting the structure right early, so the system can answer questions you have not thought to ask yet without an expensive rebuild.',
    points: ['Sensible data structure', 'Search & filtering', 'Reporting-ready'],
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    description:
      'The repetitive steps between "enquiry" and "paid" handled automatically - follow-ups, reminders, routing, notifications and record-keeping.',
    points: ['Automated follow-up', 'Lead routing', 'Fewer manual handoffs'],
  },
  {
    icon: Gauge,
    title: 'Performance & Scale',
    description:
      'Speed treated as a feature rather than a final tidy-up. Sites and systems built so more traffic, more products or more users does not mean starting again.',
    points: ['Core Web Vitals focus', 'Efficient queries & caching', 'Room to grow'],
  },
]

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Scope & Technical Plan',
    description:
      'We map what the system actually needs to do, where the edge cases hide, and what it should connect to. You get a clear plan before anyone writes code.',
  },
  {
    number: '02',
    icon: PencilRuler,
    title: 'Build & Review',
    description:
      'We build in visible stages so you can use the thing as it takes shape, rather than waiting months to find out it works differently to how you pictured it.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Support',
    description:
      'Testing, migration and launch, then ongoing support as your business changes. Software is never finished - it just needs to keep pace with you.',
  },
]

export default function WebDevelopmentPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <ServiceHero
          eyebrow="Web Development"
          title="Web Development That Builds Systems,"
          titleHighlight="Not Just Pages"
          description="Some businesses need a website. Others need the website to actually do something - take bookings, run quotes, sync with a CRM, give clients a login. That is where custom web development starts, and it is the work we enjoy most."
          breadcrumbs={[
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Web Development', path: '/web-development' },
          ]}
          secondaryCta={{ label: 'See our work', href: '/portfolio' }}
        />

        <ServiceSplit
          eyebrow="Where Development Begins"
          heading="When a Website Stops Being a Website"
          body={[
            'Most businesses start with a brochure site: a few pages explaining what you do, with a contact form at the end. That is the right first step, and for a while it is enough.',
            'Then the cracks appear. Someone is copying enquiries into a spreadsheet. Two systems disagree about the same customer. A process that made sense with ten clients quietly breaks at a hundred. The website is fine - it just is not doing any of the work.',
            'Custom web development is what closes that gap. Instead of adding another subscription and another login, we build the missing functionality directly into the thing your customers already use.',
          ]}
          aside={{
            title: 'Signs you have outgrown a brochure site',
            items: [
              'Your team retypes the same information into two places',
              'You are paying for plugins that almost do the job',
              'Customers ask for things your website cannot handle',
              'Reporting means exporting to a spreadsheet first',
              'Your process is a selling point, but the site hides it',
            ],
          }}
        />

        <ServiceFeatureGrid
          eyebrow="What We Build"
          heading="Custom Functionality, Built to Fit"
          intro="Every build is different, but most projects draw on the same set of capabilities. We use what the job needs and leave out what it does not."
          items={capabilities}
          tone="muted"
        />

        <ServiceSplit
          eyebrow="Proof"
          heading="A Real Platform, Not a Demo"
          reverse
          body={[
            'OmniControl is a live product we built end to end - a gaming utility platform with secure licensing, instant downloads, a user dashboard and performance analytics behind it.',
            'It is a useful example because none of that is website work in the traditional sense. It is account management, license validation, file delivery and reporting, wrapped in an interface that had to feel fast and trustworthy to a demanding audience.',
            'That same thinking applies whether we are building a SaaS product or a booking system for a service business: work out what the software genuinely has to do, then build exactly that.',
          ]}
          points={[
            'Secure licensing and account management',
            'Dashboard with live performance analytics',
            'Built for speed under real user load',
          ]}
          link={{ label: 'Explore custom software solutions', href: '/custom-software' }}
        />

        <ServiceSteps
          heading="How a Development Project Runs"
          intro="Clear stages, visible progress, and no long silences where you wonder what you have paid for."
          steps={steps}
          tone="muted"
        />

        <ServiceProof
          heading="Websites and Systems We've Built"
          intro="Live projects for real businesses - each one built from scratch rather than assembled from a template."
        />

        <FaqSection
          faqs={webDevelopmentFaqs}
          intro="Common questions about custom web development."
        />

        <ServiceCta
          heading="Got something that needs building properly?"
          body="Tell us what your business is trying to do and where it keeps getting stuck. If custom development is not the answer, we will say so - and point you at something cheaper that is."
          buttonLabel="Discuss Your Project"
          related={[
            { label: 'Bespoke Web Design', href: '/web-design' },
            { label: 'Custom Software', href: '/custom-software' },
            { label: 'Ecommerce Web Design', href: '/ecommerce-web-design' },
          ]}
        />
      </main>

      <SiteFooter />

      <JsonLd
        data={graph(
          serviceSchema({
            name: 'Custom Web Development',
            description:
              'Custom web development for UK businesses - web applications, dashboards, client portals, API integrations, databases and business automation.',
            path: '/web-development',
            serviceType: 'Web Development',
          }),
        )}
      />
    </>
  )
}
