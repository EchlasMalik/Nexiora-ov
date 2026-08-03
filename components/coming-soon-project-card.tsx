import { Hammer } from 'lucide-react'

export function ComingSoonProjectCard() {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-dashed border-border bg-card/50 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-lg">
      <div className="relative flex aspect-16/11 items-center justify-center overflow-hidden border-b-2 border-dashed border-border bg-muted/40">
        <span
          aria-hidden="true"
          className="animate-banner-glow absolute size-14 rounded-full bg-primary/15"
        />
        <span className="relative inline-flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6">
          <Hammer className="size-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center p-5 text-center">
        <h3 className="font-heading text-lg font-bold text-foreground">
          Next Project Coming Soon
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          A new build is in progress. Check back soon to see the latest work.
        </p>
      </div>
    </div>
  )
}
