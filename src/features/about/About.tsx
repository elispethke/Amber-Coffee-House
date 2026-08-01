import { Coffee } from 'lucide-react'
import { Container } from '@/shared/components/Container'
import { PlaceholderMedia } from '@/shared/components/PlaceholderMedia'
import { Reveal } from '@/shared/components/Reveal'
import { ABOUT_CONTENT } from './content'

export function About() {
  return (
    <section id="about" className="bg-cream py-section-sm sm:py-section">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <PlaceholderMedia
            icon={Coffee}
            label="Photo of the Amber & Oak roastery"
            className="aspect-[4/5] w-full rounded-3xl shadow-card"
            iconClassName="h-16 w-16"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <span className="mb-3 inline-block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {ABOUT_CONTENT.eyebrow}
          </span>
          <h2 className="font-serif text-3xl font-medium text-espresso sm:text-4xl">
            {ABOUT_CONTENT.title}
          </h2>

          <div className="mt-6 space-y-4">
            {ABOUT_CONTENT.paragraphs.map((paragraph) => (
              <p key={paragraph} className="font-sans text-base text-mocha sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-sand pt-8">
            {ABOUT_CONTENT.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-sans text-xs uppercase tracking-wide text-mocha/70">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-serif text-2xl text-espresso">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  )
}
