import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useScrollPosition } from './useScrollPosition'

describe('useScrollPosition', () => {
  it('returns the initial window scroll position', () => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })

    const { result } = renderHook(() => useScrollPosition())

    expect(result.current).toBe(0)
  })

  it('updates when the window scrolls', () => {
    const { result } = renderHook(() => useScrollPosition())

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 240, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current).toBe(240)
  })
})
