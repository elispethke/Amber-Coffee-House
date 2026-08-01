# Test Plan — Amber & Oak

## Scope

Covers the single-page marketing site: Header, Hero, About, Menu, Differentiators, Gallery,
Testimonials, Location, Newsletter, and Footer.

## Test layers

| Layer | Tool | What it covers | Command |
| --- | --- | --- | --- |
| Unit / hooks | Vitest | Custom hook behavior in isolation (state transitions, not implementation details) | `npm run test` |
| Component | Vitest + React Testing Library | Critical UI components render correctly and respond to user interaction | `npm run test` |
| Accessibility | Vitest + axe-core (`vitest-axe`) | No automatically-detectable a11y violations on key components | `npm run test` |
| End-to-end | Playwright (Chromium) | Real-browser user flows across the running app | `npm run test:e2e` |
| Static analysis | ESLint (strict, `--max-warnings 0`) | Code quality, hooks rules, jsx-a11y rules | `npm run lint` |
| Type safety | TypeScript (`strict`, `noUncheckedIndexedAccess`) | Type correctness across the whole project | `npm run typecheck` |

All five commands must pass with zero errors before a change is considered done.

## What is tested, and how

### Hooks (unit)

- `useMediaQuery` — returns the initial match state and reacts to `change` events.
- `useScrollPosition` — returns the initial `scrollY` and updates on `scroll` events.
- `useMenuFilter` — defaults to showing all items; filtering narrows results to the selected
  category only.
- `useTestimonialCarousel` — starts at index 0; `goPrev`/`goNext` wrap around the array bounds.
- `useNewsletterForm` — rejects invalid emails without entering a submitting state, clears the
  error once the user edits the field again, and resolves to `success` for a valid email.

Acceptance criteria: each hook is tested through its public return value (state + actions), never
through internal implementation, so the tests survive refactors that don't change behavior.

### Components

- `Header` — renders the brand, nav links, and CTA; opens/closes the mobile menu on
  hamburger/close button clicks.
- `ProductCard` — renders name, price, and description from a `MenuItem`.
- `MenuFilters` — reflects the active filter via `aria-pressed`; calls `onChange` with the clicked
  category.
- `Newsletter` — shows a validation message for an invalid email and a success message for a valid
  one (integration of the component with its hook).

Acceptance criteria: tests query by role/label/text the way a user or assistive technology would
(no test IDs, no snapshot of markup).

### Accessibility

- Automated `axe-core` scans on `Header`, `Newsletter`, `Differentiators`, and `MenuFilters` must
  report zero violations.
- Manual checks are tracked separately in `qa/checklist-acessibilidade.md`.

### End-to-end (Playwright)

- **Navigation**: clicking each header nav link scrolls the matching section into the viewport;
  the hero's primary and secondary CTAs scroll to Menu and About respectively.
- **Menu filters**: selecting a category (e.g. "Iced") shows only matching products and hides
  others; selecting "All" restores the full list.
- **Newsletter**: submitting an invalid email shows the validation message; submitting a valid
  email shows the success message.
- **Responsive**: a single test exercises both a mobile viewport (375×812 — hamburger visible,
  desktop nav hidden) and a desktop viewport (1280×800 — desktop nav visible, hamburger hidden) in
  sequence; a second test opens the mobile menu and navigates to a section from it.

Acceptance criteria: all E2E specs pass against the real dev server (`npm run dev`) in Chromium,
headless, with no flaky retries required locally.

## Out of scope for automation

- Visual regression / pixel-diffing (not configured in this pass).
- Cross-browser matrix beyond Chromium (Playwright config currently defines one project; add
  Firefox/WebKit projects if browser coverage becomes a requirement).
- Real network requests (the newsletter "subscribe" call is simulated client-side; there is no
  backend in this project).
