import { useState, type ChangeEvent, type FormEvent } from 'react'
import { validateEmail } from '@/shared/lib/validateEmail'

type NewsletterStatus = 'idle' | 'submitting' | 'success' | 'error'

interface UseNewsletterFormResult {
  email: string
  status: NewsletterStatus
  errorMessage: string | null
  handleEmailChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

const SUBMIT_DELAY_MS = 600

export function useNewsletterForm(): UseNewsletterFormResult {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<NewsletterStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
    if (status === 'error') {
      setStatus('idle')
      setErrorMessage(null)
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!validateEmail(email)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address.')
      return
    }

    setStatus('submitting')
    setErrorMessage(null)

    window.setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, SUBMIT_DELAY_MS)
  }

  return { email, status, errorMessage, handleEmailChange, handleSubmit }
}
