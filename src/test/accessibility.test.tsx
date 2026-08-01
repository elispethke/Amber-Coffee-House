import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Header } from '@/features/header/Header'
import { Newsletter } from '@/features/newsletter/Newsletter'
import { Differentiators } from '@/features/differentiators/Differentiators'
import { MenuFilters } from '@/features/menu/components/MenuFilters'

describe('accessibility', () => {
  it('Header has no axe violations', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })

  it('Newsletter has no axe violations', async () => {
    const { container } = render(<Newsletter />)
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })

  it('Differentiators has no axe violations', async () => {
    const { container } = render(<Differentiators />)
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })

  it('MenuFilters has no axe violations', async () => {
    const { container } = render(<MenuFilters activeFilter="All" onChange={() => undefined} />)
    const results = await axe(container)
    expect(results.violations).toEqual([])
  })
})
