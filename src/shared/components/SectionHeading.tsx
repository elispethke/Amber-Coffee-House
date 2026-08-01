import { clsx } from 'clsx'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow ? (
        <span className="mb-3 inline-block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-serif text-3xl font-medium text-espresso sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 font-sans text-base text-mocha sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
