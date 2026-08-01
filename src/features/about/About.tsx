import { Container } from '@/shared/components/Container'
import { useScenePin } from '@/shared/hooks/useScenePin'
import { ABOUT_CONTENT } from './content'

export function About() {
  const { sceneRef, wrapperRef } = useScenePin<HTMLElement>()

  return (
    <div ref={wrapperRef} className="relative">
      <section
        ref={sceneRef}
        id="about"
        className="relative z-10 flex min-h-screen flex-col justify-center bg-cream py-section-sm motion-safe:sticky motion-safe:top-0 sm:py-section"
      >
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-card">
            <img
              src="/assets/images/about-roastery.jpg"
              alt="Barista scooping freshly roasted beans at the Amber & Oak roastery"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
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
          </div>
        </Container>
      </section>
    </div>
  )
}
