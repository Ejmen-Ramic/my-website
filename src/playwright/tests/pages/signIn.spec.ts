import { test, expect } from '@playwright/test'

const signInPage = 'http://localhost:3000'

const testData = [
  { email: 'ejmenramic5@gmail.com', password: '12345678' },
  { email: 'invalid@example.com', password: 'wrongpassword' },
]

test.describe('Sign In Page Tests', () => {
  test('should test the sign-in process for multiple users', async ({
    page,
  }) => {
    for (const data of testData) {
      await test.step(`Testing sign-in for email: ${data.email}`, async () => {
        await page.goto(`${signInPage}/signin`)

        await page.waitForTimeout(1000)

        await page.getByTestId('insert-email').waitFor()

        if (data.email) {
          await page.getByTestId('insert-email').fill(data.email)
        }
        if (data.password) {
          await page.getByTestId('insert-password').fill(data.password)
        }

        await page.getByTestId('sign-in').click()

        const successMessage = await page
          .getByTestId('success-message')
          .isVisible()
          .catch(() => false)
        if (
          data.email === 'ejmenramic5@gmail.com' &&
          data.password === '12345678'
        ) {
          expect(successMessage).toBeTruthy()
        } else {
          const errorMessage = await page
            .getByTestId('error-message')
            .isVisible()
            .catch(() => false)
          expect(errorMessage).toBeTruthy()
        }
      })
    }
  })
})
