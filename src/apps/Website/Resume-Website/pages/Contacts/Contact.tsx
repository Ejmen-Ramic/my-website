import React from 'react'

import { Stack } from '@chakra-ui/react'
import ContactForm from './ContactForm/ContactForm '
import Header from '../../../../../shared/components/Header'
import Footer from '../../../../../shared/components/Footer/Footer'

const Contact: React.FC<{}> = () => {
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
