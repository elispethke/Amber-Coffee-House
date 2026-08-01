import { test, expect } from '@playwright/test'

test.describe('responsive layout', () => {
  test('shows a hamburger menu on mobile and full navigation on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/')
    const header = page.getByRole('banner')

    await expect(page.getByRole('button', { name: 'Open menu' })).toBeVisible()
    await expect(header.getByRole('link', { name: 'Menu', exact: true })).toBeHidden()

    await page.setViewportSize({ width: 1280, height: 800 })

    await expect(page.getByRole('button', { name: 'Open menu' })).toBeHidden()
    await expect(header.getByRole('link', { name: 'Menu', exact: true })).toBeVisible()
  })

  test('the mobile menu opens and navigates to a section', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/')

    await page.getByRole('button', { name: 'Open menu' }).click()

    const mobileNav = page.getByRole('dialog', { name: 'Mobile navigation' })
    await expect(mobileNav).toBeVisible()

    await mobileNav.getByRole('link', { name: 'About', exact: true }).click()

    await expect(page.locator('#about')).toBeInViewport()
  })
})
