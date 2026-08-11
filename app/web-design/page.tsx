import {
  Compass,
  Smartphone,
  MousePointerClick,
  Palette,
  Gauge,
  ShieldCheck,
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
import { webDesignFaqs } from '@/lib/faqs'
import { graph, serviceSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Bespoke Web Design Services UK',
  description:
    'Bespoke web design built around your business rather than a template. High-converting websites designed to turn visitors into booked clients.',
  path: '/web-design',
})

const principles = [
  {
    icon: Compass,
    title: 'Designed Around Intent',
    description:
      'Before anything is drawn, we work out who is landing on the page, what they are worried about, and what would make them get in touch. The layout follows from that.',
    points: ['Audience-first structure', 'Objections answered early', 'One obvious next step'],
  },
  {
    icon: MousePointerClick,
    title: 'Conversion-Focused Layout',
    description:
      'Every section earns its place. Trust signals sit where doubt appears, and calls to action repeat at the points where someone is actually ready to act.',
    points: ['Clear calls to action', 'Social proof in the right places', 'No dead-end pages'],
  },
  {
    icon: Smartphone,
    title: 'Mobile-First, Genuinely',
    description:
      'Most of your visitors arrive on a phone, so that is where the design starts - not a desktop layout squeezed down afterwards and hoped for the best.',
    points: ['Designed for thumbs', 'Fast on mobile data', 'Forms that are easy to complete'],
  },
  {
    icon: Palette,
    title: 'Brand That Looks Like You',
    description:
      'Typography, colour and imagery chosen to match the level you actually operate at. Looking credible is not vanity when your price is higher than the competition.',
    points: ['Consistent visual identity', 'Considered typography', 'Real imagery over stock'],
  },
  {
    icon: Gauge,
    title: 'Built to Load Fast',
    description:
      'A beautiful site nobody waits for is a slow site. Performance is designed in from the start, because speed affects both rankings and how many people stay.',
    points: ['Optimised assets', 'Clean, lightweight build', 'Core Web Vitals in mind'],
  },
  {
    icon: ShieldCheck,
    title: 'Solid SEO Foundations',
    description:
      'Proper heading structure, clean URLs, fast hosting, SSL and sensible metadata. None of it is glamorous, and all of it decides whether Google can read your site.',
    points: ['Structured, crawlable markup', 'Analytics connected', 'Secure hosting & SSL'],
  },
]

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover & Strategise',
    description:
      'We learn your business, your customers and what a good enquiry actually looks like for you - then plan a site around winning more of them.',
  },
  {
    number: '02',
    icon: PencilRuler,
    title: 'Design & Build',
    description:
      'You see the design before it is built, and the build before it is live. Feedback is expected at both points, not treated as an inconvenience.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Improve',
    description:
      'We handle launch, hosting and the technical setup, then keep improving based on what real visitors do rather than what we assumed they would.',
  },
]

export default function WebDesignPage() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <ServiceHero
          eyebrow="Bespoke Web Design"
          title="Bespoke Web Design That's Built to Convert,"
          titleHighlight="Not Just to Look Good"
          description="Plenty of agencies can make your business look smart. The harder part is making a website that turns a stranger into a booked enquiry. Every site we design starts from that job and works backwards."
          breadcrumbs={[
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Bespoke Web Design', path: '/web-design' },
          ]}
          secondaryCta={{ label: 'See our work', href: '/portfolio' }}
          image={{
            src: '/bespoke-web-design.png',
            alt: 'Browser window showing a website layout being designed, with an image block selected on the canvas',
            width: 360,
            height: 459,
          }}
        />

        <ServiceSplit
          eyebrow="Bespoke vs Template"
          heading="Why We Don't Start From a Template"
          body={[
            'Templates are built to look good for everyone, which means they are designed for nobody in particular. They can carry a brand reasonably well. What they cannot do is reflect how your business earns trust, because whoever built it had never heard of you.',
            'Bespoke website design means the structure, the order of the sections and the wording are decided by your customers and your sales process. If most of your enquiries hinge on one objection, that objection gets answered above the fold instead of on a page nobody visits.',
            'It is not about being precious over pixels. It is that the parts of a website which drive conversion - hierarchy, proof, clarity, the path to contacting you - are exactly the parts a generic theme gets wrong.',
          ]}
          aside={{
            title: 'What a bespoke build gives you',
            items: [
              'A layout shaped by your customers, not a demo site',
              'Copy that sounds like your business',
              'Only the features you need, so nothing slows it down',
              'Room to grow without fighting a theme',
              'A site your competitors cannot buy a copy of',
            ],
          }}
        />

        <ServiceFeatureGrid
          eyebrow="How We Design"
          heading="What Goes Into a High-Converting Website"
          intro="The visual design is the part people notice. These are the decisions underneath it that determine whether the site actually performs."
          items={principles}
          tone="muted"
        />

        <ServiceSteps
          heading="The Website Design Process"
          intro="Three clear stages, with you involved at the points where your input genuinely changes the outcome."
          steps={steps}
          tone="default"
        />

        <ServiceProof
          heading="Recent Website Design Projects"
          intro="Live sites built for UK service businesses - tutoring, property, recruitment, fitness and more."
          tone="muted"
        />

        <ServiceSplit
          eyebrow="Beyond the Website"
          heading="When Design Alone Isn't the Answer"
          body={[
            'Sometimes a business does not need a better-looking website - it needs the website to do more. Take bookings, qualify leads, give clients a login, talk to the CRM, handle quoting.',
            'That is where design work meets development work. We build both, so nobody has to tell you that the thing you need is out of scope.',
          ]}
          link={{
            label: 'Explore custom web development',
            href: '/web-development',
          }}
          aside={{
            title: 'Where projects often go next',
            items: [
              'Custom booking and enquiry systems',
              'Client portals and dashboards',
              'Ecommerce and online ordering',
              'Automated follow-up so leads stop going cold',
            ],
          }}
        />

        <FaqSection
          faqs={webDesignFaqs}
          intro="Common questions about bespoke web design."
        />

        <ServiceCta
          heading="Ready for a website that pulls its weight?"
          body="Tell us about your business and what you want the site to do. We'll give you a straight answer on what it needs, what it doesn't, and what that looks like in practice."
          buttonLabel="Get a Free Quote"
          related={[
            { label: 'Web Development', href: '/web-development' },
            { label: 'Ecommerce Web Design', href: '/ecommerce-web-design' },
            { label: 'Web Design in London', href: '/web-design-london' },
          ]}
        />
      </main>

      <SiteFooter />

      <JsonLd
        data={graph(
          serviceSchema({
            name: 'Bespoke Web Design',
            description:
              'Bespoke web design and website design services for UK businesses - conversion-focused, mobile-first websites designed around your customers.',
            path: '/web-design',
            serviceType: 'Web Design',
          }),
        )}
      />
    </>
  )
}
