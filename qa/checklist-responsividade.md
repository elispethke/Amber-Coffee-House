# Responsiveness Checklist

Manual pass across the required breakpoints. Automated coverage for the mobile/desktop nav
behavior lives in `e2e/responsive.spec.ts`; this checklist is for what automation doesn't (or
can't cheaply) verify — real visual judgment.

Breakpoints to test: **375px** (mobile), **768px** (tablet portrait), **1024px** (tablet
landscape), **1280px** (laptop), **1920px** (large desktop).

For each breakpoint, check every row below.

## Header

- [ ] Logo, nav, and CTA never overlap or wrap awkwardly.
- [ ] Below 768px: hamburger icon is shown, inline nav links and desktop CTA are hidden.
- [ ] At/above 768px: inline nav links and CTA are shown, hamburger is hidden.
- [ ] Mobile menu overlay covers the full viewport with no horizontal scroll.
- [ ] Header background/text contrast transitions cleanly on scroll at every width.

## Hero

- [ ] Video fills the hero without distorting (object-fit: cover) at every width.
- [ ] Heading, subheading, and both CTAs stay legible over the video at every width.
- [ ] Hero never clips the floating cup/steam focal point on short (landscape-phone-height)
      viewports.
- [ ] CTAs stack or stay inline sensibly (no overlapping buttons).

## About

- [ ] Image and text stack vertically on mobile, sit side-by-side from tablet landscape up.
- [ ] Stats row (Founded / Beans roasted / Regulars) never overflows or wraps mid-number.

## Menu

- [ ] Grid shows 1 column on mobile, 2 on tablet, 3 on desktop.
- [ ] Filter pills wrap cleanly instead of overflowing horizontally on narrow screens.
- [ ] Product card image, name, price, and description never overlap.

## Differentiators / Gallery / Testimonials / Location / Newsletter / Footer

- [ ] Differentiator cards: 1 column mobile → 2 tablet → 4 desktop, no orphaned single card in a
      row that looks unbalanced.
- [ ] Gallery grid: 2 columns mobile → 3 columns tablet/desktop, images stay square (no
      stretching).
- [ ] Testimonial card and prev/next arrows remain usable with a thumb on mobile (arrows may hide
      below `sm` per design — confirm dot pagination remains reachable).
- [ ] Location: map placeholder and address/hours stack vertically on mobile, side-by-side from
      desktop.
- [ ] Newsletter input and button stack on mobile, sit inline from `sm` up; button never shrinks
      below a comfortably tappable size.
- [ ] Footer columns stack centered on mobile, spread into three aligned columns on desktop.

## Cross-cutting

- [ ] No horizontal scrollbar appears at any breakpoint.
- [ ] Tap targets (buttons, links) are at least 44×44px on mobile.
- [ ] Text never overflows its container or gets clipped.
