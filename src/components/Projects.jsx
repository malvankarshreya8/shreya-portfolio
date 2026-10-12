import { useEffect, useRef, useState } from 'react'

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
    emoji: '📈'
  },
  { cat: 'analytics', num: '02',
    title: 'Sales Analytics – Retail Performance & Profitability',
    desc: 'Multi-region comparative analysis across 9,800+ transactions identifying profitability concentration and regional performance drivers. Developed scorecard-style dashboards to surface actionable insights.',
    metrics: [['9,800+','Transactions'],['3 regions','Analyzed'],['17 cats','Covered'],['West','Top profitability']],
    stack: ['SQL','Excel','Power BI'],
    color: '#5588f0', colorDim: 'rgba(85,136,240,.08)', borderColor: 'rgba(85,136,240,.25)',
    emoji: '🛒'
  },
  { cat: 'analytics', num: '03',
    title: 'Adidas vs Nike Footwear Analysis',
    desc: "Competitive segmentation revealing margin gaps, traffic spikes, and the demographic actually driving footwear revenue. Nike's 76% higher profit margin and a 15% traffic spike during evening peak hours.",
    metrics: [['76%','Nike margin edge'],['56%',"Rev. from women's line"],['15% spike','5–8 PM traffic'],['10%','Price overlap']],
    stack: ['Tableau'],
    color: '#a855f7', colorDim: 'rgba(168,85,247,.08)', borderColor: 'rgba(168,85,247,.25)',
    emoji: '👟'
  },
  { cat: 'ds', num: '04',
    title: 'PPXAI: Privacy-Preserving Explainable AI for Healthcare',
    desc: 'Co-developed secure AI models for healthcare ensuring patient data privacy while delivering interpretable, clinician-friendly predictions using gradient-based visual explanations.',
    metrics: [['Privacy','Preserved'],['GRAD-CAM','Explainability'],['MobileNetV2','Architecture'],['XGBoost','Classifier']],
    stack: ['Python','GRAD-CAM','MobileNetV2','XGBoost'],
    color: '#10b981', colorDim: 'rgba(16,185,129,.08)', borderColor: 'rgba(16,185,129,.25)',
    emoji: '🏥'
  },
  { cat: 'ds', num: '05',
    title: 'Multi-Format File Analyzer',
    desc: 'Built a sentiment analysis & text summarization tool across multiple document formats using BERT. 3rd prize at college competition. Deployable as a Streamlit web app.',
    metrics: [['3rd Prize','Competition'],['BERT','NLP model'],['Multi-format','Docs'],['Streamlit','Web app']],
    stack: ['Python','BERT','Streamlit'],
    color: '#f59e0b', colorDim: 'rgba(245,158,11,.08)', borderColor: 'rgba(245,158,11,.25)',
    emoji: '🏆'
  },
]

const CATS = [['analytics','Data Analytics'],['ds','Data Science / ML'],['all','All']]

export default function Projects() {
  const [filter, setFilter] = useState('analytics')
  const r1 = useReveal(), r2 = useReveal()
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
                  <span className="text-2xl">{p.emoji}</span>
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

      </div>
    </section>
  )
}
