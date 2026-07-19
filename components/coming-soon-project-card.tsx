import { Hammer } from 'lucide-react'

export function ComingSoonProjectCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border-2 border-dashed border-border bg-card/50">
      <div className="relative flex aspect-[16/11] items-center justify-center border-b-2 border-dashed border-border bg-muted/40">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Hammer className="size-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col items-center p-5 text-center">
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
