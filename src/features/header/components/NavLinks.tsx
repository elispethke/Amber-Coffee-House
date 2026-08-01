import type { MouseEvent } from 'react'
import { clsx } from 'clsx'
import type { NavLink } from '@/shared/constants/site'
import { scrollToSection } from '@/shared/lib/scrollToSection'

interface NavLinksProps {
  links: NavLink[]
  className?: string
  linkClassName?: string
  onNavigate?: () => void
}

export function NavLinks({ links, className, linkClassName, onNavigate }: NavLinksProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault()
    scrollToSection(href)
    onNavigate?.()
  }

  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            onClick={(event) => handleClick(event, link.href)}
            className={clsx('link-underline font-sans text-sm font-medium', linkClassName)}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
