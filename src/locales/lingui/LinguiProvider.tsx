import { useLingui } from '@lingui/react'
import type { FC, PropsWithChildren } from 'react'

const LinguiProvider: FC<PropsWithChildren> = ({ children }) => {
	// Needed to refresh the language
	useLingui()

	return <>{children}</>
}

export default LinguiProvider
