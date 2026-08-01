import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useIntersectionReveal } from '../hooks/useIntersectionReveal'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, isInView } = useIntersectionReveal<HTMLDivElement>()
  const shouldReduceMotion = useReducedMotion()
  const isVisible = isInView || Boolean(shouldReduceMotion)

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
