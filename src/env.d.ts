declare namespace NodeJS {
    interface ProcessEnv {
      MAILCHIMP_API_KEY: string;
      MAILCHIMP_SERVER_PREFIX: string;
      MAILCHIMP_AUDIENCE_ID: string;
      PORT?: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }