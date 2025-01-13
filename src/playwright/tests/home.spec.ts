import test, { expect } from '@playwright/test'

test.describe('Home Page', () => {
  // This will direct to the home page
  test('go to home', async ({ page }) => {
    // Go to the home page
    await page.goto('localhost:3000/')

    // Verify the page loaded successfully
    await expect(page).toHaveURL('https://localhost:3000/')
  })
})
