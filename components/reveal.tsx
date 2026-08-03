'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = React.ComponentPropsWithoutRef<'div'> & {
  delay?: number
  direction?: 'up' | 'none'
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setVisible(true)
      return
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
  }, [])

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
