import type { MenuItem } from './types'

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'espresso',
    name: 'Espresso',
    price: '$3.50',
    description: 'A double shot of our house blend, pulled slow for a rich, syrupy body.',
    category: 'Hot',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    price: '$4.50',
    description: 'Equal parts espresso, steamed milk, and microfoam, finished with cocoa dust.',
    category: 'Hot',
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    price: '$4.75',
    description: 'Velvety micro-foam over a double ristretto for a smooth, rounded cup.',
    category: 'Hot',
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    price: '$5.25',
    description: 'Vanilla-steamed milk marked with espresso and a thread of caramel.',
    category: 'Hot',
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    price: '$5.00',
    description: 'Chilled espresso and cold milk over hand-cracked ice, lightly sweetened.',
    category: 'Iced',
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    price: '$4.75',
    description: 'Steeped for eighteen hours for a naturally sweet, low-acid finish.',
    category: 'Iced',
  },
  {
    id: 'iced-mocha',
    name: 'Iced Mocha',
    price: '$5.50',
    description: 'Dark chocolate, espresso, and cold milk, topped with whipped cream.',
    category: 'Iced',
  },
  {
    id: 'almond-croissant',
    name: 'Almond Croissant',
    price: '$4.00',
    description: 'Laminated dough filled with almond cream, baked fresh every morning.',
    category: 'Desserts',
  },
  {
    id: 'cinnamon-roll',
    name: 'Cinnamon Roll',
    price: '$4.50',
    description: 'Soft-proofed dough, brown sugar swirl, and a warm vanilla glaze.',
    category: 'Desserts',
  },
  {
    id: 'tiramisu-slice',
    name: 'Tiramisu Slice',
    price: '$6.00',
    description: 'Espresso-soaked ladyfingers layered with mascarpone cream.',
    category: 'Desserts',
  },
]
