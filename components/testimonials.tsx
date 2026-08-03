'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { ContactTrigger } from '@/components/contact-trigger'
import { Reveal } from '@/components/reveal'

const reviews = [
  {
    quote: `Done an amazing job building my website for a tutoring company.

    They suggested really good ideas that I hadn't even thought of.

    Having a website made by Nexiora allowed me to organise and grow my business much more effectively.`,
    name: 'Taseen Hussain',
    role: 'Founder of Yasmin Tutors',
  },
  {
    quote: `I had an excellent experience working with Nexoria Studio. They did an amazing job for my removal company, FJ Property Services.
    
    From the very beginning, they were professional, responsive, and understood exactly what I wanted.
    
    The quality of their work exceeded my expectations, and the final result has really helped my business stand out.

    I highly recommend Nexoria Studio to anyone looking for high-quality design and marketing services. Thank you for your hard work and dedication!`,
    name: 'Fahim Ahmed',
    role: 'Co-Founder of FJ Property & Services',
  },
  {
    quote: `Really impressed with the website made for me by Nexiora.

    They took their time and were attentive to my vision, turning it into a reality that exceeded my initial expectations.`,
    name: 'Faizan Razzaq',
    role: 'Managing Director of Falconis Group',
  },
  {
    quote: `Thank you for creating the website. I found it personally too difficult to manage it, and you made the entire process very easy.

    You really understood what we wanted and turned our ideas into a website that perfectly reflects what we do.

    You were easy to work with and kept us updated throughout the process. Nothing ever felt like too much trouble, and the end result honestly exceeded our expectations.

    We're really happy with the website and would definitely recommend you to anyone looking for a reliable web designer.

    Thanks again for all your hard work!`,
    name: 'Athena Bashar',
    role: 'Founder of Modest Moves',
  },
  // {
  //   quote:
  //     'Same ad budget, but the new landing page tripled our trial sign-ups. The Nexiora team genuinely understands conversions.',
  //   name: 'Jordan Blake',
  //   role: 'Apex Performance',
  // },
]

const count = reviews.length

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((i: number) => {
    setIndex(((i % count) + count) % count)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, 7000)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section id="reviews" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Client Reviews
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            What Our Clients Are Saying
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Real feedback from real service businesses we work with.
          </p>
        </Reveal>

        <Reveal
          delay={150}
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 z-30 -translate-y-1/2 rounded-full border border-border bg-card p-2.5 text-foreground shadow-sm transition hover:-translate-x-0.5 hover:shadow-md sm:left-2 md:-left-4"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next review"
            className="absolute right-0 top-1/2 z-30 -translate-y-1/2 rounded-full border border-border bg-card p-2.5 text-foreground shadow-sm transition hover:translate-x-0.5 hover:shadow-md sm:right-2 md:-right-4"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="relative h-115 overflow-hidden sm:h-100">
            {reviews.map((review, i) => {
              let offset = i - index
              if (offset > count / 2) offset -= count
              if (offset < -count / 2) offset += count

              if (Math.abs(offset) > 1) return null

              const isActive = offset === 0

              return (
                <figure
                  key={review.name}
                  aria-hidden={!isActive}
                  className="absolute top-0 left-1/2 flex h-full w-[82%] max-w-xl flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-500 ease-out"
                  style={{
                    transform: `translateX(calc(-50% + ${offset * 80}%)) scale(${isActive ? 1 : 0.9})`,
                    opacity: isActive ? 1 : 0.4,
                    filter: isActive ? 'none' : 'blur(2px)',
                    zIndex: isActive ? 10 : 0,
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <Quote className="mt-4 size-7 shrink-0 text-primary/25" />
                  <blockquote className="scroll-primary mt-3 flex-1 overflow-y-auto whitespace-pre-line pr-2 text-sm leading-relaxed text-foreground sm:text-base">
                    {review.quote}
                  </blockquote>
                  <figcaption className="mt-6 shrink-0 border-t border-border pt-4">
                    <p className="font-heading font-bold text-foreground">
                      {review.name}
                    </p>
                    <p className="text-sm text-primary">{review.role}</p>
                  </figcaption>
                </figure>
              )
            })}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {reviews.map((review, i) => (
              <button
                key={review.name}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-200 ${
                  i === index ? 'w-6 bg-primary' : 'w-2 bg-border'
                }`}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ContactTrigger className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all hover:-translate-y-1 hover:shadow-md active:scale-95">
            Book a Free Strategy Consultation
          </ContactTrigger>

          <a
            href="https://g.page/r/CYIj1G3GZSO-EAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3.5 text-sm font-semibold text-primary transition-all hover:-translate-y-1 hover:bg-primary/5"
          >
            Leave a Review
          </a>
        </Reveal>
      </div>
    </section>
  )
}
