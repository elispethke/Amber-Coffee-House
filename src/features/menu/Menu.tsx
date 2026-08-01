import { Container } from '@/shared/components/Container'
import { SectionHeading } from '@/shared/components/SectionHeading'
import { Reveal } from '@/shared/components/Reveal'
import { useSectionDepth } from '@/shared/hooks/useSectionDepth'
import { useMenuFilter } from './hooks/useMenuFilter'
import { MenuFilters } from './components/MenuFilters'
import { ProductCard } from './components/ProductCard'

export function Menu() {
  const sectionRef = useSectionDepth<HTMLElement>()
  const { activeFilter, setActiveFilter, filteredItems } = useMenuFilter()

  return (
    <section ref={sectionRef} id="menu" className="bg-sand/40 py-section-sm sm:py-section">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Menu"
            title="Featured favorites"
            description="A short list of what we make best — hot, iced, and just sweet enough."
          />
        </Reveal>

        <div className="mt-10">
          <MenuFilters activeFilter={activeFilter} onChange={setActiveFilter} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <Reveal key={item.id} delay={Math.min(index, 5) * 0.06}>
              <ProductCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
