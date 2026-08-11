'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = React.ComponentPropsWithoutRef<'div'> & {
  delay?: number
  direction?: 'up' | 'none'
  /**
   * Set on above-the-fold content. Renders visible immediately instead of
   * starting at opacity-0 and waiting for hydration + IntersectionObserver,
   * which otherwise leaves the server-rendered markup painted blank and delays
   * LCP by the full hydration cost.
   */
  immediate?: boolean
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  immediate = false,
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(immediate)

  useEffect(() => {
    if (immediate) return

    const el = ref.current
    if (!el) return

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      // Deferred a tick so this doesn't setState synchronously inside the effect.
      const id = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(id)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [immediate])

  return (
    <div
      ref={ref}
      style={{ ...(delay ? { transitionDelay: `${delay}ms` } : undefined), ...style }}
      className={cn(
        'transition-all duration-500 ease-out',
        visible
          ? 'translate-y-0 opacity-100'
          : direction === 'up'
            ? 'translate-y-8 opacity-0'
            : 'opacity-0',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
