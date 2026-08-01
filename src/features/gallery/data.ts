import { Coffee, Sofa, Croissant, Users, Sprout, Sun, type LucideIcon } from 'lucide-react'

export interface GalleryPhoto {
  id: string
  icon: LucideIcon
  label: string
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  { id: 'latte-art', icon: Coffee, label: 'Latte art on a flat white' },
  { id: 'lounge', icon: Sofa, label: 'Cozy lounge seating area' },
  { id: 'pastries', icon: Croissant, label: 'Fresh pastries on display' },
  { id: 'community', icon: Users, label: 'Regulars chatting at the counter' },
  { id: 'beans', icon: Sprout, label: 'Green coffee beans before roasting' },
  { id: 'patio', icon: Sun, label: 'Morning light on the patio' },
]
