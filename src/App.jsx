import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.1) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('visible') },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Nav />
      <Hero />
      <Ticker />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Awards />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  )
}
