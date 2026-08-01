export interface GalleryPhoto {
  id: string
  image: string
  label: string
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  { id: 'latte-art', image: '/assets/images/gallery-latte-art.jpg', label: 'Latte art on a flat white' },
  { id: 'lounge', image: '/assets/images/gallery-lounge.jpg', label: 'Cozy lounge seating area' },
  { id: 'pastries', image: '/assets/images/gallery-pastries.jpg', label: 'Fresh pastries on display' },
  { id: 'community', image: '/assets/images/gallery-community.jpg', label: 'Regulars chatting over coffee' },
  { id: 'beans', image: '/assets/images/gallery-beans.jpg', label: 'Roasted coffee beans' },
  { id: 'patio', image: '/assets/images/gallery-patio.jpg', label: 'Morning light on the patio' },
]
