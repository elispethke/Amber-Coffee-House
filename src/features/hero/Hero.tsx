import type { MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/shared/components/Button'
import { Container } from '@/shared/components/Container'
import { scrollToSection } from '@/shared/lib/scrollToSection'
import { useParallax } from './hooks/useParallax'
import { HeroVideo } from './components/HeroVideo'
import { HERO_CONTENT } from './content'

function handleAnchorClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
  event.preventDefault()
  scrollToSection(href)
}

export function Hero() {
  const { ref, y } = useParallax()

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex h-screen min-h-[640px] w-full items-center overflow-hidden bg-espresso"
    >
      <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-[10%]">
        <HeroVideo />
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/25 to-espresso/50"
      />

      <Container className="relative z-10">
        <div className="max-w-xl">
          <span className="mb-5 inline-block font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {HERO_CONTENT.eyebrow}
          </span>
          <h1 className="font-serif text-5xl font-medium leading-tight text-ivory sm:text-6xl lg:text-7xl">
            {HERO_CONTENT.title}
          </h1>
          <p className="mt-6 max-w-md font-sans text-base text-ivory/85 sm:text-lg">
            {HERO_CONTENT.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              href={HERO_CONTENT.primaryCta.href}
              variant="accent"
              onClick={(event: MouseEvent<HTMLAnchorElement>) =>
                handleAnchorClick(event, HERO_CONTENT.primaryCta.href)
              }
            >
              {HERO_CONTENT.primaryCta.label}
            </Button>
            <Button
              href={HERO_CONTENT.secondaryCta.href}
              variant="outline"
              onClick={(event: MouseEvent<HTMLAnchorElement>) =>
                handleAnchorClick(event, HERO_CONTENT.secondaryCta.href)
              }
            >
              {HERO_CONTENT.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
