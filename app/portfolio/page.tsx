import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProjectCard } from '@/components/project-card'
import { ComingSoonProjectCard } from '@/components/coming-soon-project-card'
import { ContactTrigger } from '@/components/contact-trigger'
import { Reveal } from '@/components/reveal'
import { featuredProjects, moreProjects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Portfolio - Nexiora',
  description:
    'Explore high-converting websites and systems Nexiora has built for service businesses across industries.',
}

export default function PortfolioPage() {
  const allProjects = [...featuredProjects, ...moreProjects]
  const isComingSoonAlone = allProjects.length % 3 === 0

  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-secondary/40 py-16 md:py-24">
          <div className="pointer-events-none absolute -top-24 -right-24 size-[28rem] rounded-full bg-primary/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mt-6 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Work
              </p>

              <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-foreground text-balance sm:text-5xl">
                The Full <span className="text-primary">Portfolio</span>
              </h1>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                A closer look at the websites and systems we’ve built to help
                service businesses convert more visitors into real inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECT GRID */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {allProjects.map((project, i) => (
                <Reveal key={`${project.title}-${i}`} delay={(i % 3) * 90}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
              {isComingSoonAlone ? (
                <Reveal
                  delay={(allProjects.length % 3) * 90}
                  className="sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-sm lg:col-span-1 lg:col-start-2 lg:mx-0 lg:max-w-none"
                >
                  <ComingSoonProjectCard />
                </Reveal>
              ) : (
                <Reveal delay={(allProjects.length % 3) * 90}>
                  <ComingSoonProjectCard />
                </Reveal>
              )}
            </div>

            {/* CTA */}
            <div className="mt-16 flex justify-center">
              <div className="text-center">
                <p className="mb-4 text-sm text-muted-foreground">
                  Like what you see?
                </p>

                <ContactTrigger
                  className="
                    inline-flex items-center justify-center gap-2 rounded-full bg-gold
                    px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-md active:scale-95
                  "
                >
                  Start Your Project
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
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