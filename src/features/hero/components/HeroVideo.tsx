import { ASSET_PATHS } from '@/shared/constants/assets'

export function HeroVideo() {
  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      poster={ASSET_PATHS.heroPoster}
      preload="auto"
      aria-hidden="true"
    >
      <source src={ASSET_PATHS.heroVideoWebm} type="video/webm" />
      <source src={ASSET_PATHS.heroVideoMp4} type="video/mp4" />
    </video>
  )
}
