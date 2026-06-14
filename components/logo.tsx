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
      <span
        aria-hidden="true"
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
      >
        <img src="/favicon1.png" alt="Nexiora Logo" className="h-full w-full object-contain" />
      </span>
      <span
        className={cn(
          'font-heading text-xl font-bold tracking-tight',
          variant === 'light' ? 'text-navy-foreground' : 'text-foreground',
        )}
      >
        Nexiora
      </span>
    </div>
  )
}
