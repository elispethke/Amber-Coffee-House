import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Container } from '@/shared/components/Container'
import { Reveal } from '@/shared/components/Reveal'
import { useMaskReveal } from '@/shared/hooks/useMaskReveal'
import { useParallaxLayer } from '@/shared/hooks/useParallaxLayer'
import { useSectionDepth } from '@/shared/hooks/useSectionDepth'
import { LOCATION_CONTENT } from './content'

export function Location() {
  const sectionRef = useSectionDepth<HTMLElement>()
  const maskRef = useMaskReveal<HTMLDivElement>({ direction: 'right', scrub: true })
  const parallaxRef = useParallaxLayer<HTMLDivElement>({ distance: 100 })

  return (
    <section ref={sectionRef} id="contact" className="bg-cream py-section-sm sm:py-section">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div
          ref={maskRef}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-card"
        >
          <div ref={parallaxRef} className="absolute inset-x-0 -top-[15%] h-[130%] w-full">
            <img
              src="/assets/images/location-storefront.jpg"
              alt="Amber & Oak storefront exterior"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <Reveal delay={0.15}>
          <span className="mb-3 inline-block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {LOCATION_CONTENT.eyebrow}
          </span>
          <h2 className="font-serif text-3xl font-medium text-espresso sm:text-4xl">
            {LOCATION_CONTENT.title}
          </h2>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-gold" aria-hidden="true" size={22} />
              <p className="font-sans text-base text-mocha">
                {LOCATION_CONTENT.address.join(', ')}
              </p>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-1 shrink-0 text-gold" aria-hidden="true" size={22} />
              <dl className="font-sans text-base text-mocha">
                {LOCATION_CONTENT.hours.map((entry) => (
                  <div key={entry.day} className="flex justify-between gap-6 sm:w-80">
                    <dt>{entry.day}</dt>
                    <dd className="font-medium text-espresso">{entry.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 shrink-0 text-gold" aria-hidden="true" size={22} />
              <a href={`tel:${LOCATION_CONTENT.phone}`} className="link-underline font-sans text-base text-mocha">
                {LOCATION_CONTENT.phone}
              </a>
            </div>

            <div className="flex gap-4">
              <Mail className="mt-1 shrink-0 text-gold" aria-hidden="true" size={22} />
              <a
                href={`mailto:${LOCATION_CONTENT.email}`}
                className="link-underline font-sans text-base text-mocha"
              >
                {LOCATION_CONTENT.email}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
