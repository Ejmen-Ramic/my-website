import test, { expect } from '@playwright/test'
import { CommonTest } from '../models/commonTest'

test.describe('Test for Contact Page', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/contact')
  })
  test('go to contact', async ({ page }) => {
    await expect(page).toHaveURL('http://localhost:3000/contact')
  })
  test('should test if all components are visible', async ({ page }) => {
    const commonTestElements = new CommonTest(page)
    await commonTestElements.checkAllElements()

    const contactForm = page.locator('[data-testid="contact-form"]')
    await expect(contactForm).toBeVisible()
  })
})
