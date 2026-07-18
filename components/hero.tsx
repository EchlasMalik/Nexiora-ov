import Image from 'next/image'
import { ArrowRight, MapPin, Star, Zap, BadgeCheck } from 'lucide-react'
import { AiComingSoonBanner } from '@/components/ai-coming-soon-banner'

const benefits = [
  { icon: Zap, text: 'Conversion-first design that turns visitors into booked leads' },
  { icon: BadgeCheck, text: 'Smart systems that follow up and stay organized for you' },
]

export function Hero() {
  return (
    <section id="home" className="relative flex flex-1 flex-col overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 size-[24rem] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl flex-1 items-center gap-8 px-4 py-5 sm:px-6 md:py-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-primary shadow-sm">
            <MapPin className="size-3.5" />
            Based in London · Serving clients worldwide
          </span>

          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Websites That Convert.{' '}
            <span className="text-primary">Systems That Perform.</span>
          </h1>

          <p className="mt-2.5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nexiora builds high-converting websites and smart AI systems that
            help service businesses look professional, win more clients, and
            stay organized behind the scenes.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
            >
              Book a Free Consultation
              <ArrowRight className="size-4" />
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              View Public Portfolio
            </a>
          </div>

          <ul className="mt-6 grid gap-2 sm:grid-cols-1">
            {benefits.map((b) => (
              <li key={b.text} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <b.icon className="size-4" />
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {b.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
              <Star className="size-4 fill-gold text-gold" />
              5-Star Rated
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
              <BadgeCheck className="size-4 text-primary" />
              20+ Sites Delivered
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-3xl bg-primary/10" />
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-xl">
            <Image
              src="/hero-dashboard.png"
              alt="Nexiora analytics dashboard showing rising conversions and lead inquiries"
              width={900}
              height={680}
              className="h-auto w-full rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative pb-2 sm:pb-3">
        <AiComingSoonBanner />
      </div>
    </section>
  )
}
