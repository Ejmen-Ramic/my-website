import test, { expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('go to home', async ({ page }) => {
    // This will direct to the home page
    await page.goto('http://localhost:3000/')

    // Verify the page loaded successfully
    await expect(page).toHaveURL('http://localhost:3000/')
  })

  test('should display header with navigation links', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    // Wait for the header to appear and check visibility
    const header = page.locator('[data-testid="header"]')
    await expect(header).toBeVisible()

    // Verify the navigation links are visible using their testIDs
    const signatureHomeLink = page.locator(
      '[data-testid="signature-home-link"]'
    )
    const homeLink = page.locator('[data-testid="home-link"]')
    const resumeLink = page.locator('[data-testid="resume-link"]')
    const aboutLink = page.locator('[data-testid="about-link"]')
    const contactLink = page.locator('[data-testid="contact-link"]')

    await expect(signatureHomeLink).toBeVisible()
    await expect(homeLink).toBeVisible()
    await expect(resumeLink).toBeVisible()
    await expect(aboutLink).toBeVisible()
    await expect(contactLink).toBeVisible()
  })

  test('should navigate to the correct page when links are clicked', async ({
    page,
  }) => {
    await page.goto('http://localhost:3000/')

    await page.click('[data-testid="signature-home-link"]')
    await expect(page).toHaveURL('http://localhost:3000/')

    await page.click('[data-testid="home-link"]')
    await expect(page).toHaveURL('http://localhost:3000/')

    await page.click('[data-testid="resume-link"]')
    await expect(page).toHaveURL('http://localhost:3000/resume')

    await page.click('[data-testid="about-link"]')
    await expect(page).toHaveURL('http://localhost:3000/about')

    await page.click('[data-testid="contact-link"]')
    await expect(page).toHaveURL('http://localhost:3000/contact')
  })
})
