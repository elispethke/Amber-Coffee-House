import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ProductCard } from './ProductCard'
import type { MenuItem } from '../types'

const item: MenuItem = {
  id: 'test-latte',
  name: 'Test Latte',
  price: '$5.25',
  description: 'A test-only description of a very fine latte.',
  category: 'Iced',
  image: '/assets/images/menu-iced-latte.jpg',
}

describe('ProductCard', () => {
  it('renders the product name, price, and description', () => {
    render(<ProductCard item={item} />)

    expect(screen.getByText('Test Latte')).toBeInTheDocument()
    expect(screen.getByText('$5.25')).toBeInTheDocument()
    expect(screen.getByText(item.description)).toBeInTheDocument()
  })
})
