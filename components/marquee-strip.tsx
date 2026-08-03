const items = ['Websites', 'Automations', 'SEO', 'Advertising', 'Landing Pages', 'CRM Systems']

// Repeat the base items so a single "half" of the loop is always wider than
// the viewport - otherwise the marquee runs out of content and leaves a gap
// before the second half scrolls in.
const half = [...items, ...items, ...items, ...items]

export function MarqueeStrip() {
  const loop = [...half, ...half]
  return (
    <div id="marquee-strip" className="overflow-hidden border-y border-border bg-navy py-4">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="font-heading text-xl font-bold text-navy-foreground sm:text-2xl">
              {item}
            </span>
            <span className="size-2 rounded-full bg-gold" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  )
}
