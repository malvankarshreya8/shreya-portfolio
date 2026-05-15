import { useState, useEffect } from 'react'
import profilePhoto from '../assets/ProfilePhoto.jpeg'

const words = ['Strategist.', 'Storyteller.', 'Creator.']

export default function Hero() {
  const [wi, setWi] = useState(0)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false)
      setTimeout(() => { setWi(i => (i + 1) % words.length); setVisible(true) }, 350)
    }, 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(122,21,40,.22) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,.12) 0%, transparent 65%)' }} />
      <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,.07) 0%, transparent 65%)' }} />

      {/* Decorative spinning rings */}
      <div className="absolute top-24 right-16 w-48 h-48 rounded-full border border-rose/10 animate-spin-slow pointer-events-none" />
      <div className="absolute top-28 right-20 w-36 h-36 rounded-full border border-violet2/10 animate-spin-slow pointer-events-none" style={{animationDirection:'reverse', animationDuration:'18s'}} />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3 mb-6" style={{animation:'slideUp .7s .1s both'}}>
            <span className="w-7 h-px bg-rose" />
            <span className="font-mono text-[10px] tracking-[.22em] uppercase text-rose">
              Open to Full-Time Opportunities  · USA
            </span>
          </div>

          <h1 className="font-display font-light leading-[.9] mb-4"
            style={{fontSize:'clamp(4rem,8vw,7rem)', animation:'slideUp .8s .25s both'}}>
            Data<br />
            <em className="gradient-text">Analyst</em><br />
            <span className="text-white/40" style={{fontSize:'clamp(1.8rem,4vw,3.5rem)',
              opacity: visible ? 1 : 0, transition: 'opacity .3s', display:'inline-block', fontStyle:'italic', color:'#888', minWidth:220}}>
              & {words[wi]}
            </span>
          </h1>

          <p className="text-muted text-[.95rem] leading-[1.85] max-w-md mb-7"
            style={{animation:'slideUp .8s .4s both'}}>
            Results-driven analyst with expertise in{' '}
            <strong className="text-white font-medium">Power BI, Python & ETL development</strong>.
            Delivered 25+ ETL workflows, 40% processing improvement, and dashboards that
            actually drive decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3" style={{animation:'slideUp .8s .7s both'}}>
            <a href="https://www.linkedin.com/in/shreya-malvankar/" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 bg-rose text-white font-mono text-[11px] tracking-widest uppercase hover:bg-rose2 transition-colors duration-200 flex items-center gap-2">
              LinkedIn ↗
            </a>
            <a href="/Shreya_M_Resume.pdf" download="Shreya_Malvankar_Resume.pdf"
              className="px-6 py-3 border border-dim text-muted font-mono text-[11px] tracking-widest uppercase hover:border-violet2 hover:text-violet2 transition-all duration-200 flex items-center gap-2">
              Download Resume ↓
            </a>
            <a href="#contact"
              className="px-6 py-3 border border-dim text-muted font-mono text-[11px] tracking-widest uppercase hover:border-cyan hover:text-cyan transition-all duration-200">
              Get In Touch
            </a>
          </div>
        </div>

        {/* RIGHT — Large profile photo */}
        <div className="flex items-center justify-center" style={{animation:'slideUp .9s .4s both'}}>
          <div className="relative">
            {/* Glow behind photo */}
            <div className="absolute inset-0 rounded-full pointer-events-none"
              style={{background:'radial-gradient(circle, rgba(255,61,90,.18) 0%, transparent 68%)', transform:'scale(1.25)'}} />
            {/* Gradient border ring */}
            <div className="photo-wrap animate-float" style={{width:380, height:380}}>
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src={profilePhoto}
                  className="w-full h-full object-cover object-top rounded-full"
                  alt="Shreya Sunil" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted">
        <span className="font-mono text-[9px] tracking-[.2em] uppercase">Scroll</span>
        <div className="w-px h-9 bg-gradient-to-b from-rose to-transparent" />
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
