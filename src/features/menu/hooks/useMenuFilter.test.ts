import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useMenuFilter } from './useMenuFilter'
import { MENU_ITEMS } from '../data'

describe('useMenuFilter', () => {
  it('returns every item when the filter is "All"', () => {
    const { result } = renderHook(() => useMenuFilter())

    expect(result.current.activeFilter).toBe('All')
    expect(result.current.filteredItems).toHaveLength(MENU_ITEMS.length)
  })

  it('filters items to the selected category', () => {
    const { result } = renderHook(() => useMenuFilter())

    act(() => {
      result.current.setActiveFilter('Iced')
    })

    expect(result.current.filteredItems.length).toBeGreaterThan(0)
    expect(result.current.filteredItems.every((item) => item.category === 'Iced')).toBe(true)
  })
})
