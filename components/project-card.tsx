import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit the live ${project.title} website (opens in a new tab)`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[16/11] overflow-hidden border-b border-border bg-muted">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`${project.title} website design by Nexiora`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-200 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 inline-flex size-9 -translate-y-1 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-sm backdrop-blur-sm transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-bold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-primary">
          {project.category} · {project.location}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}
