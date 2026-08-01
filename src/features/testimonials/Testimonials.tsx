import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { clsx } from 'clsx'
import { Container } from '@/shared/components/Container'
import { SectionHeading } from '@/shared/components/SectionHeading'
import { Reveal } from '@/shared/components/Reveal'
import { TESTIMONIALS } from './data'
import { useTestimonialCarousel } from './hooks/useTestimonialCarousel'
import { TestimonialCard } from './components/TestimonialCard'

export function Testimonials() {
  const { activeIndex, goNext, goPrev, goTo } = useTestimonialCarousel(TESTIMONIALS.length)
  const activeTestimonial = TESTIMONIALS[activeIndex]

  return (
    <section className="bg-sand/40 py-section-sm sm:py-section">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="Loved by our regulars" />

        <Reveal className="relative mt-12">
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="hidden shrink-0 rounded-full border border-mocha/20 p-3 text-espresso transition-colors hover:bg-ivory sm:block"
            >
              <ChevronLeft aria-hidden="true" size={20} />
            </button>

            <div className="w-full max-w-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                {activeTestimonial ? (
                  <motion.div
                    key={activeTestimonial.id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <TestimonialCard testimonial={activeTestimonial} />
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="hidden shrink-0 rounded-full border border-mocha/20 p-3 text-espresso transition-colors hover:bg-ivory sm:block"
            >
              <ChevronRight aria-hidden="true" size={20} />
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === activeIndex}
                className={clsx(
                  'h-2 rounded-full transition-all duration-300',
                  index === activeIndex ? 'w-6 bg-gold' : 'w-2 bg-mocha/25',
                )}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
