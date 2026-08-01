import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('shows a validation error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText(/email address/i), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    expect(await screen.findByText(/valid email address/i)).toBeInTheDocument()
  })

  it('shows a success message after subscribing with a valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText(/email address/i), 'friend@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    expect(await screen.findByText(/welcome to amber & oak/i, {}, { timeout: 2000 })).toBeInTheDocument()
  })
})
