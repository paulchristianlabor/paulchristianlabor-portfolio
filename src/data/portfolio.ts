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
    title: 'Restaurant Website',
    summary:
      'An elegant fine dining restaurant website with reservation booking, curated menu showcase, photo gallery, and smooth Angular-powered interactions.',
    tech: [
      'Angular 21',
      'TypeScript',
      'Tailwind CSS 4',
      'RxJS',
      'Font Awesome',
    ],
    image: '/character-hero.jpg',
    imageAlt: 'Restaurant Landing Page project preview image.',
    liveUrl: 'https://restaurant.paulchristianlabor.com',
  },
  {
    title: 'Mobile Application Website',
    summary:
      'A clean, conversion-focused landing page for a mobile productivity app featuring feature highlights, testimonials, and a compelling call-to-action.',
    tech: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'Framer Motion',
      'Radix UI',
      'Zod',
    ],
    image: '/character-hero.jpg',
    imageAlt: 'Mobile App Landing Page project preview image.',
    liveUrl: 'https://mobile-application.paulchristianlabor.com',
  },
  {
    title: 'Gym Fitness Website',
    summary:
      'A high-energy fitness brand landing page built with Vue 3, featuring animated sections, program showcases, trainer profiles, and a contact form.',
    tech: [
      'Vue 3',
      'Vite 6',
      'TypeScript',
      'Tailwind CSS 4',
      'VueUse Motion',
      'Font Awesome',
    ],
    image: '/character-hero.jpg',
    imageAlt: 'Gym Fitness Landing Page project preview image.',
    liveUrl: 'https://gym-fitness.paulchristianlabor.com',
  },
]

