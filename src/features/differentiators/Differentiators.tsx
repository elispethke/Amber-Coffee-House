import { Container } from '@/shared/components/Container'
import { SectionHeading } from '@/shared/components/SectionHeading'
import { Reveal } from '@/shared/components/Reveal'
import { DIFFERENTIATORS } from './data'

export function Differentiators() {
  return (
    <section className="bg-cream py-section-sm sm:py-section">
      <Container>
        <SectionHeading
          eyebrow="Why Amber & Oak"
          title="Why our regulars keep coming back"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIATORS.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <div className="flex h-full flex-col items-center rounded-2xl bg-ivory p-8 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
                  <item.icon className="text-gold" size={28} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-lg text-espresso">{item.title}</h3>
                <p className="mt-2 font-sans text-sm text-mocha">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
