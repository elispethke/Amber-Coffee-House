import { useRef, useState, type MouseEvent } from 'react'
import { clsx } from 'clsx'
import { Menu } from 'lucide-react'
import { NAV_LINKS } from '@/shared/constants/site'
import { Button } from '@/shared/components/Button'
import { Container } from '@/shared/components/Container'
import { scrollToSection } from '@/shared/lib/scrollToSection'
import { useHeaderScrollState } from './hooks/useHeaderScrollState'
import { NavLinks } from './components/NavLinks'
import { MobileMenu } from './components/MobileMenu'

export function Header() {
  const { isScrolled } = useHeaderScrollState()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuTriggerRef = useRef<HTMLButtonElement>(null)

  function closeMobileMenu() {
    setIsMobileMenuOpen(false)
    menuTriggerRef.current?.focus()
  }

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-40 transition-all duration-400',
        isScrolled
          ? 'bg-cream/95 shadow-soft backdrop-blur-md'
          : 'bg-gradient-to-b from-espresso/40 via-espresso/10 to-transparent',
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#home"
          onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault()
            scrollToSection('#home')
          }}
          className={clsx(
            'font-serif text-2xl tracking-wide transition-colors duration-400',
            isScrolled ? 'text-espresso' : 'text-ivory',
          )}
        >
          Amber &amp; Oak
        </a>

        <NavLinks
          links={NAV_LINKS}
          className="hidden items-center gap-10 md:flex"
          linkClassName={clsx('transition-colors duration-400', isScrolled ? 'text-espresso' : 'text-ivory')}
        />

        <div className="hidden md:block">
          <Button
            href="#menu"
            variant="accent"
            onClick={(event: MouseEvent<HTMLAnchorElement>) => {
              event.preventDefault()
              scrollToSection('#menu')
            }}
          >
            Order Online
          </Button>
        </div>

        <button
          ref={menuTriggerRef}
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
          className={clsx(
            'rounded-full p-2 transition-colors duration-400 md:hidden',
            isScrolled ? 'text-espresso' : 'text-ivory',
          )}
        >
          <Menu aria-hidden="true" size={26} />
        </button>
      </Container>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  )
}
