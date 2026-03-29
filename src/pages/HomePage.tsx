import { AboutSection } from '../components/AboutSection'
import { HeroSection } from '../components/HeroSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { SkillsSection } from '../components/SkillsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  )
}
