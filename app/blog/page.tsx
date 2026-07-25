import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BlogCard } from '@/components/blog-card'
import { ContactTrigger } from '@/components/contact-trigger'
import { blogPosts, formatBlogDate } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Blog - Web Design, SEO & AI Automation Insights | Nexiora',
  description:
    'Practical guides on web design, website conversion optimisation, SEO, and AI automation for service businesses - from the team building high-converting websites at Nexiora.',
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-secondary/40 py-16 md:py-24">
          <div className="pointer-events-none absolute -top-24 -right-24 size-[28rem] rounded-full bg-primary/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-in-up max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                The Nexiora Blog
              </p>

              <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-foreground text-balance sm:text-5xl">
                Insights on Websites, SEO{' '}
                <span className="text-primary">& AI Automation</span>
              </h1>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Practical, no-fluff guides on web design, conversion, SEO, and
                automation - written for service businesses that want a
                website and systems that actually generate leads.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED POST */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href={`/blog/${featured.slug}`}
              className="animate-fade-in-up group grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg sm:p-8 md:grid-cols-[1.4fr_1fr] md:gap-10 md:p-10"
            >
              <div className="flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-medium text-muted-foreground">
                  <span className="rounded-full bg-gold/15 px-2.5 py-1 font-semibold text-gold-foreground">
                    Latest Article
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
                    {featured.category}
                  </span>
                  <span>{formatBlogDate(featured.date)}</span>
                </div>

                <h2 className="mt-4 font-heading text-xl font-bold tracking-tight text-foreground text-balance transition-colors duration-300 group-hover:text-primary sm:text-2xl md:text-3xl">
                  {featured.title}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {featured.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="size-3.5" />
                    {featured.readTime}
                  </span>

                  <span className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read the Latest Article
                    <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                  </span>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-xs md:mx-0 md:ml-auto md:max-w-sm">
                <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-primary/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-border shadow-md transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-xl">
                  <Image
                    src="/Nexiora-Medium.png"
                    alt={`${featured.title} - Nexiora blog`}
                    fill
                    sizes="(max-width: 768px) 320px, 384px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    priority
                  />
                </div>
              </div>
            </Link>

            {/* GRID */}
            <div className="mt-14">
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                All Articles
              </h3>
              <p className="mt-3 text-muted-foreground">
                Everything we know about building websites and systems that
                grow your business.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post, index) => (
                  <BlogCard key={post.slug} post={post} index={index} />
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-20 rounded-2xl border border-border bg-primary/5 p-8 text-center md:p-10">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Want a website and systems built to actually convert?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Let&apos;s put these ideas to work for your business - starting
                with a free design consultation.
              </p>

              <div className="mt-6">
                <ContactTrigger className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95">
                  Book a Free Consultation
                  <ArrowRight className="size-4" />
                </ContactTrigger>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
