import {
  Bot,
  Braces,
  FileText,
  Gauge,
  Layers,
  Network,
  Search,
  Sparkles,
  BarChart3,
  Compass,
  Wrench,
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
import { aiSeoFaqs } from '@/lib/faqs'
import { graph, serviceSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'AI SEO Agency London | AI Search & GEO',
  description:
    'AI SEO and Generative Engine Optimisation for London businesses. Technical SEO, structured data and content built to stay visible across Google and AI-powered search.',
  path: '/ai-seo-agency-london',
})

const services = [
  {
    icon: Gauge,
    title: 'Technical SEO',
    description:
      'Crawlability, indexability, site architecture and performance. Every system that might recommend you has to be able to read your site first.',
    points: [
      'Site architecture and internal structure',
      'Speed and Core Web Vitals',
      'Indexation and crawl issues resolved',
    ],
  },
  {
    icon: Bot,
    title: 'AI Search Optimisation',
    description:
      'Structuring pages so AI-powered search experiences can locate a clear answer rather than having to infer one from marketing copy.',
    points: [
      'Direct answers to real customer questions',
      'Sections that stand on their own',
      'Consistent facts across the site',
    ],
  },
  {
    icon: Sparkles,
    title: 'Generative Engine Optimisation',
    description:
      'Building the content depth and authority signals that help generative systems understand what your business does and who it does it for.',
    points: [
      'Evidence-backed, specific content',
      'Clear service and audience definitions',
      'Signals that support credibility',
    ],
  },
  {
    icon: Network,
    title: 'Entity Optimisation',
    description:
      'Making the relationships between your business, services, people and locations explicit, so systems are not left guessing which company you are.',
    points: [
      'Consistent business identity signals',
      'Service and location relationships',
      'Disambiguation from similar names',
    ],
  },
  {
    icon: Braces,
    title: 'Structured Data',
    description:
      'Schema.org markup that states the important facts in a machine-readable form instead of leaving them buried in page copy.',
    points: [
      'Organisation and service markup',
      'FAQ and breadcrumb markup where genuinely applicable',
      'Validated against current guidelines',
    ],
  },
  {
    icon: Layers,
    title: 'Topical Authority',
    description:
      'Depth across the subjects you want to be known for, so the site reads as a source on a topic rather than a single page chasing a term.',
    points: [
      'Content clusters around core services',
      'Internal linking that shows structure',
      'Coverage of the questions buyers actually ask',
    ],
  },
  {
    icon: FileText,
    title: 'Content Optimisation',
    description:
      'Writing and reshaping content for people first, while keeping it semantically clear enough that a machine can follow the argument.',
    points: [
      'Clear headings and logical hierarchy',
      'Plain answers before elaboration',
      'Specifics in place of filler',
    ],
  },
  {
    icon: Search,
    title: 'Search Visibility Reporting',
    description:
      'Tracking organic performance alongside how your brand is represented when we query AI systems directly - and being honest about which is measurable.',
    points: [
      'Organic visibility and rankings',
      'Technical health monitoring',
      'Directional AI visibility checks',
    ],
  },
]

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Audit',
    description:
      'Technical health, current rankings, content, structured data, entity signals and what competitors are doing. We start from evidence rather than assumptions.',
  },
  {
    number: '02',
    icon: Compass,
    title: 'Strategy',
    description:
      'Keyword and intent research, topic clusters, an entity plan and the AI search opportunities worth pursuing - prioritised by what will actually move for you.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Optimise',
    description:
      'Technical fixes, content work, internal linking, structured data and entity signals implemented in order of impact rather than all at once.',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Measure & Improve',
    description:
      'Organic visibility, content performance, technical health and AI visibility checks where they are meaningful. Then we do more of what worked.',
  },
]

export default function AiSeoAgencyLondonPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <ServiceHero
          eyebrow="AI SEO & GEO"
          title="Be Found on Google."
          titleHighlight="Be Visible in AI Search."
          description="Search is splitting in two. People still type queries into Google, and increasingly they ask ChatGPT, Gemini or Perplexity instead. We help London businesses stay visible in both - by building websites that are genuinely easy to read, for people and for machines."
          breadcrumbs={[
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'AI SEO & GEO', path: '/ai-seo-agency-london' },
          ]}
          primaryCta="Start Your Project"
          secondaryCta={{ label: 'See our work', href: '/portfolio' }}
        />

        <ServiceSplit
          eyebrow="Why It Matters"
          heading="Search Is No Longer Just a List of Links"
          body={[
            'For twenty years, being found meant ranking in a list of blue links. That still matters, and it will for some time. But a growing share of questions now get answered before anyone clicks anything - by AI Overviews in Google, or in ChatGPT, Gemini and Perplexity.',
            'The practical consequence is a change in what winning looks like. In a list, you compete for a position. In a generated answer, you are either the source the system draws on or you are absent, and there is no second page to be on.',
            'We are deliberately cautious about predicting where this ends up. Nobody credible knows. What is already clear is that sites which are technically sound, factually consistent and clearly structured are easier for any system to use - which makes this work worth doing regardless of how the next few years play out.',
          ]}
          aside={{
            title: 'What has actually changed',
            items: [
              'Answers are increasingly summarised, not just listed',
              'Clarity and structure matter more than keyword repetition',
              'Consistent facts across a site carry real weight',
              'Being a credible source beats being an optimised page',
              'Traditional SEO foundations still underpin all of it',
            ],
          }}
        />

        <ServiceSplit
          eyebrow="Plain English"
          heading="What AI SEO and GEO Actually Mean"
          reverse
          tone="muted"
          body={[
            'AI SEO is making your site easy for AI-powered search to read, understand and rely on. It builds on ordinary SEO rather than replacing it - the site still has to be crawlable, quick and genuinely useful. What shifts is the emphasis: clear answers, consistent facts, explicit structure.',
            'Generative Engine Optimisation goes a step further. It focuses on improving the likelihood that your business is understood, retrieved and potentially referenced when a generative system answers a relevant question.',
            'Two things worth stating plainly. Nobody can guarantee inclusion in ChatGPT, Gemini, Perplexity or AI Overviews - they are not ad platforms you can buy into, and their behaviour changes often. And there is no shortcut that substitutes for having a fast, well-structured site with something worth saying on it.',
          ]}
          points={[
            'Foundations first: crawlability, speed, structure',
            'Content that answers the question before elaborating',
            'Structured data that states facts explicitly',
            'Entity signals so systems know exactly who you are',
          ]}
        />

        <ServiceFeatureGrid
          eyebrow="What We Do"
          heading="AI SEO & GEO Services"
          intro="Not a fixed package. We audit first, then work through these in the order that makes the most difference to your site."
          items={services}
          columns={4}
          tone="default"
        />

        <ServiceSteps
          heading="How We Optimise a Website for AI Search"
          intro="Four stages, run in sequence, because content and authority work is wasted on a site that cannot be crawled properly."
          steps={steps}
          tone="muted"
        />

        <ServiceSplit
          eyebrow="Why Nexiora"
          heading="We Build the Website and Optimise It as One System"
          tone="default"
          body={[
            'Most agencies do one or the other. A design studio hands over a site and someone else is expected to make it rank. An SEO agency inherits a site built on foundations it cannot change and works around them.',
            'Both arrangements produce the same result: a beautiful website that search engines and AI systems struggle to read, or technically sound pages that fail to persuade anyone once they arrive.',
            'Because we do the [bespoke web design](/web-design) and the [development](/web-development) as well as the search work, the structure, markup, performance and content are decided together. Search visibility stops being something bolted on afterwards.',
          ]}
          aside={{
            title: 'Web design → AI search visibility',
            items: [
              'Design and structure decided with crawlability in mind',
              'Clean, semantic markup from the first build',
              'Performance treated as a feature, not a final tidy-up',
              'Structured data built in rather than retrofitted',
              'Content shaped around real customer questions',
            ],
          }}
          link={{ label: 'Explore bespoke web design', href: '/web-design' }}
        />

        <ServiceSplit
          eyebrow="London"
          heading="Working With London Businesses"
          reverse
          tone="muted"
          body={[
            'London is one of the most competitive search markets in the country. In most sectors here you are not trying to outrank a handful of local firms - you are up against national brands, well-funded competitors and directories that have been building authority for a decade.',
            'That changes the strategy. Chasing broad head terms is usually the slowest route. Specificity tends to win: the services you actually want more of, the questions your buyers genuinely ask, and the areas you genuinely serve.',
            'We work with businesses across the capital and, being a [London web design agency](/web-design-london) as well, we usually end up improving the site itself rather than just the content on it.',
          ]}
          points={[
            'Strategy built for a crowded, competitive market',
            'Local signals and Google Business Profile alignment',
            'Priority given to terms with genuine commercial intent',
          ]}
          link={{ label: 'See our London work', href: '/web-design-london' }}
        />

        <FaqSection
          faqs={aiSeoFaqs}
          intro="Straight answers on AI SEO, GEO and what can honestly be promised."
          tone="default"
        />

        <ServiceCta
          heading="Want to know how visible you actually are?"
          body="We'll look at your site's technical health, how it is currently represented in search, and where the realistic opportunities are. If the honest answer is that you need foundations before AI search work, we'll tell you that."
          buttonLabel="Start Your Project"
          related={[
            { label: 'Bespoke Web Design', href: '/web-design' },
            { label: 'Web Development', href: '/web-development' },
            { label: 'Web Design London', href: '/web-design-london' },
          ]}
        />
      </main>

      <SiteFooter />

      <JsonLd
        data={graph(
          serviceSchema({
            name: 'AI SEO and Generative Engine Optimisation',
            description:
              'AI SEO and GEO services for London businesses - technical SEO, structured data, entity optimisation, topical authority and content built for visibility across Google and AI-powered search.',
            path: '/ai-seo-agency-london',
            serviceType: 'Search Engine Optimisation',
            areaServed: ['London', 'United Kingdom'],
          }),
        )}
      />
    </>
  )
}
