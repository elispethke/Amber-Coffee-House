import { test, expect } from '@playwright/test'

test.describe('menu filters', () => {
  test('filtering by category shows only matching items', async ({ page }) => {
    await page.goto('/')

    const menuSection = page.locator('#menu')
    await menuSection.scrollIntoViewIfNeeded()

    await expect(menuSection.getByText('Espresso', { exact: true })).toBeVisible()
    await expect(menuSection.getByText('Iced Latte', { exact: true })).toBeVisible()

    await menuSection.getByRole('button', { name: 'Iced', exact: true }).click()

    await expect(menuSection.getByText('Iced Latte', { exact: true })).toBeVisible()
    await expect(menuSection.getByText('Espresso', { exact: true })).toHaveCount(0)

    await menuSection.getByRole('button', { name: 'All', exact: true }).click()
    await expect(menuSection.getByText('Espresso', { exact: true })).toBeVisible()
  })
})
