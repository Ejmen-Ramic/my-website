import test, { expect } from '@playwright/test'
import { beforeEach } from 'node:test'

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    // This will direct to the home page
    await page.goto('http://localhost:3000/')
  })
  test('go to home', async ({ page }) => {
    // Verify the page loaded successfully
    await expect(page).toHaveURL('http://localhost:3000/')
  })
  test('test all buttons', async ({ page }) => {
    // Resume button on hero component
    const resumeButton = page.locator('[data-testid="resume-link-home"]')
    await resumeButton.click()
    await expect(page).toHaveURL('http://localhost:3000/resume')

    await page.goto('http://localhost:3000/')

    // Need More Info button on WelcomePart component
    const needMoreInfoButton = page.locator(
      '[data-testid="need-more-info-link"]'
    )
    await needMoreInfoButton.click()
    await expect(page).toHaveURL('http://localhost:3000/about')

    await page.goto('http://localhost:3000/')

    // Test read more button on
    const testimonialItems = [
      {
        id: '[id="popover-trigger-\\:rf\\:"]',
        text: '[id="popover-body-\\:rf\\:"]',
      },
      {
        id: '[id="popover-trigger-\\:rj\\:"]',
        text: '[id="popover-body-\\:rj\\:"]',
      },
      {
        id: '[id="popover-trigger-\\:rn\\:"]',
        text: '[id="popover-body-\\:rn\\:"]',
      },
    ]
    for (const { id, text } of testimonialItems) {
      const readMoreButton = page.locator(id)
      await readMoreButton.click()
      const popover = page.locator(text)
      await expect(popover).toBeVisible()
    }
  })
})
