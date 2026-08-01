import { useEffect, useRef, type MouseEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { NAV_LINKS } from '@/shared/constants/site'
import { Button } from '@/shared/components/Button'
import { scrollToSection } from '@/shared/lib/scrollToSection'
import { NavLinks } from './NavLinks'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    closeButtonRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex flex-col bg-cream md:hidden"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-serif text-xl text-espresso">Amber &amp; Oak</span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-full p-2 text-espresso transition-colors hover:bg-sand"
            >
              <X aria-hidden="true" size={24} />
            </button>
          </div>

          <NavLinks
            links={NAV_LINKS}
            onNavigate={onClose}
            className="flex flex-1 flex-col items-center justify-center gap-8"
            linkClassName="text-2xl text-espresso"
          />

          <div className="flex justify-center pb-12">
            <Button
              href="#menu"
              variant="accent"
              onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                event.preventDefault()
                scrollToSection('#menu')
                onClose()
              }}
            >
              Order Online
            </Button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
