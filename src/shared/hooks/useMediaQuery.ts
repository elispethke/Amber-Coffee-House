import { useEffect, useState } from 'react'

export function useMediaQuery(query: string): boolean {
  const [trackedQuery, setTrackedQuery] = useState(query)
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  if (trackedQuery !== query) {
    setTrackedQuery(query)
    setMatches(window.matchMedia(query).matches)
  }

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)

    function handleChange(event: MediaQueryListEvent) {
      setMatches(event.matches)
    }

    mediaQueryList.addEventListener('change', handleChange)
    return () => mediaQueryList.removeEventListener('change', handleChange)
  }, [query])

  return matches
}
