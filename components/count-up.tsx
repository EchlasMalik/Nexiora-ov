'use client'

import { useEffect, useRef } from 'react'
import { animate } from 'framer-motion'

/**
 * Counts from 0 to `to` the first time it scrolls into view.
 *
 * The server renders the final value, so crawlers, no-JS visitors and anyone
 * with reduced motion see the real number. It only resets to 0 when it is
 * still below the fold at mount - never visibly jumping backwards. Writes to
 * textContent directly rather than through state, so there is no re-render per
 * frame.
 */
export function CountUp({
  to,
  suffix = '',
  className,
}: {
  to: number
  suffix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top < window.innerHeight) return

    el.textContent = `0${suffix}`
    let controls: ReturnType<typeof animate> | undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        controls = animate(0, to, {
          duration: 1.4,
          ease: [0.23, 1, 0.32, 1],
          onUpdate: (v) => {
            el.textContent = `${Math.round(v)}${suffix}`
          },
        })
      },
      { threshold: 0.6 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      controls?.stop()
      el.textContent = `${to}${suffix}`
    }
  }, [to, suffix])

  return (
    <span ref={ref} className={className}>
      {`${to}${suffix}`}
    </span>
  )
}
