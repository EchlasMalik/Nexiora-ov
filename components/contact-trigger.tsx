'use client'

import { useContactModal } from '@/components/contact-modal'

export function ContactTrigger({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const { open } = useContactModal()

  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  )
}
