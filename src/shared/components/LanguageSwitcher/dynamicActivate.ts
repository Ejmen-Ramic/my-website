import { i18n } from '@lingui/core'

export async function dynamicActivate(locale: string) {
  const { messages } = await import(`@lingui/loader!../../../locales/${locale}/messages.po`)

  i18n.load(locale, messages)
  i18n.activate(locale)
}
