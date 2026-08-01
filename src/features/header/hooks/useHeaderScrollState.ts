import { useScrollPosition } from '@/shared/hooks/useScrollPosition'

const SCROLL_THRESHOLD = 24

interface HeaderScrollState {
  isScrolled: boolean
}

export function useHeaderScrollState(): HeaderScrollState {
  const scrollY = useScrollPosition()
  return { isScrolled: scrollY > SCROLL_THRESHOLD }
}
