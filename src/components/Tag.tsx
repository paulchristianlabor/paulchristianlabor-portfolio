import type { ReactNode } from 'react'

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/6 px-3 py-1 text-xs font-medium text-slate-200">
      {children}
    </span>
  )
}
