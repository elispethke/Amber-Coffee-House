import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders the brand and primary navigation', () => {
    render(<Header />)

    expect(screen.getByText('Amber & Oak')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Menu' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Order Online' })).toBeInTheDocument()
  })

  it('opens the mobile navigation when the hamburger button is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))

    expect(screen.getByRole('dialog', { name: /mobile navigation/i })).toBeInTheDocument()
  })

  it('closes the mobile navigation when the close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    await user.click(screen.getByRole('button', { name: /close menu/i }))

    await waitForElementToBeRemoved(() =>
      screen.queryByRole('dialog', { name: /mobile navigation/i }),
    )
  })
})
