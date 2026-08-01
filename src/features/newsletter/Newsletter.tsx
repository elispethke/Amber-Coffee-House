import { clsx } from 'clsx'
import { Container } from '@/shared/components/Container'
import { Reveal } from '@/shared/components/Reveal'
import { useSectionDepth } from '@/shared/hooks/useSectionDepth'
import { useNewsletterForm } from './hooks/useNewsletterForm'

export function Newsletter() {
  const sectionRef = useSectionDepth<HTMLElement>()
  const { email, status, errorMessage, handleEmailChange, handleSubmit } = useNewsletterForm()

  return (
    <section ref={sectionRef} className="bg-espresso py-section-sm sm:py-section">
      <Container className="max-w-2xl text-center">
        <Reveal>
          <span className="mb-3 inline-block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Stay in the loop
          </span>
          <h2 className="font-serif text-3xl font-medium text-ivory sm:text-4xl">
            Fresh roasts, seasonal drinks, and first dibs on events
          </h2>
          <p className="mt-4 font-sans text-base text-ivory/80">
            One short email a month. No spam, just what's brewing at Amber & Oak.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row" noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={handleEmailChange}
              aria-invalid={status === 'error'}
              aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
              className="flex-1 rounded-full border border-ivory/30 bg-ivory/10 px-6 py-3 font-sans text-ivory placeholder:text-ivory/50 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="rounded-full bg-gold px-8 py-3 font-sans text-sm font-semibold text-espresso transition-all duration-300 hover:bg-ivory disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>

          <p
            role="status"
            aria-live="polite"
            className={clsx(
              'mt-4 font-sans text-sm',
              status === 'error' && 'text-red-300',
              status === 'success' && 'text-gold',
            )}
            id={status === 'error' ? 'newsletter-error' : undefined}
          >
            {status === 'error' ? errorMessage : null}
            {status === 'success' ? 'You’re on the list — welcome to Amber & Oak.' : null}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
