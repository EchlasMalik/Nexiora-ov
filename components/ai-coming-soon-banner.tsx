import Image from 'next/image'
import { Sparkles } from 'lucide-react'

export function AiComingSoonBanner() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="animate-banner-in flex flex-col items-center gap-2.5 rounded-2xl border border-primary/20 bg-linear-to-r from-primary/5 via-card to-gold/5 px-5 py-3 text-center shadow-sm backdrop-blur-sm sm:flex-row sm:gap-4 sm:rounded-full sm:text-left">
        <div className="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-card shadow-sm ring-1 ring-border">
          <Image
            src="/Nexiora-AI.png"
            alt="Nexiora AI logo"
            width={36}
            height={36}
            className="size-6"
          />
          <span className="absolute -right-0.5 -top-0.5 flex size-2.5">
            <span className="animate-banner-glow absolute inline-flex size-full rounded-full bg-gold" />
            <span className="relative inline-flex size-2.5 rounded-full bg-gold" />
          </span>
        </div>

        <p className="text-sm leading-snug text-muted-foreground">
          <span className="mr-1.5 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
            <Sparkles className="size-3" />
            Coming Soon
          </span>
          <span className="font-semibold text-foreground">Nexiora AI</span>
          {' '}— a smart chatbot built right into your website, launching soon.
        </p>
      </div>
    </div>
  )
}
