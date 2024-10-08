import type React from 'react'

import { Stack } from '@chakra-ui/react'
import ContactForm from './ContactForm/ContactForm '
import Footer from '../../../../../shared/components/PageWrapper/Footer/Footer'
import Header from '../../../../../shared/components/PageWrapper/Header'

const Contact: React.FC = () => {
	return (
		<>
			<Header />
			<Stack width={'full'}>
				<ContactForm />
			</Stack>
			<Footer />
		</>
	)
}

export default Contact
