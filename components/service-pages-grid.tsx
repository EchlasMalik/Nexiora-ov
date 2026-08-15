import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { servicePages } from '@/lib/services-data'
import { cn } from '@/lib/utils'

type ServicePagesGridProps = {
  className?: string
  /** Stagger each card in on scroll. Off for pages that render this statically. */
  stagger?: boolean
}

/**
 * Thumbnail grid of the dedicated service pages, shared by the home page and
 * /services so the two cannot drift apart.
 *
 * The artwork is a transparent PNG of a browser mock with a blue outline, taller
 * than it is wide (~0.9). Showing it whole makes for a very tall card, so only
 * the top ~60% is shown and the mock bleeds off the bottom edge.
 *
 * That means object-cover (width binds, bottom overflows) with object-top, and
 * padding on three sides only - a bottom pad would leave a strip of panel under
 * the mock and break the bleed. 8/5 is deliberate: it clears the main graphic in
 * every illustration, where a true half-height crop cut straight through them.
 */
export function ServicePagesGrid({ className, stagger = false }: ServicePagesGridProps) {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3',
        className,
      )}
    >
      {servicePages.map((page, i) => (
        <Reveal
          key={page.slug}
          delay={stagger ? (i % 3) * 100 : 0}
          direction={stagger ? 'up' : 'none'}
          immediate={!stagger}
          className="h-full"
        >
          <Link
            href={`/${page.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
          >
            <div className="relative aspect-8/5 overflow-hidden bg-linear-to-b from-secondary/70 to-secondary/20">
              <Image
                src={page.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
                className="origin-top object-cover object-top px-3 pt-3 transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>

            <div className="flex flex-1 flex-col border-t border-border p-6">
              <h3 className="font-heading text-base font-bold text-foreground transition-colors group-hover:text-primary">
                {page.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {page.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Learn more
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
