import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { cn } from '../utils/cn'

type CardProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

export function Card<T extends ElementType = 'div'>({
  as,
  children,
  className,
  ...props
}: CardProps<T>) {
  const Tag = as ?? 'div'

  return (
    <Tag className={cn('surface-card', className)} {...props}>
      {children}
    </Tag>
  )
}
