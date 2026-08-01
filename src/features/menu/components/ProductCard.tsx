import { useMaskReveal } from '@/shared/hooks/useMaskReveal'
import type { MenuItem } from '../types'

interface ProductCardProps {
  item: MenuItem
}

export function ProductCard({ item }: ProductCardProps) {
  const maskRef = useMaskReveal<HTMLDivElement>({ direction: 'up', delay: 0.1 })

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-ivory shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div ref={maskRef} className="aspect-square w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-xl text-espresso">{item.name}</h3>
          <span className="font-sans text-base font-semibold text-gold">{item.price}</span>
        </div>
        <p className="mt-2 flex-1 font-sans text-sm text-mocha">{item.description}</p>
        <button
          type="button"
          className="link-underline mt-4 self-start font-sans text-sm font-semibold text-espresso"
        >
          View more
        </button>
      </div>
    </article>
  )
}
