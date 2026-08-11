import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Clock, User } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ContactTrigger } from '@/components/contact-trigger'
import { BlogContent } from '@/components/blog-content'
import { BlogCard } from '@/components/blog-card'
import {
  blogPosts,
  getPostBySlug,
  getRelatedPosts,
  formatBlogDate,
} from '@/lib/blog-posts'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { articleSchema, graph } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

/** The service each category most naturally leads into. */
const categoryServiceLinks: Record<
  string,
  { label: string; href: string; blurb: string }
> = {
  'Web Design': {
    label: 'Bespoke web design',
    href: '/web-design',
    blurb: 'See how we design websites built to convert, not just to look good.',
  },
  'AI & Automation': {
    label: 'Custom software & automation',
    href: '/custom-software',
    blurb: 'See how we build systems that handle the admin for you.',
  },
  'Software Development': {
    label: 'Custom software development',
    href: '/custom-software',
    blurb: 'See how we build software around the way your business runs.',
  },
  'Conversion & Leads': {
    label: 'Bespoke web design',
    href: '/web-design',
    blurb: 'See how we turn traffic you already have into booked enquiries.',
  },
  'SEO & Performance': {
    label: 'Custom web development',
    href: '/web-development',
    blurb: 'See how we build fast, technically sound websites from the ground up.',
  },
  Strategy: {
    label: 'Web design & development services',
    href: '/services',
    blurb: 'See what we build and how projects typically come together.',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: 'Article Not Found', robots: { index: false, follow: true } }
  }

  return buildMetadata({
    title: post.seoTitle ?? post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogType: 'article',
    publishedTime: post.date,
    authors: [post.author],
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const related = getRelatedPosts(slug, 3)
  const serviceLink = categoryServiceLinks[post.category]

  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* HERO */}
        <section className="relative overflow-hidden bg-secondary/40 py-16 md:py-20">
          <div className="pointer-events-none absolute -top-24 -right-24 size-[28rem] rounded-full bg-primary/10 blur-3xl" />

          <div className="animate-fade-in-up mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: 'Home', path: '/' },
                { name: 'Blog', path: '/blog' },
                { name: post.title, path: `/blog/${post.slug}` },
              ]}
            />

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-medium text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
                {post.category}
              </span>
              <span>{formatBlogDate(post.date)}</span>
            </div>

            <h1 className="mt-4 font-heading text-2xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl">
              {post.title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="size-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* ARTICLE BODY */}
        <section className="bg-background py-16 md:py-20">
          <div className="animate-fade-in-up mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 [animation-delay:150ms]">
            <BlogContent blocks={post.content} />

            {/* IN-ARTICLE CTA */}
            <div className="mt-14 rounded-2xl border border-border bg-primary/5 p-8 text-center transition-shadow duration-200 hover:shadow-md">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Ready to put this into practice?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Book a free design consultation and we&apos;ll show you exactly
                where your website and systems could be working harder.
              </p>

              <div className="mt-6">
                <ContactTrigger className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md active:scale-95">
                  Book a Free Consultation
                  <ArrowRight className="size-4" />
                </ContactTrigger>
              </div>
            </div>

            {serviceLink ? (
              <div className="mt-8 rounded-2xl border border-border bg-card p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {serviceLink.blurb}
                </p>
                <Link
                  href={serviceLink.href}
                  className="group mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  {serviceLink.label}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ) : null}
          </div>
        </section>

        {/* RELATED POSTS */}
        {related.length > 0 && (
          <section className="bg-secondary/40 py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                More From the Blog
              </h2>
              <p className="mt-3 text-muted-foreground">
                Keep exploring insights on web design, SEO, and automation.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((relatedPost, index) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} index={index} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
      <JsonLd data={graph(articleSchema(post))} />
    </>
  )
}
