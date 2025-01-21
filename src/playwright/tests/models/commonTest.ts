// CommonPage.ts
import { Page, expect } from '@playwright/test'

export class CommonTest {
  private page: Page

  constructor(page: Page) {
    this.page = page
  }

  // Desktop test
  async checkDesktopElements() {
    const header = this.page.locator('[data-testid="header"]')
    await expect(header).toBeVisible()

    const footer = this.page.locator('[data-testid="footer"]')
    await expect(footer).toBeVisible()
  }

  // Mobile test
  async checkMobileElements() {
    await this.page.setViewportSize({ width: 390, height: 844 })

    const headerMobile = this.page.locator('[data-testid="header-mobile"]')
    await expect(headerMobile).toBeVisible()
  }

  async checkAllElements() {
    await this.checkDesktopElements()
    await this.checkMobileElements()
  }
}
