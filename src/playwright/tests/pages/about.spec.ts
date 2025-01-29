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

  test('should open and close popovers correctly', async ({ page }) => {
    const triggerSelector = (index: number) => `[data-testid="engineering-skills-trigger-${index}"]`;
    const popoverContentSelector = (index: number) => `[data-testid="engineering-skills-popover-content-${index}"]`
    const popoverHeader = (index: number) => `[data-testid="engineering-skills-popover-header-${index}"]`;
    const popoverBody = (index: number) => `[data-testid="engineering-skills-popover-body-${index}"]`;

    const skillsCount = await page.locator('[data-testid^="engineering-skills-trigger-"]').count();
  
    for (let i = 0; i < skillsCount; i++) {
      const trigger = page.locator(triggerSelector(i));
      
      // Click trigger and verify popover is visible
      await trigger.click();
      await expect(page.locator(popoverContentSelector(i))).toBeVisible();
      await expect(page.locator(popoverBody(i))).toBeVisible();
      await expect(page.locator(popoverHeader(i))).toBeVisible();
  
      // Click next trigger and verify previous popover is closed
      if (i > 0) {
        const previousPopover = page.locator(popoverContentSelector(i - 1));
        await expect(previousPopover).not.toBeVisible();
      }
    }
  });
  
})
