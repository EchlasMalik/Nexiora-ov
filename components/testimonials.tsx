import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    quote: `Really impressed with the website made for me by Nexiora.

    They took their time and were attentive to my vision, turning it into a reality that exceeded my initial expectations.`,
    name: 'Faizan Razzaq',
    role: 'Managing Director of Falconis Group',
  },
  {
    quote: `Done an amazing job building my website for a tutoring company.

    They suggested really good ideas that I hadn't even thought of.

    Having a website made by Echlas allowed me to organise and grow my business much more effectively.`,
    name: 'Taseen Hussain',
    role: 'Founder of Yasmin Tutors',
  },
  {
    quote: `Thank you for creating the website. I found it personally too difficult to manage it, and you made the entire process very easy.

    You really understood what we wanted and turned our ideas into a website that perfectly reflects what we do.

    You were easy to work with and kept us updated throughout the process. Nothing ever felt like too much trouble, and the end result honestly exceeded our expectations.

    We're really happy with the website and would definitely recommend you to anyone looking for a reliable web designer.

    Thanks again for all your hard work!`,
    name: 'Athena Bashar',
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
