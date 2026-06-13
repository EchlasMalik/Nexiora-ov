const items = ['Websites', 'Automations', 'SEO', 'Advertising', 'Landing Pages', 'CRM Systems']

export function MarqueeStrip() {
  const loop = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-border bg-navy py-4">
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
