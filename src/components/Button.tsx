import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'

import { cn } from '../utils/cn'

type SharedProps = {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

type LinkButtonProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'> & {
    href: string
  }

type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    href?: never
  }

type ButtonProps = LinkButtonProps | NativeButtonProps

function isLinkButton(props: ButtonProps): props is LinkButtonProps {
  return typeof (props as LinkButtonProps).href === 'string'
}

const baseStyles =
  'inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none'

const variants = {
  primary:
    'border-transparent bg-(--color-accent) text-slate-950 hover:-translate-y-0.5 hover:bg-(--color-accent-strong)',
  secondary:
    'border-white/12 bg-white/6 text-white hover:border-(--color-accent)/50 hover:bg-white/10',
  ghost: 'border-transparent bg-transparent text-slate-300 hover:text-white',
}

export function Button(props: ButtonProps) {
  if (isLinkButton(props)) {
    const {
      children,
      className,
      href,
      variant = 'primary',
      ...anchorProps
    } = props

    return (
      <a
        className={cn(baseStyles, variants[variant], className)}
        href={href}
        {...anchorProps}
      >
        {children}
      </a>
    )
  }

  const {
    children,
    className,
    type = 'button',
    variant = 'primary',
    ...buttonProps
  } = props

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      type={type}
      {...buttonProps}
    >
      {children}
    </button>
  )
}
