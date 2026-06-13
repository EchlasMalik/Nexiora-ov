import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { MarqueeStrip } from '@/components/marquee-strip'
import { PortfolioSection } from '@/components/portfolio-section'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Comparison } from '@/components/comparison'
import { ProcessSection } from '@/components/process-section'
import { ServicesSection } from '@/components/services-section'
import { Testimonials } from '@/components/testimonials'
import { ContactCta } from '@/components/contact-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MarqueeStrip />
        <PortfolioSection />
        <WhyChooseUs />
        <Comparison />
        <ProcessSection />
        <ServicesSection />
        <Testimonials />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  )
}
