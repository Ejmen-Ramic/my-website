import { type MessageDescriptor, i18n } from '@lingui/core'

export type LocaleText = string | MessageDescriptor

export const tl = (text?: LocaleText) => {
	if (!text) {
		return ''
	}
	return typeof text === 'string' ? text : i18n._(text)
}
