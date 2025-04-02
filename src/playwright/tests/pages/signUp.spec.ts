import { test, expect, request } from '@playwright/test'

const testData = [
  {
    firstName: 'Ejmen',
    lastName: 'Ramic',
    email: 'ejmenramic5@gmail.com',
    password: '12345678',
  },
]

test.describe('Sign Up Page Test', () => {
  test('should test sign up and password visibility toggle', async ({
    page,
  }) => {
    await page.goto('http://localhost:3000/signup') // Ensure the URL includes the protocol

    await page.waitForTimeout(1000) // Avoid using static waits; use waitForSelector instead if possible

    for (const data of testData) {
      if (data.firstName) {
        await page.getByTestId('insert-first-name').click()
        await page.getByTestId('insert-first-name').fill(data.firstName)
      }
      if (data.lastName) {
        await page.getByTestId('insert-last-name').fill(data.lastName)
      }
      if (data.email) {
        await page.getByTestId('insert-signup-email').fill(data.email)
      }
      if (data.password) {
        const passwordInput = page.getByTestId('insert-signup-password')
        await passwordInput.fill(data.password)

        const inputType = await passwordInput.getAttribute('type')
        expect(inputType).toBe('password')

        await page.getByTestId('toggle-password-visibility').click()

        const visibleInputType = await passwordInput.getAttribute('type')
        expect(visibleInputType).toBe('text')

        await page.getByTestId('toggle-password-visibility').click()

        const hiddenInputType = await passwordInput.getAttribute('type')
        expect(hiddenInputType).toBe('password')
      }

      await page.getByTestId('sign-up-button').click()
    }
  })
})

test.describe('Test API', () => {
  const pageUrl = 'http://localhost:3000/signup'
  test('Should test API', async ({ request }) => {
    const response = await request.get(`${pageUrl}/users/1`)

    expect(response.status()).toBe(200)

    const responseBody = await response.json()
    expect(responseBody).toHaveProperty('id')
    expect(responseBody).toHaveProperty('firstName')
  })
})
