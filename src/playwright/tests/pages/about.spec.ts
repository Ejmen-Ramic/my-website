import test, { expect } from '@playwright/test'
import { CommonTest } from '../models/commonTest'
import { aboutPageItems } from '../models/aboutPage'

test.describe('Test for About Page', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/about')
  })
  test('go to about and test shared all common elements', async ({ page }) => {
    await page.goto('http://localhost:3000/about')
    await expect(page).toHaveURL('http://localhost:3000/about')

    const commonTestElements = new CommonTest(page)
    await commonTestElements.checkAllElements()
  })

  test('should test if all components are visible', async ({ page }) => {
    const aboutIntro = page.locator('[data-testid="about-intro-component"]')
    await expect(aboutIntro).toBeVisible()

    const engineeringSkills = page.locator(
      '[data-testid="engineering-skills-component"]'
    )
    await expect(engineeringSkills).toBeVisible()

    const technicalSkills = page.locator('[data-testid="featured-projects-component"]')
    await expect (technicalSkills).toBeVisible()

    const milestonesComponent = page.locator(
      '[data-testid="milestones-component"]'
    )
    await expect(milestonesComponent).toBeVisible()
  })

  test('test technical skills ui elements', async ({ page }) => {
    for (const {triggerId, contentId} of aboutPageItems) {
      const trigger = page.locator(`[data-testid="${triggerId}"]`)
      await expect(trigger).toBeVisible()

      const popover = page.locator(`[data-testid="${contentId}"]`)
      await expect(popover).toBeVisible()
    
    }
  })

})
