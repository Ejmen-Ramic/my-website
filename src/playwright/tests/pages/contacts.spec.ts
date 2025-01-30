import test, { expect } from '@playwright/test'
import { CommonTest } from '../models/commonTest'

test.describe('Test for Contact Page', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/contact')
  })
  test('go to contact', async ({ page }) => {
    await expect(page).toHaveURL('http://localhost:3000/contact')
  })
  test('should test if all components are visible', async ({ page }) => {
    const commonTestElements = new CommonTest(page)
    await commonTestElements.checkAllElements()

    const contactForm = page.locator('[data-testid="contact-form"]')
    await expect(contactForm).toBeVisible()
  })
  test('test copy email button', async ({ page }) => {
    const emailButton = page.getByTestId('email-button')
    const tooltip = page.getByTestId('email-tooltip')

    await emailButton.hover()
    await expect(tooltip).toHaveText('Copy Email')

    await emailButton.click()
    await expect(tooltip).toHaveText('Email Copied!')
  })
  test('should test social media buttons', async ({ page }) => {
    const socialMediaItems = [
      {
        id: '[data-testid="github-link"]',
        href: 'https://github.com/Ejmen-Ramic/',
        icon: 'github-icon',
      },
      {
        id: '[data-testid="x-link"]',
        href: 'https://x.com/EjmenRamic',
        icon: 'x-icon',
      },
      {
        id: '[data-testid="linkedin-link"]',
        href: 'https://www.linkedin.com/in/ejmen-rami%C4%87-a882601a4/?originalSubdomain=my',
        icon: 'linkedin-icon',
      },
    ]

    for (const { id, href, icon } of socialMediaItems) {
      const button = page.locator(id)
      await button.hover()
      await expect(button).toBeVisible()
      await expect(button).toHaveAttribute('href', href)
      const iconLocator = page.locator(`[data-testid="${icon}"]`)
      await expect(iconLocator).toBeVisible()
    }
  })
  test('should test the filling of the contact form', async ({ page }) => {
    const contactForm = page.locator('[data-testid="contact-form"]')
    await expect(contactForm).toBeVisible()

    const contactFormTitle = contactForm.locator('[data-testid="contact-form-title"]')
    await expect(contactFormTitle).toBeVisible()
     
    const contactItems = [
      { testId: 'name-input', formName: 'Name', fill:'Test' },
      { testId: 'email-input', formName: 'Email', fill:'test@example.com' },
      { testId: 'subject-input', formName: 'Subject', fill:'Test' },
      { testId: 'message-input', formName: 'Message', fill:'This is a test message from Playwright' },
    ]

    for (const {testId, formName, fill} of contactItems) {
      const input = contactForm.locator(`[data-testid="${testId}"]`)
      await expect(input).toBeVisible()
      await expect(input).toHaveAttribute('placeholder', formName)
      await input.fill(fill)
      const submitButton = contactForm.locator('[data-testid="submit-button"]')
      await expect(submitButton).toBeVisible()
      await submitButton.click()
    }
  })
  test('should test the filling of the contact form 2', async ({ page }) => {
    const contactForm = page.locator('[data-testid="contact-form"]');
    await expect(contactForm).toBeVisible();
  
    const contactItems = [
      { testId: 'name-input', formLabel: 'Name', placeholder: 'Your Name', fill: 'Test' },
      { testId: 'email-input', formLabel: 'Email', placeholder: 'Your Email', fill: 'test@example.com' },
      { testId: 'message-input', formLabel: 'Message', placeholder: 'Your Message', fill: 'This is a test message from Playwright' },
    ];
  
    for (const { testId, formLabel, placeholder, fill } of contactItems) {
      const input = contactForm.locator(`[data-testid="${testId}"] input`);
      await expect(input).toBeVisible();
      await expect(input).toHaveAttribute('placeholder', placeholder);
  
      const label = contactForm.locator(`label[for="${testId}"]`);
      await expect(label).toHaveText(formLabel);
  
      await input.fill(fill);
    }
  
    const submitButton = contactForm.locator('[data-testid="submit-button"]');
    await expect(submitButton).toBeVisible();
    await submitButton.click();
  
    const successMessage = page.locator('[data-testid="success-message"]');
    await expect(successMessage).toBeVisible();
  });
  
  
})
