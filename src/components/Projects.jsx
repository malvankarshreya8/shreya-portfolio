import { useEffect, useRef, useState } from 'react'

function GithubIcon({ size = 15, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible') }, { threshold: 0.08 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return ref
}

const PROJECTS = [
  { cat: 'analytics', num: '01',
    title: 'Time-Series Forecasting – U.S. Retail Sales',
    desc: 'Analyzed 30+ years of macro-level retail data across 9 industries to assess growth trends (~3.1% CAGR), built forecasting models to simulate demand scenarios, and quantified Q4 seasonality and COVID-19 demand shocks.',
    metrics: [['30+ yrs','Data span'],['~3.1%','CAGR'],['9','Industries'],['28–35%','Q4 uplift']],
    stack: ['Python','Excel Power Query','Power BI'],
    color: '#ff3d5a', colorDim: 'rgba(255,61,90,.08)', borderColor: 'rgba(255,61,90,.25)',
    emoji: '📈', github: '#'
  },
  { cat: 'analytics', num: '02',
    title: 'Sales Analytics – Retail Performance & Profitability',
    desc: 'Multi-region comparative analysis across 9,800+ transactions identifying profitability concentration and regional performance drivers. Developed scorecard-style dashboards to surface actionable insights.',
    metrics: [['9,800+','Transactions'],['3 regions','Analyzed'],['17 cats','Covered'],['West','Top profitability']],
    stack: ['SQL','Excel','Power BI'],
    color: '#5588f0', colorDim: 'rgba(85,136,240,.08)', borderColor: 'rgba(85,136,240,.25)',
    emoji: '🛒', github: '#'
  },
  { cat: 'analytics', num: '03',
    title: 'Adidas vs Nike Footwear Analysis',
    desc: "Competitive segmentation revealing margin gaps, traffic spikes, and the demographic actually driving footwear revenue. Nike's 76% higher profit margin and a 15% traffic spike during evening peak hours.",
    metrics: [['76%','Nike margin edge'],['56%','Revenue: women'],['15% spike','5–8 PM traffic'],['10%','Price overlap']],
    stack: ['Tableau'],
    color: '#a855f7', colorDim: 'rgba(168,85,247,.08)', borderColor: 'rgba(168,85,247,.25)',
    emoji: '👟', github: '#'
  },
  { cat: 'ds', num: '04',
    title: 'PPXAI: Privacy-Preserving Explainable AI for Healthcare',
    desc: 'Co-developed secure AI models for healthcare ensuring patient data privacy while delivering interpretable, clinician-friendly predictions using gradient-based visual explanations.',
    metrics: [['Privacy','Preserved'],['GRAD-CAM','Explainability'],['MobileNetV2','Architecture'],['XGBoost','Classifier']],
    stack: ['Python','GRAD-CAM','MobileNetV2','XGBoost'],
    color: '#10b981', colorDim: 'rgba(16,185,129,.08)', borderColor: 'rgba(16,185,129,.25)',
    emoji: '🏥', github: '#'
  },
  { cat: 'ds', num: '05',
    title: 'Multi-Format File Analyzer',
    desc: 'Built a sentiment analysis & text summarization tool across multiple document formats using BERT. 3rd prize at college competition. Deployable as a Streamlit web app.',
    metrics: [['3rd Prize','Competition'],['BERT','NLP model'],['Multi-format','Docs'],['Streamlit','Web app']],
    stack: ['Python','BERT','Streamlit'],
    color: '#f59e0b', colorDim: 'rgba(245,158,11,.08)', borderColor: 'rgba(245,158,11,.25)',
    emoji: '🏆', github: '#'
  },
]

const CATS = [['analytics','Data Analytics'],['ds','Data Science / ML'],['all','All']]

export default function Projects() {
  const [filter, setFilter] = useState('analytics')
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal()
  const shown = PROJECTS.filter(p => filter === 'all' || p.cat === filter)

  return (
    <section id="projects" className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={r1} className="reveal-on-scroll mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-7 h-px bg-rose" />
            <span className="font-mono text-[10px] tracking-[.2em] uppercase text-rose">Projects</span>
          </div>
          <div className="flex flex-wrap justify-between items-end gap-4">
            <h2 className="font-display font-light text-[clamp(2rem,4vw,3rem)] leading-tight">
              Work that <em className="gradient-text">actually shipped</em>
            </h2>
            <div className="flex flex-wrap gap-2">
              {CATS.map(([val, label]) => (
                <button key={val} onClick={() => setFilter(val)}
                  className={`font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 border transition-all duration-200 ${filter === val ? 'bg-rose border-rose text-white' : 'border-dim text-muted hover:border-rose hover:text-rose'}`}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div ref={r2} className="reveal-on-scroll grid grid-cols-1 md:grid-cols-2 gap-4">
          {shown.map((p, i) => {
            const isLastOdd = shown.length % 2 !== 0 && i === shown.length - 1
            return (
              <div key={p.num}
                className={`project-card bg-card border border-cborder p-6 relative overflow-hidden group${isLastOdd ? ' md:col-span-2' : ''}`}
                style={{ borderColor: i === 0 ? p.borderColor : undefined, transitionDelay: `${i * .05}s` }}>

                {/* top color bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                {/* bg glow */}
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${p.color}20, transparent)` }} />

                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="font-mono text-[10px] text-muted tracking-widest uppercase">
                      Project {p.num} · {p.cat === 'analytics' ? 'data analytics' : 'data science'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="text-muted hover:text-white transition-colors duration-200"
                      title="View on GitHub">
                      <GithubIcon size={15} />
                    </a>
                    <span className="text-2xl">{p.emoji}</span>
                  </div>
                </div>

                <h3 className="font-display text-[1.2rem] leading-snug text-white mb-3">{p.title}</h3>
                <p className="text-[.82rem] text-muted leading-relaxed mb-4">{p.desc}</p>

                {/* metrics */}
                <div className="grid grid-cols-4 gap-px bg-dim mb-4 p-px">
                  {p.metrics.map(([v, l]) => (
                    <div key={l} className="bg-card p-2 text-center">
                      <div className="font-display text-[1rem] leading-none" style={{ color: p.color }}>{v}</div>
                      <div className="font-mono text-[9px] text-muted mt-1 leading-tight">{l}</div>
                    </div>
                  ))}
                </div>

                {/* stack */}
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map(s => (
                    <span key={s} className="font-mono text-[10px] px-2 py-1 border"
                      style={{ color: p.color, borderColor: p.borderColor, background: p.colorDim }}>{s}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* View more CTA */}
        <div ref={r3} className="reveal-on-scroll mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="font-mono text-[11px] text-muted tracking-wider">More work available on GitHub</p>
          <a href="https://github.com/placeholder" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase px-5 py-2.5 border border-dim text-muted hover:border-rose hover:text-rose transition-all duration-200">
            <GithubIcon size={13} />
            View More Projects
          </a>
        </div>
      </div>
    </section>
  )
}
