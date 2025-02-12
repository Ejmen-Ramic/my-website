declare module '@mailchimp/mailchimp_marketing' {
  interface MailchimpConfig {
    apiKey: string
    server: string
  }

  interface MailchimpClient {
    setConfig(config: MailchimpConfig): void
    ping(): Promise<{ health_status: string }>
    lists: {
      addListMember(listId: string, data: any): Promise<any>
    }
  }

  const client: MailchimpClient
  export default client
}
