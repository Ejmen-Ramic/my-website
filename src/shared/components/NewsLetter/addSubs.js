import mailchimp from '@mailchimp/mailchimp_marketing'
import dotenv from 'dotenv'

dotenv.config()

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
})

exports.handler = async function (event) {
  if (event.httpMethod === 'POST') {
    const { email } = await JSON.parse(event.body)

    try {
      const response = await mailchimp.lists.addListMember(
        process.env.MAILCHIMP_AUDIENCE_ID,
        {
          email_address: email,
          status: 'subscribed',
        }
      )

      return {
        statusCode: 200,
        body: JSON.stringify({ response }),
      }
    } catch (error) {
      console.error(
        'Error Subscribing:',
        error.response ? error.response.body : error.message
      )

      return {
        statusCode: 500,
        body: JSON.stringify({
          error: error.response ? error.response.body : error.message,
        }),
      }
    }
  }
}
