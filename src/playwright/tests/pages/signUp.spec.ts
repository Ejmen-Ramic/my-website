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
    await page.goto('http://localhost:3000/signup')

    await page.waitForTimeout(1000)
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

test.describe('Test Sign Up flow', async () => {
  const pageURL = 'https://localhost:3000'

  test('should test sign up', async ({ page }) => {
    await page.goto(`${pageURL}/signup`)
    await page.waitForTimeout(1000)

    for (const data of testData) {
      if (data.firstName) {
        await page.getByTestId('insert-first-name').click()
        await page.getByTestId('insert-first-name').fill(data.firstName)
      }
      if (data.lastName) {
        await page.getByTestId('insert-last-name').click()
      }
    }
  })
})

test.describe('User API Tests', () => {
  const baseUrl = 'https://driveflux.com/api'

  test('POST /users - Create a new user', async ({ request }) => {
    const newUserData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'secure123',
    }

    const response = await request.post(`${baseUrl}/users`, {
      data: newUserData,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    expect(response.status()).toBe(201)

    const createdUser = await response.json()
    expect(createdUser).toHaveProperty('id')
    expect(createdUser.name).toBe(newUserData.name)
    expect(createdUser.email).toBe(newUserData.email)
  })

  test('PUT /users/:id - Update user details', async ({ request }) => {
    const userId = '123'
    const updateData = {
      name: 'John Updated',
      email: 'john.updated@example.com',
      password: 'newpassword123',
    }

    const response = await request.put(`${baseUrl}/users/${userId}`, {
      data: updateData,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer your-auth-token',
      },
    })

    expect(response.status()).toBe(200)

    const updatedUser = await response.json()
    expect(updatedUser.name).toBe(updateData.name)
    expect(updatedUser.email).toBe(updateData.email)
  })

  test('PATCH /users/:id - Partial update of user', async ({ request }) => {
    const userId = '123'
    const partialUpdate = {
      name: 'John Modified',
    }

    const response = await request.patch(`${baseUrl}/users/${userId}`, {
      data: partialUpdate,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer your-auth-token',
      },
    })

    expect(response.status()).toBe(200)

    const patchedUser = await response.json()
    expect(patchedUser.name).toBe(partialUpdate.name)
    expect(patchedUser).toHaveProperty('email')
  })

  test('DELETE /users/:id - Delete user', async ({ request }) => {
    const userId = '123'

    const response = await request.delete(`${baseUrl}/users/${userId}`, {
      headers: {
        Authorization: 'Bearer your-auth-token',
      },
    })

    expect(response.status()).toBe(204)

    const getResponse = await request.get(`${baseUrl}/users/${userId}`)
    expect(getResponse.status()).toBe(404)
  })

  test('POST /users - Handle invalid data', async ({ request }) => {
    const invalidData = {
      name: '',
    }

    const response = await request.post(`${baseUrl}/users`, {
      data: invalidData,
    })

    expect(response.status()).toBe(400)
    const error = await response.json()
    expect(error).toHaveProperty('message')
  })

  test('PUT /users/:id - Handle non-existent user', async ({ request }) => {
    const nonExistentId = 'invalid-id'
    const updateData = {
      name: 'John Updated',
      email: 'john.updated@example.com',
    }

    const response = await request.put(`${baseUrl}/users/${nonExistentId}`, {
      data: updateData,
    })

    expect(response.status()).toBe(404)
  })

  test('PATCH /users/:id - Handle invalid update data', async ({ request }) => {
    const userId = '123'
    const invalidUpdate = {
      email: 'invalid-email-format',
    }

    const response = await request.patch(`${baseUrl}/users/${userId}`, {
      data: invalidUpdate,
    })

    expect(response.status()).toBe(400)
  })

  test('DELETE /users/:id - Handle already deleted user', async ({
    request,
  }) => {
    const deletedUserId = 'already-deleted-id'

    const response = await request.delete(`${baseUrl}/users/${deletedUserId}`)
    expect(response.status()).toBe(404)
  })
})

test.describe('Post /users', async () => {
  const baseUrl = 'http://driveflux/api/users'

  test('should test API Post', async ({ request }) => {
    const newUserData = {
      name: 'Ejmen',
      email: 'ejmenramic5@Gmail.com',
      password: 'secure123',
    }

    const response = await request.post(`${baseUrl}/users`, {
      data: newUserData,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    expect(response.status()).toBe(201)

    const createdUser = await response.json()
    expect(createdUser)
  })
})
