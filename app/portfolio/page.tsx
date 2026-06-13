import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProjectCard } from '@/components/project-card'
import { featuredProjects, moreProjects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Portfolio — Nexiora',
  description:
    'Explore high-converting websites and systems Nexiora has built for service businesses across industries.',
}

export default function PortfolioPage() {
  const allProjects = [...featuredProjects, ...moreProjects]

  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-secondary/40 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              <ArrowLeft className="size-4" />
              Back to Home
            </Link>
            <div className="mt-6 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Work
              </p>
              <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-foreground text-balance sm:text-5xl">
                The Full Portfolio
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                A closer look at the websites and systems we&apos;ve built to
                help service businesses convert more visitors into real
                inquiries.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {allProjects.map((project, i) => (
                <ProjectCard key={`${project.title}-${i}`} project={project} />
              ))}
            </div>

            <div className="mt-14 flex justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
              >
                Start Your Project
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
