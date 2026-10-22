import Link from 'next/link'
import { ArrowRight, BadgeCheck, MapPin, Star } from 'lucide-react'
import { AiComingSoonBanner } from '@/components/ai-coming-soon-banner'
import { ContactTrigger } from '@/components/contact-trigger'
import { HeroVisual } from '@/components/hero-visual'

/**
 * Entrance is pure CSS (staggered `animate-hero-in`) rather than <Reveal>, so it
 * plays from first paint instead of waiting for hydration - the H1 is the LCP
 * candidate on mobile and must not sit invisible behind JS.
 */
const stagger = (ms: number) => ({ animationDelay: `${ms}ms` })

export function Hero() {
  return (
    <section id="home" className="relative flex flex-1 flex-col overflow-hidden">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-32 -top-32 size-112 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 size-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-4 py-8 sm:px-6 md:py-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-8">
        <div className="min-w-0">
          <span
            className="animate-hero-in inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-sm"
            style={stagger(0)}
          >
            <MapPin className="size-3.5 text-primary" />
            London studio · Serving clients worldwide
          </span>

          <h1 className="mt-6 font-heading text-[2.5rem] font-bold leading-[1.06] tracking-tight text-foreground sm:text-6xl lg:text-[3.4rem]">
            <span className="animate-hero-in block" style={stagger(80)}>
              Websites That{' '}
              <span className="relative inline-block">
                <span className="font-accent text-[1.14em] font-normal italic tracking-normal text-primary">
                  Convert.
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-3 w-full text-gold sm:-bottom-1.5"
                >
                  <path
                    d="M2 9 C 50 3, 120 2, 198 6"
                    pathLength={1}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1"
                    className="animate-draw"
                    style={stagger(650)}
                  />
                </svg>
              </span>
            </span>
            <span className="animate-hero-in block" style={stagger(160)}>
              Systems That Perform.
            </span>
          </h1>

          <p
            className="animate-hero-in mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg"
            style={stagger(240)}
          >
            Nexiora is a UK web design and development agency. We build bespoke
            websites, custom software and AI-powered systems that help service
            businesses win more clients - and stay organised behind the scenes.
          </p>

          <div
            className="animate-hero-in mt-8 flex flex-col gap-3 sm:flex-row"
            style={stagger(320)}
          >
            <ContactTrigger className="press group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-gold-foreground shadow-lg shadow-gold/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/40">
              Get My Free Mockup
              <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
            </ContactTrigger>
            <Link
              href="/portfolio"
              className="press inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-4 text-sm font-semibold text-foreground shadow-sm hover:border-primary/30 hover:text-primary"
            >
              See Our Work
            </Link>
          </div>

          <p
            className="animate-hero-in mt-3 text-xs text-muted-foreground sm:pl-2"
            style={stagger(360)}
          >
            Free &amp; no-obligation · 100% custom-built, never templated
          </p>

          <div
            className="animate-hero-in mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border/80 pt-6"
            style={stagger(420)}
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </span>
              5-Star Rated
            </span>
            <span aria-hidden="true" className="hidden h-4 w-px bg-border sm:block" />
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
              <BadgeCheck className="size-4 text-primary" />
              20+ Sites Delivered
            </span>
            <span aria-hidden="true" className="hidden h-4 w-px bg-border sm:block" />
            <span className="text-sm font-medium text-foreground">
              Conversion-first design
            </span>
          </div>
        </div>

        <HeroVisual />
      </div>

      <div className="relative mt-2 pb-6 sm:pb-4">
        <AiComingSoonBanner />
      </div>
    </section>
  )
}
