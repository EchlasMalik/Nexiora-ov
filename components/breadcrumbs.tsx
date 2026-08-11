import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, graph } from '@/lib/schema'

export type Crumb = { name: string; path: string }

/**
 * Visible breadcrumb trail plus its matching BreadcrumbList schema, emitted
 * together so the two can never drift out of sync.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {items.map((item, i) => {
            const isLast = i === items.length - 1
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {isLast ? (
                  <span className="font-medium text-foreground" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.path}
                      className="transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                    <ChevronRight className="size-3.5 text-muted-foreground/60" />
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
      <JsonLd data={graph(breadcrumbSchema(items))} />
    </>
  )
}
