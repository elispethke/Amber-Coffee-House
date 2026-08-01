import { useState } from 'react'

interface UseTestimonialCarouselResult {
  activeIndex: number
  goNext: () => void
  goPrev: () => void
  goTo: (index: number) => void
}

export function useTestimonialCarousel(itemCount: number): UseTestimonialCarouselResult {
  const [activeIndex, setActiveIndex] = useState(0)

  function goNext() {
    setActiveIndex((current) => (current + 1) % itemCount)
  }

  function goPrev() {
    setActiveIndex((current) => (current - 1 + itemCount) % itemCount)
  }

  function goTo(index: number) {
    setActiveIndex(index)
  }

  return { activeIndex, goNext, goPrev, goTo }
}
