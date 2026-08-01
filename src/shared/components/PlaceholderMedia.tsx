import type { LucideIcon } from 'lucide-react'
import { clsx } from 'clsx'

interface PlaceholderMediaProps {
  icon: LucideIcon
  label: string
  className?: string
  iconClassName?: string
}

export function PlaceholderMedia({
  icon: Icon,
  label,
  className,
  iconClassName,
}: PlaceholderMediaProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={clsx(
        'flex items-center justify-center bg-gradient-to-br from-sand via-cream to-sand',
        className,
      )}
    >
      <Icon className={clsx('text-mocha/35', iconClassName)} strokeWidth={1.25} aria-hidden="true" />
    </div>
  )
}
