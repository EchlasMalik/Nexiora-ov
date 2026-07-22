import type { BlogBlock } from '@/lib/blog-posts'

export function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={i}
                className="pt-4 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                {block.text}
              </h2>
            )
          case 'h3':
            return (
              <h3
                key={i}
                className="pt-2 font-heading text-xl font-bold text-foreground"
              >
                {block.text}
              </h3>
            )
          case 'p':
            return (
              <p
                key={i}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {block.text}
              </p>
            )
          case 'ul':
            return (
              <ul key={i} className="space-y-2.5">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={i} className="space-y-3">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {j + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            )
          case 'quote':
            return (
              <blockquote
                key={i}
                className="rounded-r-xl border-l-4 border-gold bg-secondary/40 py-4 pl-6 pr-4 text-base font-medium italic text-foreground"
              >
                {block.text}
              </blockquote>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
