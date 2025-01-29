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
  test('test copy email button', async ({ page }) => {
    const emailButton = page.getByTestId('email-button')
    const tooltip = page.getByTestId('email-tooltip')

    await emailButton.hover()
    await expect(tooltip).toHaveText('Copy Email')

    await emailButton.click()
    await expect(tooltip).toHaveText('Email Copied!')
  })
  test('should test social media buttons', async ({ page }) => {
    const socialMediaItems = [
      {
        id: '[data-testid="github-link"]',
        href: 'https://github.com/Ejmen-Ramic/',
        icon: 'github-icon',
      },
      {
        id: '[data-testid="x-link"]',
        href: 'https://x.com/EjmenRamic',
        icon: 'x-icon',
      },
      {
        id: '[data-testid="linkedin-link"]',
        href: 'https://www.linkedin.com/in/ejmen-rami%C4%87-a882601a4/?originalSubdomain=my',
        icon: 'linkedin-icon',
      },
    ]

    for (const { id, href, icon } of socialMediaItems) {
      const button = page.locator(id)
      await button.hover()
      await expect(button).toBeVisible()
      await expect(button).toHaveAttribute('href', href)
      const iconLocator = page.locator(`[data-testid="${icon}"]`)
      await expect(iconLocator).toBeVisible()
    }
  })
})
