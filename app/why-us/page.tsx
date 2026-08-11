import Link from 'next/link'
import { ArrowRight, Check, X } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ContactTrigger } from '@/components/contact-trigger'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Why Choose Us | Bespoke Web Design Agency UK',
  description:
    'Most websites look professional and still fail to convert. Here is how Nexiora Studio builds bespoke, high-converting websites that turn visitors into booked clients.',
  path: '/why-us',
})

const comparisons = [
  {
    feature: 'Load Time',
    standard: 'Slow - 5s+ and visitors bounce',
    pro: 'Lightning fast - under 2 seconds',
  },
  {
    feature: 'Mobile Optimized',
    standard: 'Breaks or feels clunky on phones',
    pro: 'Flawless on every screen size',
  },
  {
    feature: 'Conversion Focus',
    standard: 'Looks pretty, but rarely converts',
    pro: 'Engineered to turn clicks into leads',
  },
  {
    feature: 'Design',
    standard: 'Generic template everyone else uses',
    pro: 'Custom-built around your brand',
  },
]

export default function WhyUsPage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-secondary/40 py-16 md:py-24">
          <div className="pointer-events-none absolute -top-24 -right-24 size-[28rem] rounded-full bg-primary/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: 'Home', path: '/' },
                { name: 'Why Us', path: '/why-us' },
              ]}
            />

            <div className="mt-6 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Why Nexiora
              </p>

              <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-foreground text-balance sm:text-5xl">
                Most Websites Look Good.{' '}
                <span className="text-primary">Ours Make You Money.</span>
              </h1>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The difference between a standard website and a high-converting
                system isn’t design - it’s strategy, speed, and psychology. It’s
                also why we build{' '}
                <Link
                  href="/web-design"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  bespoke websites
                </Link>{' '}
                rather than dressing up a template.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Standard Website vs. High-Converting Website
              </h2>
              <p className="mt-3 text-muted-foreground">
                Same traffic. Different results. Here’s why.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="grid grid-cols-3 border-b border-border bg-muted/30 px-6 py-4 text-sm font-semibold text-foreground">
                <div>Feature</div>
                <div className="text-muted-foreground">Standard Site</div>
                <div className="text-primary">High-Converting</div>
              </div>

              {comparisons.map((item, i) => (
                <div
                  key={item.feature}
                  className={`grid grid-cols-3 px-6 py-5 text-sm ${
                    i !== comparisons.length - 1
                      ? 'border-b border-border'
                      : ''
                  }`}
                >
                  <div className="font-medium text-foreground">
                    {item.feature}
                  </div>

                  <div className="flex items-start gap-2 text-muted-foreground">
                    <X className="mt-0.5 size-4 text-red-500" />
                    {item.standard}
                  </div>

                  <div className="flex items-start gap-2 font-medium text-foreground">
                    <Check className="mt-0.5 size-4 text-green-500" />
                    {item.pro}
                  </div>
                </div>
              ))}
            </div>

            {/* VALUE STRIP */}
            <div className="mt-14 grid gap-6 rounded-2xl border border-border bg-secondary/40 p-8 text-center md:p-10">
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                Same traffic. 2–3x more conversions.
              </h3>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                We don’t just build websites - we build systems designed to turn
                visitors into booked clients and keep your pipeline consistent.
              </p>

              <div className="mt-4">
                <ContactTrigger className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  Get Your High-Converting Website
                  <ArrowRight className="size-4" />
                </ContactTrigger>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
