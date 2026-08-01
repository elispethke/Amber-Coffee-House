import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useTestimonialCarousel } from './useTestimonialCarousel'

describe('useTestimonialCarousel', () => {
  it('starts at the first index', () => {
    const { result } = renderHook(() => useTestimonialCarousel(3))
    expect(result.current.activeIndex).toBe(0)
  })

  it('wraps to the last index when going previous from the first', () => {
    const { result } = renderHook(() => useTestimonialCarousel(3))

    act(() => {
      result.current.goPrev()
    })

    expect(result.current.activeIndex).toBe(2)
  })

  it('wraps to the first index when advancing past the last', () => {
    const { result } = renderHook(() => useTestimonialCarousel(3))

    act(() => {
      result.current.goTo(2)
    })
    act(() => {
      result.current.goNext()
    })

    expect(result.current.activeIndex).toBe(0)
  })
})
