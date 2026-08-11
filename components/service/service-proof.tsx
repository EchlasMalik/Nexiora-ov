import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { Reveal } from '@/components/reveal'
import { featuredProjects, type Project } from '@/lib/projects'

/**
 * Real client work as proof. Reuses the existing ProjectCard and project data,
 * so every service page gains genuine internal links and images without
 * inventing new assets.
 */
export function ServiceProof({
  eyebrow = 'Our Work',
  heading,
  intro,
  projects = featuredProjects.slice(0, 3),
  tone = 'default',
}: {
  eyebrow?: string
  heading: string
  intro?: string
  projects?: Project[]
  tone?: 'default' | 'muted'
}) {
  return (
    <section
      className={`${tone === 'muted' ? 'bg-secondary/40' : 'bg-background'} py-16 md:py-24`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            {heading}
          </h2>
          {intro ? (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {intro}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3.5 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-primary/5"
          >
            View the full portfolio
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
