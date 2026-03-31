import projectCoffeeShop from '../assets/images/project-coffee-shop.png'
import projectGamer from '../assets/images/project-gamer.png'

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
}

export const profile = {
  name: 'Paul Christian Labor',
  role: 'Web Developer',
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
      'A modern landing page for a coffee brand focused on clean design and smooth user experience.',
    tech: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'PostCSS',
      'Radix UI',
      'Lucide React',
      'Sonner',
      'Recharts',
      'React Hook Form',
      'Zod',
    ],
    image: projectCoffeeShop,
    imageAlt: 'Coffee Shop Website project preview image.',
    liveUrl: 'https://coffee-shop.paulchristianlabor.com',
  },
  {
    title: 'Gamer Website',
    summary:
      'A dynamic landing page built for gaming content with a bold and responsive interface.',
    tech: [
      'React 19',
      'Vite 7',
      'TypeScript',
      'Tailwind CSS 4',
      'TanStack Query',
      'React Hook Form',
      'Zod',
    ],
    image: projectGamer,
    imageAlt: 'Gamer Website project preview image.',
    liveUrl: 'https://gamer.paulchristianlabor.com',
  },
  {
    title: 'Project In Progress 01',
    summary: 'In progress.',
    tech: ['In progress'],
    image: '/character-hero.jpg',
    imageAlt: 'In progress project preview image.',
    liveUrl: '#',
  },
  {
    title: 'Project In Progress 02',
    summary: 'In progress.',
    tech: ['In progress'],
    image: '/character-hero.jpg',
    imageAlt: 'In progress project preview image.',
    liveUrl: '#',
  },
  {
    title: 'Project In Progress 03',
    summary: 'In progress.',
    tech: ['In progress'],
    image: '/character-hero.jpg',
    imageAlt: 'In progress project preview image.',
    liveUrl: '#',
  },
]

