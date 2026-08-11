import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { servicePages } from '@/lib/services-data'

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-secondary/40 py-20 md:py-28">
          <div className="pointer-events-none absolute -right-24 -top-24 size-[28rem] rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              404
            </p>

            <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-foreground text-balance sm:text-5xl">
              We can&apos;t find that page
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The link may be out of date, or the page may have moved. Here are
              the places most people are looking for.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm transition-transform hover:-translate-y-0.5"
              >
                Back to home
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-card px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                View our work
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-heading text-2xl font-bold tracking-tight text-foreground">
              Popular pages
            </h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ...servicePages.map((page) => ({
                  label: page.title,
                  href: `/${page.slug}`,
                })),
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 text-sm font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:shadow-md"
                >
                  {link.label}
                  <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
