import { useEffect, useRef, useState, type RefObject } from 'react'

interface UseIntersectionRevealOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

interface UseIntersectionRevealResult<T extends HTMLElement> {
  ref: RefObject<T | null>
  isInView: boolean
}

export function useIntersectionReveal<T extends HTMLElement>({
  threshold = 0.2,
  rootMargin = '0px 0px -80px 0px',
  once = true,
}: UseIntersectionRevealOptions = {}): UseIntersectionRevealResult<T> {
  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) observer.unobserve(node)
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, isInView }
}
