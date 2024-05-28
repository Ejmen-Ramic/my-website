import { i18n } from '@lingui/core'

export async function dynamicActivate(locale: string) {
  const { messages } = await import(`../../../../src/locales/${locale}/messages.ts`)
  i18n.loadAndActivate({ locale, messages })
}
