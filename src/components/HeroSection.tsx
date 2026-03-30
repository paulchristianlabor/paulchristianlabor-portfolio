import { profile } from '../data/portfolio'
import { Button } from './Button'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col justify-center px-4 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-center lg:gap-10">
        <div className="flex flex-col order-2 lg:order-1 lg:self-start items-center lg:items-start">
          <span className="section-kicker lg:self-start">{profile.role}</span>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 sm:text-sm">
            Hi, my name is
          </p>
          <h1 className="mt-2 max-w-4xl text-5xl leading-[0.95] sm:text-6xl lg:text-7xl text-center lg:text-left">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl text-center lg:text-left">
            Web Developer focused on modern and responsive websites
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button href="#projects">View projects</Button>
          </div>
        </div>

        <div className="flex justify-center order-1 lg:order-2">
          <img
            src="/character-hero.jpg"
            alt="Paul Christian Labor hero"
            className="h-64 w-64 rounded-full object-cover ring-1 ring-white/15 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
          />
        </div>
      </div>
    </section>
  )
}
