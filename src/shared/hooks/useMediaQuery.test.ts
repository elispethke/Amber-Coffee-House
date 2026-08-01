import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { useMediaQuery } from './useMediaQuery'

function mockMatchMedia(matches: boolean) {
  const listeners: ((event: MediaQueryListEvent) => void)[] = []
  const mediaQueryList = {
    matches,
    media: '',
    addEventListener: (_event: string, listener: (event: MediaQueryListEvent) => void) => {
      listeners.push(listener)
    },
    removeEventListener: vi.fn(),
  }

  vi.stubGlobal(
    'matchMedia',
    vi.fn().mockReturnValue(mediaQueryList),
  )

  return { listeners }
}

describe('useMediaQuery', () => {
  it('returns the current match state on mount', () => {
    mockMatchMedia(true)

    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'))

    expect(result.current).toBe(true)
  })

  it('updates when the media query change event fires', () => {
    const { listeners } = mockMatchMedia(false)

    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'))
    expect(result.current).toBe(false)

    act(() => {
      listeners.forEach((listener) => listener({ matches: true } as MediaQueryListEvent))
    })

    expect(result.current).toBe(true)
  })
})
