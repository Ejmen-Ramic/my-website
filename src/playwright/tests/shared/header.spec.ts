import test, { expect } from '@playwright/test'

test.describe('test header desktop', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/')
  })
  // Header desktop
  test('should display header with navigation links', async ({ page }) => {
    // Wait for the header to appear and check visibility
    const header = page.locator('[data-testid="header"]')
    await expect(header).toBeVisible()

    // Verify the navigation links are visible using their testIDs and navigate to the correct pages
    const menuItems = [
      { testId: 'signature-home-link', href: '/' },
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
  test('should test language switcher destkop', async ({ page }) => {
    // Test English
    await page.locator('[data-testid="language-switcher-desktop"]').hover()
    await page.locator('[data-testid="desktop-language-option-en"]').click()
    const heroTextEnglish = page.locator('[data-testid="resume-text"]')
    await expect(heroTextEnglish).toBeVisible()
    await expect(heroTextEnglish).toHaveText('Resume')

    // Test Bosnian
    await page.locator('[data-testid="language-switcher-desktop"]').hover()
    await page.locator('[data-testid="desktop-language-option-ba"]').click()
    const heroTextBosnian = page.locator('[data-testid="resume-text"]')
    await expect(heroTextBosnian).toBeVisible()
    await expect(heroTextBosnian).toHaveText('Rezime')
  })
  test('should test color mode', async ({ page }) => {
    const colorModeButton = page.locator('[data-testid="color-mode-toggle"]')
    const header = page.locator('[data-testid="header"]')

    await expect(colorModeButton).toBeVisible()
    await expect(header).toBeVisible()
    // Test light mode
    let headerBg = await header.evaluate(
      (el) => window.getComputedStyle(el).backgroundColor
    )
    expect(headerBg).toBe('rgb(237, 242, 247)')

    let moonIcon = await colorModeButton.locator('svg').first()
    await expect(moonIcon).toBeVisible()

    // Test dark mode
    await colorModeButton.click()
    headerBg = await header.evaluate(
      (el) => window.getComputedStyle(el).backgroundColor
    )
    expect(headerBg).toBe('rgb(43, 51, 61)')

    let sunIcon = await colorModeButton.locator('svg').first()
    await expect(sunIcon).toBeVisible()

    // Test light mode again
    await colorModeButton.click()
    headerBg = await header.evaluate(
      (el) => window.getComputedStyle(el).backgroundColor
    )
    expect(headerBg).toBe('rgb(237, 242, 247)')
  })
})

// Header mobile
test.describe('test header mobile', async () => {
  test.use({ viewport: { width: 390, height: 844 } })
  test('should display drawer and close it', async ({ page }) => {
    await page.goto('http://localhost:3000/about')

    const header = page.locator('[data-testid="header-mobile"]')
    await expect(header).toBeVisible()

    // Tests if burger opens the drawer
    const burger = page.locator('[data-testid="burger-button"]')
    await expect(burger).toBeVisible()
    await burger.click()

    await page.waitForTimeout(1000)

    // Tests the drawer close button
    const drawerCloseButton = page.locator(
      '[data-testid="drawer-close-button"]'
    )
    await expect(drawerCloseButton).toBeVisible()
    await drawerCloseButton.click()
    await expect(
      page.locator('[data-testid="drawer-close-button"]')
    ).not.toBeVisible()
  })

  test('should display header with navigation links', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    const signature = page.locator('[data-testid="signature-home-link"]')
    await expect(signature).toBeVisible()
    await expect(signature).toHaveAttribute('href', '/')

    await page.goto('http://localhost:3000/about')

    await page.locator('[data-testid="burger-button"]').click()
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
  })
  test('should test langauge switcher on mobile', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    // Test English
    await page.locator('[data-testid="burger-button"]').click()
    await page.locator('[data-testid="language-switcher-mobile"]').click()
    await page.locator('[data-testid="mobile-language-option-en"]').click()
    await page.locator('[data-testid="drawer-close-button"]').click()
    const heroTextEnglish = page.locator('[data-testid="resume-text"]')
    await expect(heroTextEnglish).toBeVisible()
    await expect(heroTextEnglish).toHaveText('Resume')

    // Test Bosnian
    await page.locator('[data-testid="burger-button"]').click()
    await page.locator('[data-testid="language-switcher-mobile"]').click()
    await page.locator('[data-testid="mobile-language-option-ba"]').click()
    await page.locator('[data-testid="drawer-close-button"]').click()
    const heroTextBosnian = page.locator('[data-testid="resume-text"]')
    await expect(heroTextBosnian).toBeVisible()
    await expect(heroTextBosnian).toHaveText('Rezime')
  })
})
