'use client'

import Image from 'next/image'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { CheckCircle2, Mail } from 'lucide-react'

// Decorative, so a spring rather than a 1:1 mapping - tying rotation straight
// to the cursor feels mechanical; the spring gives it weight and momentum.
const SPRING = { stiffness: 120, damping: 18, mass: 0.6 }
const MAX_TILT = 5

export function HeroVisual() {
  const reduceMotion = useReducedMotion()
  const rotateX = useSpring(useMotionValue(0), SPRING)
  const rotateY = useSpring(useMotionValue(0), SPRING)

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    // Touch would fire this on tap and leave the card stuck at an angle.
    if (reduceMotion || event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    rotateY.set(x * MAX_TILT * 2)
    rotateX.set(-y * MAX_TILT * 2)
  }

  function onPointerLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <div
      className="animate-hero-visual-in relative mx-auto w-full max-w-xl lg:max-w-none"
      style={{ animationDelay: '150ms' }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 bottom-6 top-16 -z-10 rounded-full bg-primary/20 blur-3xl"
      />

      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        className="relative"
      >
        {/* The PNG is a square with the browser window floating on a grey
            backdrop. Cropped to just the window so the backdrop doesn't read
            as a second box against the page. */}
        <div className="relative aspect-[1236/1012] overflow-hidden rounded-[1.25rem] bg-card shadow-2xl shadow-navy/15 ring-1 ring-navy/5 sm:rounded-[1.75rem]">
          <Image
            src="/hero-dashboard.png"
            alt="Nexiora analytics dashboard showing rising conversions and lead enquiries"
            width={1254}
            height={1254}
            sizes="(max-width: 1024px) 90vw, 600px"
            className="absolute left-1/2 top-1/2 h-auto w-[101.5%] max-w-none -translate-x-1/2 -translate-y-1/2"
            priority
          />
        </div>

        {/* Floating chips tell the two halves of the headline: the site
            converts a visitor, then the system follows up on its own. */}
        <div
          className="animate-chip-in absolute -left-2 top-[36%] hidden sm:block lg:-left-10"
          style={{ animationDelay: '700ms' }}
        >
          <div className="animate-float">
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/95 py-3 pl-3 pr-5 shadow-xl shadow-navy/10 backdrop-blur-sm">
              <span className="relative inline-flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="size-4" />
                <span className="absolute -right-0.5 -top-0.5 flex size-2.5">
                  <span className="animate-banner-glow absolute inline-flex size-full rounded-full bg-gold" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-gold" />
                </span>
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">
                  New enquiry received
                </span>
                <span className="block text-xs text-muted-foreground">
                  via your website · just now
                </span>
              </span>
            </div>
          </div>
        </div>

        <div
          className="animate-chip-in absolute -bottom-6 right-2 hidden sm:block lg:-right-6"
          style={{ animationDelay: '950ms' }}
        >
          <div className="animate-float [animation-delay:-3s]">
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/95 py-3 pl-3 pr-5 shadow-xl shadow-navy/10 backdrop-blur-sm">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                <CheckCircle2 className="size-4" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">
                  Follow-up sent automatically
                </span>
                <span className="block text-xs text-muted-foreground">
                  Lead added to your CRM
                </span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
