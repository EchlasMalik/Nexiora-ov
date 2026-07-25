import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { MarqueeStrip } from '@/components/marquee-strip'
import { PortfolioSection } from '@/components/portfolio-section'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Comparison } from '@/components/comparison'
import { ProcessSection } from '@/components/process-section'
import { ServicesSection } from '@/components/services-section'
import { Testimonials } from '@/components/testimonials'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="flex min-h-[calc(100svh-4.3rem)] flex-col">
          <Hero />
          <MarqueeStrip />
        </div>
        <PortfolioSection />
        <WhyChooseUs />
        <Comparison />
        <ProcessSection />
        <ServicesSection />
        <Testimonials />
      </main>
      <SiteFooter />
    </>
  )
}
