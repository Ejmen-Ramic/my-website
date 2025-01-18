import test, { expect } from '@playwright/test'
import { beforeEach } from 'node:test'
import { faqItems, testimonialItems } from './models/homePage'

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    // This will direct to the home page
    await page.goto('http://localhost:3000/')
  })
  test('go to home', async ({ page }) => {
    // Verify the page loaded successfully
    await expect(page).toHaveURL('http://localhost:3000/')
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
  test('test all buttons', async ({ page }) => {
    // Resume button on hero component
    const resumeButton = page.locator('[data-testid="resume-link-home"]')
    await resumeButton.click()
    await expect(page).toHaveURL('http://localhost:3000/resume')

    await page.goto('http://localhost:3000/')

    // Need More Info button on WelcomePart component
    const needMoreInfoButton = page.locator(
      '[data-testid="need-more-info-link"]'
    )
    await needMoreInfoButton.click()
    await expect(page).toHaveURL('http://localhost:3000/about')

    await page.goto('http://localhost:3000/')

    // Test read more button on
    for (const { id, text } of testimonialItems) {
      const readMoreButton = page.locator(id)
      await readMoreButton.click()
      const popover = page.locator(text)
      await expect(popover).toBeVisible()
    }
  })
  test('test FAQ', async ({ page }) => {
    const faq = page.locator('[data-testid="faq-component"]')
    await expect(faq).toBeVisible()

    for (const { id, text } of faqItems) {
      const faqAccordion = page.getByRole('button', { name: id })
      await faqAccordion.click()
      const accordionItem = page.getByLabel(text)
      await expect(accordionItem).toBeVisible()
      await faqAccordion.click()
    }
  })
  test('test FAQ mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })

    const faq = page.locator('[data-testid="faq-component"]')
    await expect(faq).toBeVisible()

    // Open first accordion and verify it's visible
    const firstAccordion = page.getByRole('button', { name: faqItems[0].id })
    const firstContent = page.getByLabel(faqItems[0].text)
    await firstAccordion.click()
    await expect(firstContent).toBeVisible()

    // Click second accordion and verify:
    // 1. First accordion content is now hidden
    // 2. Second accordion content is visible
    const secondAccordion = page.getByRole('button', { name: faqItems[1].id })
    const secondContent = page.getByLabel(faqItems[1].text)
    await secondAccordion.click()
    await expect(firstContent).toBeHidden()
    await expect(secondContent).toBeVisible()

    if (faqItems.length > 2) {
      const thirdAccordion = page.getByRole('button', { name: faqItems[2].id })
      const thirdContent = page.getByLabel(faqItems[2].text)
      await thirdAccordion.click()
      await expect(secondContent).toBeHidden()
      await expect(thirdContent).toBeVisible()
    }
  })
})
