import {
  CreditCard,
  PackageSearch,
  ShoppingCart,
  Smartphone,
  BarChart3,
  Puzzle,
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
import { ecommerceFaqs } from '@/lib/faqs'
import { graph, serviceSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Ecommerce Web Design Agency',
  description:
    'Ecommerce web design focused on the sale - product pages, checkout experience, mobile conversion and the integrations that keep your store running.',
  path: '/ecommerce-web-design',
})

const areas = [
  {
    icon: PackageSearch,
    title: 'Product Pages That Sell',
    description:
      'The page where the decision is actually made. Clear imagery, the questions answered in the order people ask them, and delivery information shown before it becomes a reason to leave.',
    points: ['Objections answered on-page', 'Honest delivery info up front', 'Related products that make sense'],
  },
  {
    icon: ShoppingCart,
    title: 'Checkout Experience',
    description:
      'Most baskets are lost at checkout, and rarely because of price. Usually it is a surprise cost, a forced account, or a form asking for things it does not need.',
    points: ['Guest checkout as standard', 'No surprise costs at the last step', 'Short, forgiving forms'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Conversion',
    description:
      'Most of your traffic will be on a phone, and mobile is where clumsy checkouts do the most damage. Designed one-handed first, then scaled up.',
    points: ['One-handed navigation', 'Fast on mobile data', 'Mobile payment options'],
  },
  {
    icon: CreditCard,
    title: 'Payments & Security',
    description:
      'Trusted payment providers, SSL and a secure checkout as standard. Card details stay with the payment provider rather than on your site, which keeps your liability low.',
    points: ['Established payment providers', 'SSL and secure checkout', 'Reduced compliance burden'],
  },
  {
    icon: Puzzle,
    title: 'Stock & System Integrations',
    description:
      'Your store talking to the systems you already run, so stock levels, orders and customer records stay right without anyone maintaining two sets of numbers.',
    points: ['Stock and inventory sync', 'Order and invoice flow', 'CRM and email tools connected'],
  },
  {
    icon: BarChart3,
    title: 'Analytics That Answer Questions',
    description:
      'Tracking set up so you can see where people drop off and why, rather than staring at a traffic number that tells you nothing useful.',
    points: ['Funnel and drop-off tracking', 'Product-level insight', 'Clear reporting'],
  },
]

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Understand the Catalogue',
    description:
      'What you sell shapes everything. Ten products with options is a different problem to a thousand SKUs, and trade pricing is different again. We start there.',
  },
  {
    number: '02',
    icon: PencilRuler,
    title: 'Design the Path to Purchase',
    description:
      'We design the route from landing to paid - category, product, basket, checkout - and remove anything on it that is not helping someone buy.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Optimise',
    description:
      'Launch, then watch what real customers do. Ecommerce rewards steady improvement more than any other kind of site, because every fix compounds.',
  },
]

export default function EcommerceWebDesignPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <ServiceHero
          eyebrow="Ecommerce Web Design"
          title="Ecommerce Web Design Built"
          titleHighlight="Around the Sale"
          description="An online store is judged on one number. We design ecommerce sites where every decision - product page, basket, checkout, mobile - is made in service of that number rather than in spite of it."
          breadcrumbs={[
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Ecommerce Web Design', path: '/ecommerce-web-design' },
          ]}
          secondaryCta={{ label: 'See our work', href: '/portfolio' }}
        />

        <ServiceSplit
          eyebrow="Where Sales Leak"
          heading="Most Stores Don't Lose Sales on Design"
          body={[
            'When a store underperforms, the instinct is to redesign it. Usually the design was never the problem. People arrived, found what they wanted, and then hit something that made buying feel like effort.',
            'It is delivery cost appearing at the final step. A forced account before checkout. A basket that forgets itself on mobile. A product page that never answers the one question standing between browsing and buying.',
            'We start by finding where people actually give up, then fix that. Sometimes it justifies a full rebuild. Often it does not, and we will say so - a smaller, sharper piece of work usually returns more.',
          ]}
          aside={{
            title: 'The usual culprits',
            items: [
              'Delivery costs revealed only at checkout',
              'Account creation forced before purchase',
              'Product questions left unanswered',
              'Checkout forms longer than they need to be',
              'Mobile basket that loses its contents',
              'No visible reassurance on returns or security',
            ],
          }}
        />

        <ServiceFeatureGrid
          eyebrow="What We Focus On"
          heading="The Parts of a Store That Decide Revenue"
          intro="Every ecommerce project is different, but the money is nearly always won or lost in the same handful of places."
          items={areas}
          tone="muted"
        />

        <ServiceSteps
          heading="How an Ecommerce Project Runs"
          intro="Grounded in what you sell and how customers actually buy it, rather than a template applied to every store."
          steps={steps}
          tone="default"
        />

        <ServiceSplit
          eyebrow="Custom Functionality"
          heading="When Your Store Doesn't Fit the Box"
          reverse
          body={[
            'Standard platforms handle standard shops well. Where they struggle is anything unusual: configurable products, trade and retail pricing side by side, subscriptions, bookings alongside products, or stock spread across locations.',
            'That is a development problem rather than a design one. Because we build custom functionality too, an awkward requirement stays a requirement instead of becoming a compromise you live with for three years.',
          ]}
          points={[
            'Configurable and made-to-order products',
            'Trade accounts and tiered pricing',
            'Subscriptions and recurring orders',
            'Custom integrations with existing systems',
          ]}
          link={{ label: 'Explore custom web development', href: '/web-development' }}
        />

        <FaqSection
          faqs={ecommerceFaqs}
          intro="Common questions about ecommerce web design."
        />

        <ServiceCta
          heading="Want a store that converts the traffic it already has?"
          body="Tell us what you sell and where you think customers are dropping off. We'll give you an honest read on whether that needs a rebuild or a much smaller fix."
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
          serviceSchema({
            name: 'Ecommerce Web Design',
            description:
              'Ecommerce web design and development for UK businesses - product pages, checkout experience, mobile conversion, payments and system integrations.',
            path: '/ecommerce-web-design',
            serviceType: 'Ecommerce Web Design',
          }),
        )}
      />
    </>
  )
}
