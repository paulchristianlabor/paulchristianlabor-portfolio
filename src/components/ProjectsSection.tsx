import { projects } from '../data/portfolio'
import { Button } from './Button'
import { Card } from './Card'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { Tag } from './Tag'

type ProjectCardProps = {
  project: (typeof projects)[number]
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      as="article"
      className="flex h-full flex-col p-5 sm:p-6"
    >
      <div className="project-thumb overflow-hidden">
        <img
          className="aspect-16/10 w-full object-cover transition-transform duration-500 hover:scale-105"
          src={project.image}
          alt={project.imageAlt}
        />
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="text-2xl">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-300 sm:text-base">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {project.tech.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            href={project.liveUrl}
            rel="noreferrer noopener"
            target="_blank"
            variant="primary"
          >
            Live demo
          </Button>
        </div>
      </div>
    </Card>
  )
}

type ProjectsGridProps = {
  items: typeof projects
  className: string
}

function ProjectsGrid({ items, className }: ProjectsGridProps) {
  return (
    <div className={className}>
      {items.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  )
}

export function ProjectsSection() {
  return (
    <Section id="projects" ariaLabel="Projects section">
      <SectionHeading
        eyebrow="Projects"
        title="Featured projects"
      />

      <ProjectsGrid
        items={projects.slice(0, 3)}
        className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      />

      <ProjectsGrid
        items={projects.slice(3)}
        className="mt-6 grid gap-6 md:grid-cols-2 xl:mx-auto xl:max-w-[calc(66.666%+12px)] xl:grid-cols-2"
      />

    </Section>
  )
}
