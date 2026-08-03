import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import type { BlogPost } from '@/lib/blog-posts'
import { formatBlogDate } from '@/lib/blog-posts'

export function BlogCard({
  post,
  index = 0,
}: {
  post: BlogPost
  index?: number
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      style={{ animationDelay: `${Math.min(index, 8) * 90}ms` }}
      className="animate-fade-in-up group flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lg sm:p-7"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-medium text-muted-foreground">
        <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
          {post.category}
        </span>
        <span>{formatBlogDate(post.date)}</span>
      </div>

      <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-foreground text-balance transition-colors duration-200 group-hover:text-primary">
        {post.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {post.excerpt}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4 transition-colors duration-200 group-hover:border-primary/20">
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="size-3.5" />
          {post.readTime}
        </span>

        <span className="flex items-center gap-1.5 text-sm font-medium text-primary">
          Read Article
          <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  )
}
