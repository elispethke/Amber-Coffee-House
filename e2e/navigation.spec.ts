import { test, expect } from '@playwright/test'

test.describe('primary navigation', () => {
  test('clicking a nav link scrolls to the matching section', async ({ page }) => {
    await page.goto('/')
    const header = page.getByRole('banner')

    await header.getByRole('link', { name: 'Menu', exact: true }).click()
    await expect(page.locator('#menu')).toBeInViewport()

    await header.getByRole('link', { name: 'About', exact: true }).click()
    await expect(page.locator('#about')).toBeInViewport()

    await header.getByRole('link', { name: 'Contact', exact: true }).click()
    await expect(page.locator('#contact')).toBeInViewport()
  })

  test('the hero CTAs scroll to the menu and about sections', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('link', { name: 'Order Online' }).first().click()
    await expect(page.locator('#menu')).toBeInViewport()

    await page.getByRole('link', { name: 'Our Story' }).click()
    await expect(page.locator('#about')).toBeInViewport()
  })
})
