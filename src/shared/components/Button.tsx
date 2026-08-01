import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

export type ButtonVariant = 'primary' | 'outline' | 'accent'

interface BaseButtonProps {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
}

type ButtonAsButton = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
type ButtonAsAnchor = BaseButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

const baseStyles =
  'inline-flex items-center justify-center rounded-full px-8 py-3 font-sans text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold'

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-espresso text-ivory hover:bg-mocha hover:-translate-y-0.5 hover:shadow-soft',
  outline:
    'border border-ivory/70 text-ivory hover:bg-ivory hover:text-espresso hover:-translate-y-0.5',
  accent: 'bg-gold text-espresso hover:bg-mocha hover:text-ivory hover:-translate-y-0.5 hover:shadow-soft',
}

export function Button({ variant = 'primary', className, children, ...rest }: ButtonProps) {
  const styles = clsx(baseStyles, variantStyles[variant], className)

  if ('href' in rest && rest.href) {
    return (
      <a className={styles} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={styles} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
