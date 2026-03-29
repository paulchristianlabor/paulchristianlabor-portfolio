import { Card } from './Card'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

const highlights = [
  'I am a web developer focused on building modern, responsive, and user-friendly web applications. I work with frameworks like React, Vue, and Angular to create clean and efficient interfaces.',
  'My approach prioritizes simplicity, performance, and maintainable code while ensuring a smooth experience across devices. I also explore AI-assisted development tools such as v0 and Replit to improve workflow, speed, and problem-solving.',
  'I continuously learn and adapt to new technologies, aiming to build practical and scalable solutions that balance design, functionality, and performance.',
]

export function AboutSection() {
  return (
    <Section id="about" ariaLabel="About section">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] lg:gap-10 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="About"
            title="Web Developer"
            description="Modern, responsive, and user-focused web development."
          />
          <div className="mt-8 space-y-5 text-base leading-8 text-slate-300">
            {highlights.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>

        <Card className="p-6 sm:p-8">
          <h3 className="text-2xl font-semibold tracking-tight">Approach</h3>
          <ul className="mt-6 space-y-3">
            {[
              'Clean and responsive interfaces',
              'Focus on performance and simplicity',
              'Maintainable and scalable code structure',
              'Built with React, Vue, and Angular',
              'Follows standard testing and security practices',
              'Optimized workflow using modern development tools',
              'Continuous learning and adaptation',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-300 sm:text-base">
                <span className="shrink-0 text-slate-400">–</span>
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  )
}
