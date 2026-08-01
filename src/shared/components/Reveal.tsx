import type { ReactNode } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useScrollReveal<HTMLDivElement>({ delay })

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
