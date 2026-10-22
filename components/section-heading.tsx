import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

/**
 * Eyebrow + title + intro used to open each home page section. `title` takes a
 * node so a single word can be set in the serif accent via <Accent>.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
  className,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  tone?: 'light' | 'dark'
  className?: string
}) {
  const dark = tone === 'dark'

  return (
    <Reveal className={cn('mx-auto max-w-2xl text-center', className)}>
      <p
        className={cn(
          'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]',
          dark
            ? 'border-white/15 bg-white/5 text-gold'
            : 'border-primary/15 bg-primary/5 text-primary',
        )}
      >
        <span
          aria-hidden="true"
          className={cn('size-1.5 rounded-full', dark ? 'bg-gold' : 'bg-primary')}
        />
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]',
          !dark && 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed text-pretty sm:text-lg',
            dark ? 'text-navy-foreground/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}

/** Serif italic emphasis for one or two words inside a heading. */
export function Accent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        // Instrument Serif runs small next to Poppins, so it is nudged up to
        // match cap height.
        'font-accent text-[1.12em] font-normal italic tracking-normal text-primary',
        className,
      )}
    >
      {children}
    </span>
  )
}
