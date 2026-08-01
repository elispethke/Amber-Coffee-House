import { useRef, type RefObject } from 'react'
import { useScroll, useTransform, useReducedMotion, type MotionValue } from 'framer-motion'

interface UseParallaxResult {
  ref: RefObject<HTMLElement | null>
  y: MotionValue<number>
}

export function useParallax(distance = 120): UseParallaxResult {
  const ref = useRef<HTMLElement | null>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : distance])

  return { ref, y }
}
