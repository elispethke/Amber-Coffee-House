import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { MenuFilters } from './MenuFilters'

describe('MenuFilters', () => {
  it('marks the active filter as pressed', () => {
    render(<MenuFilters activeFilter="Hot" onChange={() => undefined} />)

    expect(screen.getByRole('button', { name: 'Hot' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Iced' })).toHaveAttribute('aria-pressed', 'false')
  })

  it('calls onChange with the selected category', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<MenuFilters activeFilter="All" onChange={onChange} />)

    await user.click(screen.getByRole('button', { name: 'Desserts' }))

    expect(onChange).toHaveBeenCalledWith('Desserts')
  })
})
