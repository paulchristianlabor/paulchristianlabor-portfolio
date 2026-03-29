import type { ReactNode } from 'react'

import { cn } from '../utils/cn'

type SectionProps = {
  id: string
  ariaLabel?: string
  className?: string
  children: ReactNode
}

export function Section({ id, ariaLabel, className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn('section-shell scroll-mt-28', className)}
    >
      {children}
    </section>
  )
}
