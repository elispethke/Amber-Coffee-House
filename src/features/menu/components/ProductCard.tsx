import { Coffee, CupSoda, Cookie, type LucideIcon } from 'lucide-react'
import { PlaceholderMedia } from '@/shared/components/PlaceholderMedia'
import type { MenuCategory, MenuItem } from '../types'

const CATEGORY_ICONS: Record<MenuCategory, LucideIcon> = {
  Hot: Coffee,
  Iced: CupSoda,
  Desserts: Cookie,
}

interface ProductCardProps {
  item: MenuItem
}

export function ProductCard({ item }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-ivory shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <PlaceholderMedia
        icon={CATEGORY_ICONS[item.category]}
        label={`Photo of ${item.name}`}
        className="aspect-square w-full transition-transform duration-500 group-hover:scale-105"
        iconClassName="h-10 w-10"
      />

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
