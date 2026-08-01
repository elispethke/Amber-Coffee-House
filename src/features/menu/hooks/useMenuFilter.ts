import { useMemo, useState } from 'react'
import { MENU_ITEMS } from '../data'
import type { MenuCategory, MenuItem } from '../types'

export type MenuFilterOption = 'All' | MenuCategory

export const MENU_FILTER_OPTIONS: MenuFilterOption[] = ['All', 'Hot', 'Iced', 'Desserts']

interface UseMenuFilterResult {
  activeFilter: MenuFilterOption
  setActiveFilter: (filter: MenuFilterOption) => void
  filteredItems: MenuItem[]
}

export function useMenuFilter(): UseMenuFilterResult {
  const [activeFilter, setActiveFilter] = useState<MenuFilterOption>('All')

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return MENU_ITEMS
    return MENU_ITEMS.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return { activeFilter, setActiveFilter, filteredItems }
}
