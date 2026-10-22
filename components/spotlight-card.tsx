'use client'

import { cn } from '@/lib/utils'

/**
 * Card with a soft light that follows the cursor. The position is written to
 * the card itself (not a shared parent) so only this element restyles.
 */
export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse') return
    const el = event.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  return (
    <div
      onPointerMove={onPointerMove}
      className={cn('group/spot relative overflow-hidden', className)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            'radial-gradient(320px circle at var(--spot-x, 50%) var(--spot-y, 0%), color-mix(in oklch, var(--primary) 22%, transparent), transparent 70%)',
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  )
}
