import ContactForm from './ContactForm'
import HeaderPhotography from '../../Shared/Header/Desktop'
import FooterPhotography from '../../Shared/FooterPhotography'
import { FC } from 'react'
const ContactPhotography: FC = () => {
  return (
    <>
      <HeaderPhotography />
      <ContactForm />
      <FooterPhotography />
    </>
  )
}

export default ContactPhotography
