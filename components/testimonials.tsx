import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    quote:
      'Really impressed with the website made for me by Nexiora, they took their time and was attentive to my vision and made it into a reality exceeding my initial expectations.',
    name: 'Faizan Razzaq',
    role: 'Managing Director of Falconis Group',
  },
  {
    quote:
      'I am not tech savvy at all, and they walked me through everything patiently. My new site looks incredible and new clients are already finding us.',
    name: 'Taseen Hussain',
    role: 'Founder of Yasmin Tutors',
  },
  {
    quote:
      'The automations alone gave me hours back every week. Leads get followed up instantly and nothing slips through the cracks anymore.',
    name: 'Sofia Alvarez',
    role: 'Founder of Modest Moves',
  },
  {
    quote:
      'Same ad budget, but the new landing page tripled our trial sign-ups. The Nexiora team genuinely understands conversions.',
    name: 'Jordan Blake',
    role: 'Apex Performance',
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Client Reviews
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            What Our Clients Are Saying
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Real feedback from real service businesses we work with.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <Quote className="mt-4 size-7 text-primary/25" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground sm:text-base">
                {review.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-heading font-bold text-foreground">
                  {review.name}
                </p>
                <p className="text-sm text-primary">{review.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
