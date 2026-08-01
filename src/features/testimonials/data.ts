export interface Testimonial {
  id: string
  name: string
  location: string
  quote: string
  rating: number
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'maria',
    name: 'Maria Alves',
    location: 'Regular since 2019',
    quote:
      'The flat white here ruined every other coffee shop for me. The room feels like somebody’s living room, in the best way.',
    rating: 5,
  },
  {
    id: 'daniel',
    name: 'Daniel Okafor',
    location: 'Local business owner',
    quote:
      'I run half my meetings out of this place. Fast wifi, warm light, and the staff remembers my order.',
    rating: 5,
  },
  {
    id: 'priya',
    name: 'Priya Nair',
    location: 'Weekend regular',
    quote: 'Their cold brew is dangerously good. I come for coffee and stay for the cinnamon rolls.',
    rating: 5,
  },
  {
    id: 'thiago',
    name: 'Thiago Souza',
    location: 'Neighbor',
    quote: 'You can tell they actually care about the beans. Every cup tastes intentional.',
    rating: 4,
  },
]
