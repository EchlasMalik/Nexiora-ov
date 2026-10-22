'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Accent, SectionHeading } from '@/components/section-heading'
import { NAP } from '@/lib/site-config'

const reviews = [
  {
    quote: `Done an amazing job building my website for a tutoring company.

    They suggested really good ideas that I hadn't even thought of.

    Having a website made by Nexiora allowed me to organise and grow my business much more effectively.`,
    name: 'Taseen Hussain',
    role: 'Founder of Yasmin Tutors',
  },
  {
    quote: `Really happy with the website Nexiora created for my business. They were professional, easy to work with, and delivered a clean, modern site that matched exactly what I was looking for.

    Communication was great throughout the project, and the whole process was smooth. 
     
    I'd definitely recommend them to anyone looking for a reliable web agency.`,
    name: 'OmniControl',
    role: 'Founder of OmniControl',
  },
  {
    quote: `I had an excellent experience working with Nexiora Studio. They did an amazing job for my removal company, FJ Property Services.
    
    From the very beginning, they were professional, responsive, and understood exactly what I wanted.
    
    The quality of their work exceeded my expectations, and the final result has really helped my business stand out.

    I highly recommend Nexiora Studio to anyone looking for high-quality design and marketing services. Thank you for your hard work and dedication!`,
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
const AUTOPLAY_MS = 7000
// Either distance or a quick flick advances - a flick shouldn't need to travel.
const SWIPE_DISTANCE = 50
const SWIPE_VELOCITY = 0.11

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const swipe = useRef<{ x: number; y: number; t: number } | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReducedMotion(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const goTo = useCallback((i: number) => {
    setIndex(((i % count) + count) % count)
  }, [])

  useEffect(() => {
    if (paused || reducedMotion) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, reducedMotion])

  function onPointerDown(event: React.PointerEvent) {
    // Mouse drags are text selection, not swipes. Also ignore a second finger
    // landing mid-swipe.
    if (event.pointerType === 'mouse' || swipe.current) return
    swipe.current = { x: event.clientX, y: event.clientY, t: performance.now() }
  }

  function onPointerUp(event: React.PointerEvent) {
    const start = swipe.current
    swipe.current = null
    if (!start) return
    const dx = event.clientX - start.x
    const dy = event.clientY - start.y
    if (Math.abs(dy) > Math.abs(dx)) return
    const velocity = Math.abs(dx) / (performance.now() - start.t)
    if (Math.abs(dx) >= SWIPE_DISTANCE || (Math.abs(dx) > 10 && velocity > SWIPE_VELOCITY)) {
      goTo(dx < 0 ? index + 1 : index - 1)
    }
  }

  return (
    <section id="reviews" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Reviews"
          title={
            <>
              Don&apos;t Just Take <Accent>Our Word</Accent> for It
            </>
          }
          description="Real feedback from real service businesses we've worked with."
        />

        {/* Pauses on focus as well as hover, so keyboard users don't have the
            slide change under them mid-read (WCAG 2.2.2). */}
        <Reveal
          delay={150}
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              setPaused(false)
            }
          }}
          aria-roledescription="carousel"
          aria-label="Client reviews"
        >
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 z-30 -translate-y-1/2 rounded-full border border-border bg-card p-2.5 text-foreground shadow-sm press hover:-translate-x-0.5 hover:border-primary/30 hover:text-primary hover:shadow-md sm:left-2 md:-left-4"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next review"
            className="absolute right-0 top-1/2 z-30 -translate-y-1/2 rounded-full border border-border bg-card p-2.5 text-foreground shadow-sm press hover:translate-x-0.5 hover:border-primary/30 hover:text-primary hover:shadow-md sm:right-2 md:-right-4"
          >
            <ChevronRight className="size-5" />
          </button>

          <div
            className="relative h-115 touch-pan-y overflow-hidden sm:h-100"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              swipe.current = null
            }}
            aria-live="polite"
            aria-atomic="false"
          >
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
                  className="absolute top-0 left-1/2 flex h-full w-[82%] max-w-xl flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-[transform,opacity,filter] duration-600 ease-in-out"
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
                  {/* Focusable: longer quotes overflow this fixed-height box,
                      so without a tab stop keyboard users cannot scroll to
                      read them (WCAG 2.1.1). */}
                  <blockquote
                    tabIndex={isActive ? 0 : -1}
                    aria-label={`Review from ${review.name}`}
                    className="scroll-primary mt-3 flex-1 overflow-y-auto whitespace-pre-line pr-2 text-sm leading-relaxed text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary/50 sm:text-base"
                  >
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
                aria-current={i === index}
                // Visually a small dot, but padded to a 24px hit area (WCAG 2.5.8).
                className="flex h-6 w-6 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                <span
                  aria-hidden="true"
                  className={`relative h-2 overflow-hidden rounded-full transition-[width,background-color] duration-300 ease-out ${
                    i === index ? 'w-8 bg-primary/25' : 'w-2 bg-border hover:bg-primary/40'
                  }`}
                >
                  {/* Autoplay progress. Keyed on index so it restarts per slide,
                      and paused rather than reset while the user is reading. */}
                  {i === index && !reducedMotion ? (
                    <span
                      key={index}
                      className="animate-progress absolute inset-0 origin-left rounded-full bg-primary"
                      style={{
                        animationDuration: `${AUTOPLAY_MS}ms`,
                        animationPlayState: paused ? 'paused' : 'running',
                      }}
                    />
                  ) : i === index ? (
                    <span className="absolute inset-0 rounded-full bg-primary" />
                  ) : null}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-8 flex justify-center">
          <a
            href={NAP.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="press inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5"
          >
            <Star className="size-4 fill-gold text-gold" />
            Worked with us? Leave a review
          </a>
        </Reveal>
      </div>
    </section>
  )
}
