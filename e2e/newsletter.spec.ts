import { test, expect } from '@playwright/test'

test.describe('newsletter signup', () => {
  test('shows a validation message for an invalid email', async ({ page }) => {
    await page.goto('/')

    const emailInput = page.getByLabel('Email address')
    await emailInput.fill('not-an-email')
    await page.getByRole('button', { name: 'Subscribe' }).click()

    await expect(page.getByText('Please enter a valid email address.')).toBeVisible()
  })

  test('shows a success message for a valid email', async ({ page }) => {
    await page.goto('/')

    const emailInput = page.getByLabel('Email address')
    await emailInput.fill('friend@example.com')
    await page.getByRole('button', { name: 'Subscribe' }).click()

    await expect(page.getByText(/welcome to amber & oak/i)).toBeVisible()
  })
})
