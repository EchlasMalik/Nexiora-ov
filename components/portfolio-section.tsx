import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { Reveal } from '@/components/reveal'
import { Accent, SectionHeading } from '@/components/section-heading'
import { featuredProjects } from '@/lib/projects'

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Recent Projects, <Accent>Real Results</Accent>
            </>
          }
          description="Every site is built from scratch around one goal: turning visitors into enquiries for real service businesses."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link
            href="/portfolio"
            className="press group inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3.5 text-sm font-semibold text-primary shadow-sm hover:bg-primary/5"
          >
            View Full Portfolio
            <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
