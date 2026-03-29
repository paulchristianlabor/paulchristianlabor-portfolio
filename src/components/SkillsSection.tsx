import { skillGroups } from '../data/portfolio'
import { Card } from './Card'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

function SkillsIcon({ title }: { title: string }) {
  const iconClass = 'h-4 w-4 text-slate-300'

  if (title === 'Frontend') {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
        <rect
          x="3"
          y="4"
          width="18"
          height="12"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M10 20h4M8 9l-2 2 2 2M16 9l2 2-2 2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    )
  }

  if (title === 'Styling') {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
        <path
          d="M4 20h4l10.4-10.4-4-4L4 16v4Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="m12.9 7.2 4 4"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    )
  }

  if (title === 'Tools') {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
        <path
          d="M14.7 6.3a4.6 4.6 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a4.6 4.6 0 0 0 6.4-6.4l-3 3-2.4-2.4 2.4-2.4 3-3Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    )
  }

  if (title === 'Hosting') {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
        <rect
          x="4"
          y="5"
          width="16"
          height="4"
          rx="1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <rect
          x="4"
          y="10"
          width="16"
          height="4"
          rx="1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <rect
          x="4"
          y="15"
          width="16"
          height="4"
          rx="1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path
        d="M12 4l1.8 4.2L18 10l-4.2 1.8L12 16l-1.8-4.2L6 10l4.2-1.8L12 4Zm6 11 1 2.3L21 18l-2 0.8L18 21l-0.9-2.2L15 18l2.1-0.7L18 15Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export function SkillsSection() {
  return (
    <Section id="skills" ariaLabel="Skills section">
      <SectionHeading eyebrow="Skills" title="Core skills" />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.slice(0, 3).map((group) => (
          <Card key={group.title} className="p-6 transition-colors duration-200 hover:border-white/20">
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
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2 xl:mx-auto xl:max-w-[calc(66.666%+10px)] xl:grid-cols-2">
        {skillGroups.slice(3).map((group) => (
          <Card key={group.title} className="p-6 transition-colors duration-200 hover:border-white/20">
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
        ))}
      </div>
    </Section>
  )
}
