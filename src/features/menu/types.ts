export type MenuCategory = 'Hot' | 'Iced' | 'Desserts'

export interface MenuItem {
  id: string
  name: string
  price: string
  description: string
  category: MenuCategory
  image: string
}
