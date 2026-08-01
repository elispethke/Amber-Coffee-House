# Accessibility Checklist

Automated coverage: `npm run test` runs `axe-core` against `Header`, `Newsletter`,
`Differentiators`, and `MenuFilters` (see `src/test/accessibility.test.tsx`). This checklist
covers manual verification on top of that automated baseline.

## Color contrast

- [ ] Body text (`espresso` on `cream`/`ivory`) meets WCAG AA (4.5:1) at normal size.
- [ ] Secondary text (`mocha` on `cream`/`sand`) meets WCAG AA at the size used.
- [ ] Gold accent text/icons on cream or white backgrounds meet at least AA for the context they're
      used in (decorative icons are exempt; label text is not).
- [ ] Hero text over the video maintains contrast against the darkest and lightest frames of the
      video (checked with the gradient overlay in place).
- [ ] Header nav text maintains contrast in both the transparent (over-hero) and scrolled
      (solid-background) states.

## Keyboard navigation

- [ ] Every interactive element (nav links, CTA buttons, filter pills, carousel arrows/dots,
      newsletter input/button, footer links) is reachable via `Tab` in a logical order.
- [ ] Focus is visible on every interactive element (`focus-visible` ring, not suppressed).
- [ ] The mobile menu traps focus sensibly while open and returns focus to the trigger button on
      close.
- [ ] The mobile menu can be opened, navigated, and closed using only the keyboard.
- [ ] No keyboard trap exists anywhere outside the intentional mobile menu overlay.

## Screen reader / semantics

- [ ] All images (currently placeholder media) expose a meaningful accessible name via
      `role="img"` + `aria-label` (product photos, gallery photos, about/location imagery).
- [ ] Decorative icons (differentiator icons, star ratings, arrows) are marked `aria-hidden="true"`
      so they aren't announced redundantly next to their labeled text.
- [ ] The mobile menu exposes `role="dialog"` + `aria-modal="true"` + an accessible name.
- [ ] Menu category filters expose their pressed state via `aria-pressed`.
- [ ] The newsletter form's email input has a programmatically associated label (visually hidden
      is acceptable) and `aria-invalid`/`aria-describedby` are set when validation fails.
- [ ] The newsletter status message uses `role="status"` + `aria-live="polite"` so screen reader
      users hear the outcome without losing focus position.
- [ ] Heading levels are hierarchical (one `h1` in the Hero, `h2` per section, no skipped levels).

## Forms

- [ ] Newsletter: submitting an empty or invalid email surfaces an error without a full page
      reload (`preventDefault` is in place).
- [ ] Newsletter: the error clears as soon as the user edits the field again, rather than
      persisting after it's been fixed.

## Motion

- [ ] With `prefers-reduced-motion: reduce` enabled at the OS level, scroll-reveal, parallax, and
      hover-lift animations are disabled or reduced to near-instant.
