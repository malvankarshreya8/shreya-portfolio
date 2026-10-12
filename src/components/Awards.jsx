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

const AWARDS  = [
  { icon: '🥇', title: 'Future Edelman Award | 1st Place', sub: 'Project: Youtube: Optimizing Content Strategy with Public Data, Semantic Modeling & LLMs | Purdue', color: '#F5490B' },
  { icon: '🏆', title: 'Woman of Intelligence Award', sub: 'Joan & Frank Trocki 2024–25 | XIE', color: '#f59e0b' },
  { icon: '🎉', title: 'Project Competition | 3rd Place', sub: 'Multiformat File Analyzer · Dept-level project | XIE', color: '#4FAE0F' },
  { icon: '📝', title: 'Published Research — Springer', sub: 'English to Marathi Translation: A Survey of Parallel Corpora, Datasets, Methodologies and Tools · March 2026 | XIE', color: '#4FAE0F' },

]

export default function Awards() {
  const r1 = useReveal(), r2 = useReveal()
  return (
    <section className="py-16 px-6 bg-surface border-t border-cborder">
      <div className="max-w-6xl mx-auto">
        <div ref={r1} className="reveal-on-scroll mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-7 h-px bg-rose" />
            <span className="font-mono text-[10px] tracking-[.2em] uppercase text-rose">Awards & Leadership</span>
          </div>
          <h2 className="font-display font-light text-[clamp(1.8rem,3.5vw,2.5rem)] leading-tight">
            Beyond the <em className="gradient-text-amber">technical</em>
          </h2>
        </div>
        <div ref={r2} className="reveal-on-scroll grid grid-cols-2 md:grid-cols-4 gap-3">
          {AWARDS.map(a => (
            <div key={a.title}
              className="bento-card bg-card border border-cborder p-5 group transition-all duration-300 cursor-default"
              onMouseEnter={e => e.currentTarget.style.borderColor = a.color + '60'}
              onMouseLeave={e => e.currentTarget.style.borderColor = ''}>
              <div className="text-2xl mb-3">{a.icon}</div>
              <div className="font-semibold text-[.83rem] text-white mb-1 leading-snug">{a.title}</div>
              <div className="font-mono text-[10px] text-muted leading-relaxed">{a.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
