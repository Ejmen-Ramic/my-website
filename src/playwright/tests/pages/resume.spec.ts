import test, { expect } from "@playwright/test"

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
      const hero = page.locator('[data-testid="welcome-component"]')
      await expect(hero).toBeVisible()
  
      const chooseToLearn = page.locator('[data-testid="choose-to-learn-component"]')
      await expect(chooseToLearn).toBeVisible()
  
      const reasonsToChoose = page.locator('[data-testid="reasons-to-choose-component"]')
      await expect(reasonsToChoose).toBeVisible()
  
      const endorsement = page.locator('[data-testid="endorsement-component"]')
      await expect(endorsement).toBeVisible()
  
      const faq = page.locator('[data-testid="faq-component"]')
      await expect(faq).toBeVisible()
    })
  })