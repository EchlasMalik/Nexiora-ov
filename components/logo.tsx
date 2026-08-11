import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  variant = 'default',
}: {
  className?: string
  variant?: 'default' | 'light'
}) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      {/* Decorative: the adjacent "Nexiora Studio" text already names the brand,
          so the mark is hidden from assistive tech rather than announced twice. */}
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg">
        <Image
          src="/favicon1.png"
          alt=""
          width={36}
          height={36}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      <span
        className={cn(
          'font-heading text-xl font-bold tracking-tight',
          variant === 'light' ? 'text-navy-foreground' : 'text-foreground',
        )}
      >
        Nexiora Studio
      </span>
    </div>
  )
}
