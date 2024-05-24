import { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import ScrollToTopButton from './shared/components/Back-To-Top/BackToTopButton'
import About from './pages/Resume-Website/AboutMe/index'
import HomePage from './pages/Resume-Website/Home'
import Contact from './pages/Resume-Website/Contacts/Contact'
import NotFound from './pages/Resume-Website/NotFound/NotFound'
import Test from './pages/test'
import SignIn from './pages/Resume-Website/Account/SignIn/SignIn'
import SignUp from './pages/Resume-Website/Account/SignUp/SignUp'
import ForgotPassword from './pages/Resume-Website/Account/Password/ForgotPassword'
import Hobbies from './pages/Resume-Website/Hobbies'
import Resume from './pages/Resume-Website/Resume'
import PhotographyHome from './pages/Photography-Website/Home'
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
