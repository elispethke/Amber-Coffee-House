import { Container } from '@/shared/components/Container'
import { SectionHeading } from '@/shared/components/SectionHeading'
import { Reveal } from '@/shared/components/Reveal'
import { PlaceholderMedia } from '@/shared/components/PlaceholderMedia'
import { GALLERY_PHOTOS } from './data'

export function Gallery() {
  return (
    <section className="bg-cream py-section-sm sm:py-section">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="A look inside Amber & Oak"
          description="The details, the light, and the people that make the room feel like home."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {GALLERY_PHOTOS.map((photo, index) => (
            <Reveal key={photo.id} delay={index * 0.05} className="overflow-hidden rounded-2xl">
              <PlaceholderMedia
                icon={photo.icon}
                label={photo.label}
                className="aspect-square w-full cursor-pointer transition-transform duration-500 hover:scale-110"
                iconClassName="h-9 w-9"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
