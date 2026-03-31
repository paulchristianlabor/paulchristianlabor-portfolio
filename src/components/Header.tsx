import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import { navigation, profile } from '../data/portfolio'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="nav-blur w-full border-y border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.24)]">
        <div className="flex items-center justify-between gap-4 px-5 py-3">
          <a href="#hero" className="min-w-0" onClick={closeMenu}>
            <span className="block font-[Space_Grotesk] text-lg font-bold tracking-[-0.04em] text-white">
              {profile.name}
            </span>
            <span className="block text-xs text-slate-400">{profile.role}</span>
          </a>

          <nav aria-label="Primary navigation" className="ml-auto hidden md:block">
            <ul className="flex items-center justify-end gap-6 text-sm text-slate-300">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a className="transition hover:text-white" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/6 text-white md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {isOpen ? (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-white/10 px-5 py-4 md:hidden"
          >
            <ul className="flex flex-col gap-3 text-sm text-slate-200">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    className="block rounded-md px-3 py-2 hover:bg-white/6"
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  )
}
