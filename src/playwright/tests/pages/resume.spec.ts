import test, { expect } from "@playwright/test"
import { CommonTest } from "../models/commonTest"

test.describe('Resume Page', () => {
    test.beforeEach(async ({ page }) => {
      // This will direct to the resume page
      await page.goto('http://localhost:3000/resume')
    })
    test('go to resume', async ({ page }) => {
      // Verify the page loaded successfully
      await expect(page).toHaveURL('http://localhost:3000/resume')
    })
    test('test if all components are visible', async ({ page }) => {
      const commonTestElements = new CommonTest(page);
      await commonTestElements.checkAllElements();

      const resume = page.locator('[data-testid="resume-component"]')
      await expect(resume).toBeVisible()
  
      const languageSwitcherResume = page.locator('[data-testid="language-switcher-resume"]')
      await expect(languageSwitcherResume).toBeVisible()
  
      const sourceCode = page.locator('[data-testid="source-code"]')
      await expect(sourceCode).toBeVisible()
  
      const pdfFetcher = page.locator('[data-testid="pdfFetcher"]')
      await expect(pdfFetcher).toBeVisible()
    })
    test('language switcher resume', async ({ page }) => {
      const languageSwitcherResume = page.locator('[data-testid="language-switcher-resume"]')
      await expect(languageSwitcherResume).toBeVisible()

      // Test Bosnian
      await page.locator('[data-testid="language-switcher-resume"]').click()
      const heroTextBosnian = page.locator('[data-testid="education-text"]')
      await expect(heroTextBosnian).toBeVisible()
      await expect(heroTextBosnian).toHaveText('Edukacija')
      
      // Test English
      await page.locator('[data-testid="language-switcher-resume"]').click()
      const heroTextEnglish = page.locator('[data-testid="education-text"]')
      await expect(heroTextEnglish).toBeVisible()
      await expect(heroTextEnglish).toHaveText('Education')

      

    })
  })