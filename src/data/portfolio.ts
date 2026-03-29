import projectAtlas from '../assets/images/project-atlas.jpg'
import projectBeacon from '../assets/images/project-beacon.jpg'

export type NavItem = {
  label: string
  href: string
}

export type SkillGroup = {
  title: string
  skills: string[]
}

export type ProjectItem = {
  title: string
  summary: string
  tech: string[]
  image: string
  imageAlt: string
  liveUrl: string
  repoUrl: string
}

export const profile = {
  name: 'Paul Christian Labor',
  role: 'Web Developer',
  tagline: 'Building clean and responsive web interfaces.',
  intro: 'Focused on performance and simplicity.',
  location: 'Modern frontend with React and TypeScript.',
}

export const navigation: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: ['React', 'Vue', 'Angular'],
  },
  {
    title: 'Styling',
    skills: ['Tailwind CSS', 'CSS'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Replit', 'v0 (Vercel)'],
  },
  {
    title: 'Hosting',
    skills: ['cPanel', 'Plesk', 'WHM'],
  },
  {
    title: 'Other',
    skills: [
      'Responsive Design',
      'UI/UX',
      'Performance',
      'AI-assisted Development',
    ],
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'Coffee Shop Website',
    summary:
      'A modern landing page built with v0 by Vercel for AI-assisted UI generation and rapid prototyping.',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Radix UI',
    ],
    image: projectAtlas,
    imageAlt: 'Coffee Shop Website project preview image.',
    liveUrl: '#',
    repoUrl: 'https://github.com/example/coffee-shop-website',
  },
  {
    title: 'Gamer Website',
    summary:
      'A landing page developed using Replit, focused on AI tools and modern frontend setup experimentation.',
    tech: ['Vite', 'TypeScript', 'React'],
    image: projectBeacon,
    imageAlt: 'Gamer Website project preview image.',
    liveUrl: '#',
    repoUrl: 'https://github.com/example/gamer-website',
  },
]

