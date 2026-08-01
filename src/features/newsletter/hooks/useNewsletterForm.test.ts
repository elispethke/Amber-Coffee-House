import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import type { ChangeEvent, FormEvent } from 'react'
import { useNewsletterForm } from './useNewsletterForm'

function changeEvent(value: string): ChangeEvent<HTMLInputElement> {
  return { target: { value } } as ChangeEvent<HTMLInputElement>
}

function submitEvent(): FormEvent<HTMLFormElement> {
  return { preventDefault: () => undefined } as FormEvent<HTMLFormElement>
}

describe('useNewsletterForm', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('rejects an invalid email without entering the submitting state', () => {
    const { result } = renderHook(() => useNewsletterForm())

    act(() => {
      result.current.handleEmailChange(changeEvent('not-an-email'))
    })
    act(() => {
      result.current.handleSubmit(submitEvent())
    })

    expect(result.current.status).toBe('error')
    expect(result.current.errorMessage).toMatch(/valid email/i)
  })

  it('clears the error state once the user edits the email again', () => {
    const { result } = renderHook(() => useNewsletterForm())

    act(() => {
      result.current.handleEmailChange(changeEvent('not-an-email'))
    })
    act(() => {
      result.current.handleSubmit(submitEvent())
    })
    expect(result.current.status).toBe('error')

    act(() => {
      result.current.handleEmailChange(changeEvent('friend@example.com'))
    })

    expect(result.current.status).toBe('idle')
    expect(result.current.errorMessage).toBeNull()
  })

  it('accepts a valid email and resolves to success', () => {
    const { result } = renderHook(() => useNewsletterForm())

    act(() => {
      result.current.handleEmailChange(changeEvent('friend@example.com'))
    })
    act(() => {
      result.current.handleSubmit(submitEvent())
    })

    expect(result.current.status).toBe('submitting')

    act(() => {
      vi.runAllTimers()
    })

    expect(result.current.status).toBe('success')
    expect(result.current.email).toBe('')
  })
})
