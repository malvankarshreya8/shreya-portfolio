import { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible') }, { threshold: 0.08 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return ref
}

const HOBBIES = [
  { icon: '🎨', title: 'Painting', color: '#ff3d5a',
    desc: 'Abstracts and landscapes. Committing to a brushstroke taught me the same logic as committing to an analysis — trust the process.' },
  { icon: '✏️', title: 'Sketching', color: '#a855f7',
    desc: 'Sketchbooks full of half-formed ideas. I think visually before I think analytically. My dashboards are better for it.' },
  { icon: '✈️', title: 'Traveling', color: '#06b6d4',
    desc: 'Every city is a dataset. Mumbai to Indiana was the biggest one yet — full of surprises in the distribution.' },
  { icon: '📷', title: 'Photography', color: '#f59e0b',
    desc: 'Composition, framing, negative space — the same principles I bring to data visualization.' },
  { icon: '🎤', title: 'TEDx Events', color: '#ff3d5a',
    desc: 'Event Manager & Design Head for TEDxXIE. Ran teams, managed chaos, designed everything. Communication at scale.' },
  { icon: '🌍', title: 'Cultural Curiosity', color: '#a855f7',
    desc: 'Two countries, two engineering programs. One thread: figure out the system, then find where it can be better.' },
]

export default function Hobbies() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal()

  return (
    <section id="hobbies" className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <div ref={r1} className="reveal-on-scroll mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-7 h-px bg-rose" />
            <span className="font-mono text-[10px] tracking-[.2em] uppercase text-rose">Beyond the Data</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <h2 className="font-display font-light text-[clamp(2rem,4vw,3rem)] leading-tight">
              The other side of<br/><em className="gradient-text">how I see the world</em>
            </h2>
            <p className="text-muted text-[.95rem] leading-[1.85] mt-1">
              The best analysts aren't just technical — they're perceptive.
              Creativity isn't decoration on top of analytics.
              It's the operating system underneath.
            </p>
          </div>
        </div>

        <div ref={r2} className="reveal-on-scroll grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
          {HOBBIES.map((h, i) => (
            <div key={h.title}
              className="bento-card bg-card border border-cborder p-5 group relative overflow-hidden cursor-default"
              style={{transitionDelay: `${i * .04}s`}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{background:`radial-gradient(circle at 30% 30%, ${h.color}10, transparent 60%)`}} />
              <div className="text-2xl mb-3">{h.icon}</div>
              <div className="font-display text-[1.05rem] text-white mb-1">{h.title}</div>
              <p className="text-[.78rem] text-muted leading-relaxed">{h.desc}</p>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{background: h.color}} />
            </div>
          ))}
        </div>

        {/* Why creativity = better analyst */}
        <div ref={r3} className="reveal-on-scroll grid grid-cols-1 md:grid-cols-3 gap-px bg-cborder">
          {[
            ['Pattern Recognition','Art trains the eye to find structure in noise — exactly what EDA does with raw data.','#ff3d5a'],
            ['Human Behavior','Travel builds intuition about how people actually behave, not how models assume.','#a855f7'],
            ['Visual Communication','Photography eye = dashboard instinct. White space and framing are never wasted.','#06b6d4'],
          ].map(([t, d, c]) => (
            <div key={t} className="bg-card p-5">
              <div className="font-mono text-[11px] font-medium mb-2" style={{color: c}}>✦ {t}</div>
              <p className="text-[.8rem] text-muted leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
