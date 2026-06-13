import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { featuredProjects } from '@/lib/projects'

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Work
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Recent Projects
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Real results for real service businesses — built to look sharp and
            convert visitors into inquiries.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3.5 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-primary/5"
          >
            View Public Portfolio
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
