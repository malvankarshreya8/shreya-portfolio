import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const links = ['Education','Experience','Projects','Skills','Contact']
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg/95 backdrop-blur-xl border-b border-cborder' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display italic text-lg text-white">
          Shreya <span className="gradient-text not-italic font-display">  Sunil Malvankar</span>
        </a>
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="font-mono text-[11px] tracking-widest uppercase text-muted hover:text-rose transition-colors duration-200">
              {l}
            </a>
          ))}
          <a href="mailto:shreya8.usa@gmail.com"
            className="font-mono text-[11px] tracking-widest uppercase px-4 py-2 bg-rose text-white hover:bg-rose2 transition-colors duration-200">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
