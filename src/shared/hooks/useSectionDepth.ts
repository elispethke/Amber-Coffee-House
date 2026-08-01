import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, prefersReducedMotion } from '@/shared/lib/gsap'

/**
 * Gives a section a "settling into place" feel as it scrolls into view —
 * a scale + brightness ramp scrubbed to the section's own entry, rather than
 * a one-shot fade. Creates the layered, cinematic depth between sections.
 */
export function useSectionDepth<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useGSAP(() => {
    const element = ref.current
    if (!element || prefersReducedMotion()) return

    gsap.fromTo(
      element,
      { scale: 0.92, filter: 'brightness(0.8)' },
      {
        scale: 1,
        filter: 'brightness(1)',
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'center center',
          scrub: 0.8,
        },
      },
    )
  }, [])

  return ref
}
