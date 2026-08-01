import { Container } from '@/shared/components/Container'
import { SectionHeading } from '@/shared/components/SectionHeading'
import { Reveal } from '@/shared/components/Reveal'
import { useSectionDepth } from '@/shared/hooks/useSectionDepth'
import { GALLERY_PHOTOS } from './data'
import { GalleryTile } from './components/GalleryTile'

export function Gallery() {
  const sectionRef = useSectionDepth<HTMLElement>()

  return (
    <section ref={sectionRef} className="bg-cream py-section-sm sm:py-section">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="A look inside Amber & Oak"
            description="The details, the light, and the people that make the room feel like home."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {GALLERY_PHOTOS.map((photo, index) => (
            <GalleryTile key={photo.id} photo={photo} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
