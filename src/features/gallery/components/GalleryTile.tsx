import { useMaskReveal } from '@/shared/hooks/useMaskReveal'
import type { GalleryPhoto } from '../data'

const DIRECTIONS = ['left', 'up', 'right'] as const

interface GalleryTileProps {
  photo: GalleryPhoto
  index: number
}

export function GalleryTile({ photo, index }: GalleryTileProps) {
  const direction = DIRECTIONS[index % DIRECTIONS.length] ?? 'up'
  const maskRef = useMaskReveal<HTMLDivElement>({ direction, delay: (index % 3) * 0.08 })

  return (
    <div ref={maskRef} className="aspect-square w-full overflow-hidden rounded-2xl">
      <img
        src={photo.image}
        alt={photo.label}
        loading="lazy"
        className="h-full w-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
  )
}
