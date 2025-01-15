import test, { devices, expect } from '@playwright/test'

test.describe('test header desktop', async () => {
  // Header desktop
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

// Header mobile
test.describe('test header mobile', async () => {
  test.use({ viewport: { width: 390, height: 844 } })
  test('should display header with navigation links', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    const header = page.locator('[data-testid="header-mobile"]')
    await expect(header).toBeVisible()

    const burger = page.locator('[data-testid="burger-button"]')
    await expect(burger).toBeVisible()
    await burger.click()

    await page.waitForTimeout(1000)

    await expect(page.locator('[data-testid="drawer"]')).toBeVisible()
    const menuItems = [
      { path: '/', label: 'Home' },
      { path: '/resume', label: 'Resume' },
      { path: '/about', label: 'About Me' },
      { path: '/contact', label: 'Contacts' },
    ]

    for (const { path, label } of menuItems) {
      //   const button = page.locator(`[data-testId=${item.testId}]`)
      //   await expect(button).toBeVisible()
      //   await button.click()
      //   await expect(page).toHaveURL(item.expectedUrl)
      //   await burger.click()
      const button = page.getByRole('button', { name: label })
      await expect(button).toBeVisible()
      await button.click()
      await expect(page).toHaveURL(`http://localhost:3000/${path}`)
      // Reopen drawer for next iteration
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
