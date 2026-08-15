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
 * The artwork is a transparent PNG of a browser mock with a blue outline that
 * runs right up to the edge of the canvas, so the frame is sized with
 * object-contain plus padding - cropping it (object-cover) would slice the
 * outline off. Every illustration is portrait-ish (~0.9), so all of them are
 * height-bound in this container and land on the same rendered height.
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
            <div className="relative aspect-9/8 overflow-hidden bg-linear-to-b from-secondary/70 to-secondary/20">
              <div className="pointer-events-none absolute inset-x-10 bottom-3 h-14 rounded-full bg-primary/15 blur-2xl" />
              <Image
                src={page.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
                className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.04]"
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
