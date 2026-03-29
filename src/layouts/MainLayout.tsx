import type { ReactNode } from 'react'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="relative flex-1 pb-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}
