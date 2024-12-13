import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mailchimp from '@mailchimp/mailchimp_marketing'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

// When needed remove to test
// console.log('Environment variables loaded:', process.env)
// console.log('Audience ID:', process.env.REACT_APP_MAILCHIMP_AUDIENCE_ID)
// console.log('Server Prefix:', process.env.REACT_APP_MAILCHIMP_SERVER_PREFIX)

mailchimp.setConfig({
  apiKey: process.env.REACT_APP_MAILCHIMP_API_KEY as string,
  server: process.env.REACT_APP_MAILCHIMP_SERVER_PREFIX as string,
})

interface SubscribeRequestBody {
  email: string
}

app.post(
  '/subscribe',
  async (req: Request<{}, {}, SubscribeRequestBody>, res: Response) => {
    const { email } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }

    try {
      const audienceId = process.env.REACT_APP_MAILCHIMP_AUDIENCE_ID
      if (!audienceId) {
        throw new Error('Mailchimp Audience ID is not configured')
      }

      const response = await mailchimp.lists.addListMember(audienceId, {
        email_address: email,
        status: 'subscribed',
      })

      res
        .status(200)
        .json({ message: 'Subscription successful!', data: response })
    } catch (error: any) {
      console.error('Error subscribing user:', error)
      res
        .status(500)
        .json({ error: error.response?.text || 'An error occurred' })
    }
  }
)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
