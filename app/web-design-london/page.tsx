import Link from 'next/link'
import { Mail, MapPin, Phone, Building2, Users, Video } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ServiceHero } from '@/components/service/service-hero'
import { ServiceSplit } from '@/components/service/service-split'
import { ServiceFeatureGrid } from '@/components/service/service-feature-grid'
import { ServiceProof } from '@/components/service/service-proof'
import { ServiceCta } from '@/components/service/service-cta'
import { FaqSection } from '@/components/faq-section'
import { JsonLd } from '@/components/json-ld'
import { londonFaqs } from '@/lib/faqs'
import { featuredProjects } from '@/lib/projects'
import { graph, localBusinessSchema, serviceSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { NAP } from '@/lib/site-config'

export const metadata = buildMetadata({
  title: 'Web Design London',
  description:
    'A London web design and development agency building bespoke, high-converting websites and custom systems for businesses across the capital.',
  path: '/web-design-london',
})

const londonProjects = featuredProjects.filter((project) =>
  project.location.includes('London'),
)

const workingWithUs = [
  {
    icon: Video,
    title: 'Remote by Default, Local When It Helps',
    description:
      'Most London projects run over video calls and shared documents because it is faster for everyone. When a face-to-face session genuinely moves things along, we are in the city anyway.',
  },
  {
    icon: Building2,
    title: 'Built for Competitive Markets',
    description:
      'London customers compare. They will open four tabs before they enquire, so the site has to answer questions quickly and look like it belongs at your price point.',
  },
  {
    icon: Users,
    title: 'Local Search That Actually Lands',
    description:
      'A properly set up Google Business Profile, consistent contact details, genuinely useful location pages and a fast site. Local visibility is an accumulation of small correct things.',
  },
]

export default function WebDesignLondonPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <ServiceHero
          eyebrow="Web Design London"
          title="Web Design in London for Businesses That Want"
          titleHighlight="More Than a Brochure Site"
          description="We're a London-based web design and development studio. Most of our clients are London businesses - tutoring, recruitment, property, fitness - and most came to us because their old site looked fine and generated nothing."
          breadcrumbs={[
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Web Design London', path: '/web-design-london' },
          ]}
          secondaryCta={{ label: 'See London projects', href: '/portfolio' }}
        />

        <ServiceSplit
          eyebrow="Working With Us"
          heading="A London Studio, Not a London Address"
          body={[
            'Plenty of agencies list a London postcode they have never worked from. We are genuinely based here, and the majority of the sites in our portfolio were built for businesses across the capital.',
            'In practice that matters less than people expect. Projects run over video calls, shared documents and quick messages, because that is what fits around a working week. Being local is useful when a conversation is easier in person - it is not something we charge a premium for.',
            'What does matter is understanding the market. London customers have more options and less patience. A site that would convert comfortably elsewhere often has to work harder here.',
          ]}
          aside={{
            title: 'Where our London clients come from',
            items: [
              'Tutoring and education',
              'Recruitment and staffing',
              'Property renovation and maintenance',
              'Fitness and coaching',
              'Professional services and consultancies',
            ],
          }}
        />

        <ServiceFeatureGrid
          eyebrow="What's Different"
          heading="How We Work With London Businesses"
          items={workingWithUs}
          columns={3}
          tone="muted"
        />

        <ServiceProof
          eyebrow="London Work"
          heading="Websites We've Built for London Businesses"
          intro="Every one of these is live, and every one was built from scratch for a specific business in the capital."
          projects={londonProjects}
        />

        <ServiceSplit
          eyebrow="Beyond London"
          heading="We Work Across the UK Too"
          reverse
          body={[
            'London is where we are based, not a boundary. We work with businesses across the UK and further afield, and the process is identical - the only thing that changes is how often anyone suggests meeting for coffee.',
            'If you are outside London and wondering whether that makes things harder: it does not. Most of our clients, London or otherwise, have never needed an in-person meeting.',
          ]}
          points={[
            'Same process wherever you are based',
            'Video calls, shared docs and clear written updates',
            'UK-based, so timezones and invoicing stay simple',
          ]}
          link={{ label: 'Explore bespoke web design', href: '/web-design' }}
        />

        {/* LOCAL CONTACT DETAILS */}
        <section className="bg-background py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                Talk to a London Web Designer
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                No call centre, no account manager relaying messages. You speak
                to the people building the thing.
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="size-4" />
                  </span>
                  <span className="text-foreground">
                    {NAP.locality}, {NAP.countryName}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="size-4" />
                  </span>
                  <a
                    href={`mailto:${NAP.email}`}
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    {NAP.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="size-4" />
                  </span>
                  <a
                    href={NAP.phoneHref}
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    {NAP.phone}
                  </a>
                </li>
              </ul>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center justify-center rounded-full border border-primary/30 bg-card px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                Visit the contact page
              </Link>
            </div>
          </div>
        </section>

        <FaqSection
          faqs={londonFaqs}
          intro="Common questions from London businesses."
        />

        <ServiceCta
          heading="Based in London and need a website that performs?"
          body="Tell us what your business does and what the current site isn't doing. We'll come back with a straight answer on what would actually move the numbers."
          buttonLabel="Get a Free Quote"
          related={[
            { label: 'Bespoke Web Design', href: '/web-design' },
            { label: 'Web Development', href: '/web-development' },
            { label: 'Custom Software', href: '/custom-software' },
          ]}
        />
      </main>

      <SiteFooter />

      <JsonLd
        data={graph(
          localBusinessSchema(),
          serviceSchema({
            name: 'Web Design London',
            description:
              'Web design and development for London businesses - bespoke, high-converting websites, custom systems and local search visibility.',
            path: '/web-design-london',
            serviceType: 'Web Design',
            areaServed: ['London'],
          }),
        )}
      />
    </>
  )
}
