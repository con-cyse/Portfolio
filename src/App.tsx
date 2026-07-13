

import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import Reveal from './components/Reveal'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 100)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="relative overflow-x-hidden bg-[var(--color-sea-white)] text-[var(--color-deep-teal)]">
      {isLoading && <LoadingScreen />}
      <CustomCursor />
      <NavBar />
      <main>
        <Reveal variant="scale">
          <Hero />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <div className="mx-auto w-full max-w-7xl px-6 py-0 lg:px-8 xl:px-12">
          <div className="grid gap-0 lg:grid-cols-2 lg:items-stretch">
            <Reveal>
              <Education />
            </Reveal>
            <Reveal>
              <Contact />
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App

