import type { ReactNode } from 'react'
import { clsx } from 'clsx'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section'
}

export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={clsx('mx-auto w-full max-w-container px-6 sm:px-8 lg:px-12', className)}>
      {children}
    </Tag>
  )
}
