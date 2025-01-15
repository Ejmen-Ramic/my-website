import test, { expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('go to home', async ({ page }) => {
    // This will direct to the home page
    await page.goto('http://localhost:3000/')

    // Verify the page loaded successfully
    await expect(page).toHaveURL('http://localhost:3000/')
  })
})
