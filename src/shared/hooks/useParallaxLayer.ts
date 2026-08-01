import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, prefersReducedMotion } from '@/shared/lib/gsap'

interface UseParallaxLayerOptions {
  distance?: number
}

export function useParallaxLayer<T extends HTMLElement>({
  distance = 60,
}: UseParallaxLayerOptions = {}) {
  const ref = useRef<T | null>(null)

  useGSAP(() => {
    const element = ref.current
    if (!element || prefersReducedMotion()) return

    gsap.fromTo(
      element,
      { y: -distance / 2 },
      {
        y: distance / 2,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      },
    )
  }, [distance])

  return ref
}
