import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Clock, User } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ContactCta } from '@/components/contact-cta'
import { BlogContent } from '@/components/blog-content'
import { BlogCard } from '@/components/blog-card'
import {
  blogPosts,
  getPostBySlug,
  getRelatedPosts,
  formatBlogDate,
} from '@/lib/blog-posts'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: 'Article Not Found — Nexiora' }
  }

  return {
    title: `${post.title} — Nexiora Blog`,
    description: post.excerpt,
  }
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

  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-secondary/40 py-16 md:py-20">
          <div className="pointer-events-none absolute -top-24 -right-24 size-[28rem] rounded-full bg-primary/10 blur-3xl" />

          <div className="animate-fade-in-up mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:-translate-x-0.5 hover:text-primary/80"
            >
              <ArrowLeft className="size-4" />
              Back to Blog
            </Link>

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
            <div className="mt-14 rounded-2xl border border-border bg-primary/5 p-8 text-center transition-shadow duration-300 hover:shadow-md">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Ready to put this into practice?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Book a free design consultation and we&apos;ll show you exactly
                where your website and systems could be working harder.
              </p>

              <div className="mt-6">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95"
                >
                  Book a Free Consultation
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
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

      <ContactCta />
      <SiteFooter />
    </>
  )
}
