import { Star } from 'lucide-react'
import type { Testimonial } from '../data'

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .toUpperCase()
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="mx-auto flex h-full max-w-2xl flex-col items-center rounded-2xl bg-ivory p-10 text-center shadow-soft">
      <div className="flex items-center justify-center rounded-full bg-gold/15 font-serif text-lg text-mocha h-14 w-14" aria-hidden="true">
        {getInitials(testimonial.name)}
      </div>

      <div className="mt-4 flex gap-1" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={16}
            className={index < testimonial.rating ? 'fill-gold text-gold' : 'text-sand'}
          />
        ))}
      </div>

      <blockquote className="mt-4 font-serif text-xl leading-relaxed text-espresso sm:text-2xl">
        “{testimonial.quote}”
      </blockquote>

      <figcaption className="mt-6 font-sans text-sm text-mocha">
        <span className="font-semibold text-espresso">{testimonial.name}</span>
        {' — '}
        {testimonial.location}
      </figcaption>
    </figure>
  )
}
