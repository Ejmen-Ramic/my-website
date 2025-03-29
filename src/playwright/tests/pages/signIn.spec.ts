import test from '@playwright/test'

const signInPage = 'http://localhost:3000'

test.describe('Test for Sign in Page', () => {
  test('go to the sign in page', async ({ page }) => {
    await page.goto(`${signInPage}`)
  })

  test('check the sign in form', async ({ page }) => {
    await page.goto(`${signInPage}/signin`)

    await page.waitForTimeout(1000)

    const signInForm = page.locator('[data-testid="sign-in"]')

    await signInForm.isVisible()
  })
})
