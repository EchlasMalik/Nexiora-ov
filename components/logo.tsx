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
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 19V5l14 14V5"
            stroke="white"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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
