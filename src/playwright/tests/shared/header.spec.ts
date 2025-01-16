import test, { devices, expect } from '@playwright/test'

test.describe('test header desktop', async () => {
  // Header desktop
  test('should display header with navigation links', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    // Wait for the header to appear and check visibility
    const header = page.locator('[data-testid="header"]')
    await expect(header).toBeVisible()

    // Verify the navigation links are visible using their testIDs and navigate to the correct pages
    const menuItems = [
      { testId: 'home-link', href: '/' },
      { testId: 'resume-link', href: '/resume' },
      { testId: 'about-link', href: '/about' },
      { testId: 'contact-link', href: '/contact' },
    ]

    for (const { testId, href } of menuItems) {
      const link = page.locator(`[data-testid="${testId}"]`)
      await expect(link).toBeVisible()
      await link.click()
      await expect(page).toHaveURL(`http://localhost:3000${href}`)
    }
  })
})

// Header mobile
test.describe('test header mobile', async () => {
  test.use({ viewport: { width: 390, height: 844 } })
  test('should display header with navigation links', async ({ page }) => {
    await page.goto('http://localhost:3000/about')

    const header = page.locator('[data-testid="header-mobile"]')
    await expect(header).toBeVisible()

    const burger = page.locator('[data-testid="burger-button"]')
    await expect(burger).toBeVisible()
    await burger.click()

    await page.waitForTimeout(1000)

    await expect(page.locator('[data-testid="drawer"]')).toBeVisible()
    const menuItems = [
      { path: '/resume', label: 'Resume' },
      { path: '/about', label: 'About Me' },
      { path: '/contact', label: 'Contacts' },
      { path: '/', label: 'Home' },
    ]

    for (const { path, label } of menuItems) {
      const button = page.getByRole('button', { name: label })
      await expect(button).toBeVisible()
      await button.click()
      await expect(page).toHaveURL(`http://localhost:3000${path}`)

      await page.locator('[data-testid="burger-button"]').click()
    }

    const drawerCloseButton = page.locator(
      '[data-testid="drawer-close-button"]'
    )
    await expect(drawerCloseButton).toBeVisible()
    await drawerCloseButton.click()
    await expect(
      page.locator('[data-testid="drawer-close-button"]')
    ).not.toBeVisible()
  })
})
