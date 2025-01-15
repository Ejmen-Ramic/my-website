import test, { expect } from '@playwright/test'

test.describe('Test footer', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/')
  })

  test('should display footer', async ({ page }) => {
    const footer = page.locator('[data-testid="footer"]')
    await expect(footer).toBeVisible()
  })

  test('should display all navigation links', async ({ page }) => {
    const footer = page.locator('[data-testid="footer"]')
    await expect(footer).toBeVisible()

    const links = {
      home: page.locator('[data-testid="footer-home-link"]'),
      resume: page.locator('[data-testid="footer-resume-link"]'),
      about: page.locator('[data-testid="footer-about-link"]'),
      contact: page.locator('[data-testid="footer-contact-link"]'),
    }

    for (const link of Object.values(links)) {
      await expect(link).toBeVisible()
    }
  })

  test('links should have a correct href attribute', async ({ page }) => {
    const footer = page.locator('[data-testid="footer"]')
    await expect(footer).toBeVisible()
    const linkTest = [
      { testId: 'footer-home-link', href: '/' },
      { testId: 'footer-resume-link', href: '/resume' },
      { testId: 'footer-about-link', href: '/about' },
      { testId: 'footer-contact-link', href: '/contact' },
    ]
    for (const { testId, href } of linkTest) {
      const link = page.locator(`[data-testid="${testId}"]`)
      await expect(link).toHaveAttribute('href', href)

      await link.click()
      await expect(page).toHaveURL(`http://localhost:3000${href}`)
    }
  })
})
