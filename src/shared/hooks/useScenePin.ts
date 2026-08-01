import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, prefersReducedMotion } from '@/shared/lib/gsap'

interface UseScenePinResult<T extends HTMLElement, W extends HTMLElement> {
  sceneRef: React.RefObject<T | null>
  wrapperRef: React.RefObject<W | null>
}

/**
 * Turns a section into a full-screen "scene": it slides up to cover the
 * previous scene on entry, stays put (via sticky positioning) while its own
 * content is scrolled through, then recedes — scaling down and dimming — as
 * the next scene slides over it in turn.
 *
 * The scroll trigger is measured against an untransformed wrapper (rather
 * than the animated element itself) so the entry transform can't skew the
 * trigger's own position measurement.
 */
export function useScenePin<
  T extends HTMLElement,
  W extends HTMLElement = HTMLDivElement,
>(): UseScenePinResult<T, W> {
  const sceneRef = useRef<T | null>(null)
  const wrapperRef = useRef<W | null>(null)

  useGSAP(() => {
    const element = sceneRef.current
    const trigger = wrapperRef.current
    if (!element || !trigger || prefersReducedMotion()) return

    gsap.fromTo(
      element,
      { y: '100vh' },
      {
        y: '0vh',
        ease: 'none',
        scrollTrigger: {
          trigger,
          start: 'top bottom',
          end: 'top top',
          scrub: 0.4,
        },
      },
    )

    gsap.fromTo(
      element,
      { scale: 1, filter: 'brightness(1)' },
      {
        scale: 0.92,
        filter: 'brightness(0.72)',
        ease: 'none',
        scrollTrigger: {
          trigger,
          start: 'bottom bottom',
          end: 'bottom top',
          scrub: 0.4,
        },
      },
    )
  }, [])

  return { sceneRef, wrapperRef }
}
