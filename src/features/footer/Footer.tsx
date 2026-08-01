import type { MouseEvent } from 'react'
import { NAV_LINKS, SITE_NAME, SITE_TAGLINE, SOCIAL_LINKS } from '@/shared/constants/site'
import { Container } from '@/shared/components/Container'
import { scrollToSection } from '@/shared/lib/scrollToSection'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-espresso py-16 text-ivory">
      <Container className="flex flex-col items-center gap-10 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div>
          <span className="font-serif text-2xl">{SITE_NAME}</span>
          <p className="mt-2 font-sans text-sm uppercase tracking-[0.2em] text-ivory/60">
            {SITE_TAGLINE}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-col items-center gap-3 sm:items-start">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                    event.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className="link-underline font-sans text-sm text-ivory/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-sans text-sm uppercase tracking-[0.2em] text-ivory/60">Follow</p>
          <ul className="mt-3 flex justify-center gap-4 sm:justify-start">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline font-sans text-sm text-ivory/80"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <p className="mt-12 text-center font-sans text-xs text-ivory/50">
        © {currentYear} {SITE_NAME}. All rights reserved.
      </p>
    </footer>
  )
}
