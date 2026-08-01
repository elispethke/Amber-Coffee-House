import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, CINEMATIC_EASE_SOFT, prefersReducedMotion } from '@/shared/lib/gsap'

type MaskDirection = 'left' | 'right' | 'up' | 'down'

interface UseMaskRevealOptions {
  direction?: MaskDirection
  delay?: number
  duration?: number
  /** Ties the wipe directly to scroll position instead of playing once on enter. */
  scrub?: boolean
}

const CLIP_START: Record<MaskDirection, string> = {
  left: 'inset(0% 100% 0% 0%)',
  right: 'inset(0% 0% 0% 100%)',
  up: 'inset(100% 0% 0% 0%)',
  down: 'inset(0% 0% 100% 0%)',
}

export function useMaskReveal<T extends HTMLElement>({
  direction = 'up',
  delay = 0,
  duration = 1.2,
  scrub = false,
}: UseMaskRevealOptions = {}) {
  const ref = useRef<T | null>(null)

  useGSAP(() => {
    const element = ref.current
    if (!element) return

    if (prefersReducedMotion()) {
      gsap.set(element, { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 })
      return
    }

    gsap.fromTo(
      element,
      { clipPath: CLIP_START[direction], scale: 1.2 },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        scale: 1,
        duration: scrub ? undefined : duration,
        delay: scrub ? undefined : delay,
        ease: scrub ? 'none' : CINEMATIC_EASE_SOFT,
        scrollTrigger: scrub
          ? {
              trigger: element,
              start: 'top bottom',
              end: 'top 35%',
              scrub: 0.8,
            }
          : {
              trigger: element,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
      },
    )
  }, [direction, delay, duration, scrub])

  return ref
}
