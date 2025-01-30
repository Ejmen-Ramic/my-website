declare namespace NodeJS {
  interface ProcessEnv {
    MAILCHIMP_API_KEY: string
    MAILCHIMP_SERVER_PREFIX: string
    MAILCHIMP_AUDIENCE_ID: string
    PORT?: string
    NODE_ENV: 'development' | 'production' | 'test'

    //Email-JS
    // REACT_APP_EMAILJS_SERVICE_ID: string
    // REACT_APP_EMAILJS_TEMPLATE_ID: string
    // REACT_APP_EMAILJS_PUBLIC_KEY: string
  }
}
