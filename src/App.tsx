import { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import ScrollToTopButton from './shared/components/Back-To-Top/BackToTopButton'
import About from './apps/Website/Resume-Website/pages/AboutMe/index'
import HomePage from './apps/Website/Resume-Website/pages/Home'
import Contact from './apps/Website/Resume-Website/pages/Contacts/Contact'
import NotFound from './apps/Website/Resume-Website/pages/NotFound/NotFound'
import Test from './apps/Website/test'
import SignIn from './apps/Website/Resume-Website/pages/Account/SignIn/SignIn'
import SignUp from './apps/Website/Resume-Website/pages/Account/SignUp/SignUp'
import ForgotPassword from './apps/Website/Resume-Website/pages/Account/Password/ForgotPassword'
import Hobbies from './apps/Website/Resume-Website/pages/Hobbies'
import Resume from './apps/Website/Resume-Website/pages/Resume'
import PhotographyHome from './apps/Website/Photography-Website/pages/Home'
// import NotFound from "./pages/Not Found/NewNotFound";

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

export const theme = extendTheme({
  breakpoints,
})

const App: React.FC = () => {
  const handleScroll = () => {
    const scrollToTopButton = document.getElementById('scrollToTopButton')
    if (scrollToTopButton) {
      scrollToTopButton.style.display = window.pageYOffset > 100 ? 'block' : 'none'
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      {/* Fallback is basically when the word cant change what should it display, 
      instead of null you can add 'Loading...' */}
      <Suspense fallback={null}>
        <Routes>
          {/* Resume */}
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/hobbies' element={<Hobbies />} />
          <Route path='/photography' element={<PhotographyHome />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/test' element={<Test />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/passwordreset' element={<ForgotPassword />} />
          <Route path='*' element={<NotFound />} />
          {/* Photography */}
        </Routes>
        <ScrollToTopButton />
      </Suspense>
    </ChakraProvider>
  )
}

export default App
