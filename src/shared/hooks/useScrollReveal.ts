import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, CINEMATIC_EASE, prefersReducedMotion } from '@/shared/lib/gsap'

interface UseScrollRevealOptions {
  delay?: number
  y?: number
  scale?: number
  blur?: number
  duration?: number
}

export function useScrollReveal<T extends HTMLElement>({
  delay = 0,
  y = 56,
  scale = 0.9,
  blur = 16,
  duration = 1.3,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T | null>(null)

  useGSAP(() => {
    const element = ref.current
    if (!element) return

    if (prefersReducedMotion()) {
      gsap.set(element, { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', clipPath: 'inset(0% 0% 0% 0%)' })
      return
    }

    gsap.set(element, {
      opacity: 0,
      y,
      scale,
      filter: `blur(${blur}px)`,
      clipPath: 'inset(0% 0% 8% 0%)',
    })

    gsap.to(element, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      clipPath: 'inset(0% 0% 0% 0%)',
      duration,
      delay,
      ease: CINEMATIC_EASE,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })
  }, [delay, y, scale, blur, duration])

  return ref
}
