import { Leaf, Flame, Home, Heart, type LucideIcon } from 'lucide-react'

export interface Differentiator {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: 'origins',
    icon: Leaf,
    title: 'Selected Origins',
    description: 'Beans sourced directly from small farms across three continents.',
  },
  {
    id: 'roast',
    icon: Flame,
    title: 'Artisan Roasting',
    description: 'Small batches, roasted daily in-house for peak flavor.',
  },
  {
    id: 'atmosphere',
    icon: Home,
    title: 'Warm Atmosphere',
    description: 'A space designed to feel like a second living room.',
  },
  {
    id: 'care',
    icon: Heart,
    title: 'Crafted with Care',
    description: 'Every cup poured by hand, with full attention to detail.',
  },
]
