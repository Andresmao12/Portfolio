import Nav from './components/Nav/Nav'

import Present from './pages/Present/Present'
import Experience from './pages/Experience/Experience'
import Projects from './pages/Projects/Projects'
import Stack from './pages/Stack/Stack'
import Clients from './pages/Clients/Clients'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'

function App() {

  return (
    <>
      <Nav />
      <Present />
      <About />
      <Experience />
      <Projects />
      <Stack />
      <Clients />
      <Contact />
    </>
  )
}

export default App
