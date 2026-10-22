const items = [
  'Websites',
  'Automations',
  'Custom Software',
  'SEO',
  'AI Chatbots',
  'Advertising',
  'Landing Pages',
  'CRM Systems',
]

// Repeat the base items so a single "half" of the loop is always wider than
// the viewport - otherwise the marquee runs out of content and leaves a gap
// before the second half scrolls in.
const half = [...items, ...items, ...items]

function Sparkle() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3.5 shrink-0 text-gold">
      <path
        fill="currentColor"
        d="M8 0c.4 4.2 3.8 7.6 8 8-4.2.4-7.6 3.8-8 8-.4-4.2-3.8-7.6-8-8 4.2-.4 7.6-3.8 8-8Z"
      />
    </svg>
  )
}

export function MarqueeStrip() {
  const loop = [...half, ...half]
  return (
    <div id="marquee-strip" className="overflow-hidden border-y border-border bg-navy py-5">
      <div className="mask-fade-x">
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
          {loop.map((item, i) => (
            <div key={i} className="flex items-center gap-10" aria-hidden={i >= items.length}>
              <span className="font-heading text-xl font-semibold tracking-tight text-navy-foreground/90 sm:text-2xl">
                {item}
              </span>
              <Sparkle />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
