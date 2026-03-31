import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBolt,
  faCode,
  faPalette,
  faScrewdriverWrench,
  faServer,
} from '@fortawesome/free-solid-svg-icons'

import { skillGroups } from '../data/portfolio'
import { Card } from './Card'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

function SkillsIcon({ title }: { title: string }) {
  const iconClass = 'h-4 w-4 text-slate-300'

  if (title === 'Frontend') {
    return <FontAwesomeIcon icon={faCode} className={iconClass} aria-hidden="true" />
  }

  if (title === 'Styling') {
    return <FontAwesomeIcon icon={faPalette} className={iconClass} aria-hidden="true" />
  }

  if (title === 'Tools') {
    return <FontAwesomeIcon icon={faScrewdriverWrench} className={iconClass} aria-hidden="true" />
  }

  if (title === 'Hosting') {
    return <FontAwesomeIcon icon={faServer} className={iconClass} aria-hidden="true" />
  }

  return <FontAwesomeIcon icon={faBolt} className={iconClass} aria-hidden="true" />
}

type SkillCardProps = {
  group: (typeof skillGroups)[number]
}

function SkillCard({ group }: SkillCardProps) {
  return (
    <Card className="p-6 transition-colors duration-200 hover:border-white/20">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
        <h3 className="text-xl sm:text-2xl">{group.title}</h3>
        <span
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5"
          aria-hidden="true"
        >
          <SkillsIcon title={group.title} />
        </span>
      </div>

      <ul className="mt-4 grid gap-2 text-sm text-slate-200 sm:text-base">
        {group.skills.map((skill) => (
          <li key={skill} className="flex items-start gap-2.5">
            <span
              className="mt-2 h-1.5 w-1.5 rounded-full bg-(--color-accent)"
              aria-hidden="true"
            />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

type SkillsGridProps = {
  items: typeof skillGroups
  className: string
}

function SkillsGrid({ items, className }: SkillsGridProps) {
  return (
    <div className={className}>
      {items.map((group) => (
        <SkillCard key={group.title} group={group} />
      ))}
    </div>
  )
}

export function SkillsSection() {
  return (
    <Section id="skills" ariaLabel="Skills section">
      <SectionHeading eyebrow="Skills" title="Core skills" />

      <SkillsGrid
        items={skillGroups.slice(0, 3)}
        className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      />

      <SkillsGrid
        items={skillGroups.slice(3)}
        className="mt-5 grid gap-5 md:grid-cols-2 xl:mx-auto xl:max-w-[calc(66.666%+10px)] xl:grid-cols-2"
      />
    </Section>
  )
}
