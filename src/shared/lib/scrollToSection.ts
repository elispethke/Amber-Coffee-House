export function scrollToSection(href: string): void {
  if (!href.startsWith('#')) return

  const target = document.querySelector(href)
  if (!(target instanceof HTMLElement)) return

  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
