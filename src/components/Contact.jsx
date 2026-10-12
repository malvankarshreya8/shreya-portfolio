import { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible') }, { threshold: 0.1 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return ref
}

export default function Contact() {
  const r1 = useReveal(), r2 = useReveal()

  return (
    <section id="contact" className="py-24 px-6 bg-bg relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{background:'radial-gradient(ellipse, rgba(255,61,90,.08) 0%, transparent 70%)'}} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={r1} className="reveal-on-scroll mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-7 h-px bg-rose" />
            <span className="font-mono text-[10px] tracking-[.2em] uppercase text-rose">Contact</span>
          </div>
          <h2 className="font-display font-light leading-[.95]" style={{fontSize:'clamp(2.5rem,5vw,4rem)'}}>
            Let's build something<br/><em className="gradient-text">worth remembering.</em>
          </h2>
          <p className="text-muted text-[.95rem] max-w-md mt-3 leading-relaxed">
            Open to roles in data analytics, BI, product analytics, and consulting. MS BAIM Dec 2026.
          </p>
        </div>

        <div ref={r2} className="reveal-on-scroll max-w-md">
          {/* Contact info */}
          <div className="flex flex-col gap-3">
            {[
              { icon: '📧', label: 'Email', val: 'shreya8.usa@gmail.com', href: 'mailto:shreya8.usa@gmail.com' },
              { icon: '📱', label: 'Phone', val: '+1 (765) 701-9410', href: 'tel:+17657019410' },
              { icon: '💼', label: 'LinkedIn', val: 'linkedin.com/in/shreya-sunil-malvankar', href: 'https://www.linkedin.com/in/shreya-sunil-malvankar/' },
              { icon: '📍', label: 'Location', val: 'Indiana, USA', href: null },
            ].map(c => (
              <div key={c.label}
                className="flex gap-3 items-center p-4 bg-card border border-cborder hover:border-rose/40 transition-colors duration-200 group">
                <span className="text-xl flex-shrink-0">{c.icon}</span>
                <div>
                  <div className="font-mono text-[10px] text-muted tracking-widest uppercase">{c.label}</div>
                  {c.href
                    ? <a href={c.href} target="_blank" className="text-[.85rem] text-white group-hover:text-rose transition-colors duration-200">{c.val}</a>
                    : <span className="text-[.85rem] text-white">{c.val}</span>}
                </div>
              </div>
            ))}

            <div className="flex gap-3 mt-2">
              {[['LinkedIn','https://www.linkedin.com/in/shreya-sunil-malvankar/'],['Resume','/Shreya_M_Resume.pdf']].map(([n,h]) => (
                <a key={n} href={h} target="_blank"
                  className="flex-1 text-center font-mono text-[10px] tracking-widest uppercase py-2.5 border border-dim text-muted hover:border-rose hover:text-rose transition-all duration-200">
                  {n} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
