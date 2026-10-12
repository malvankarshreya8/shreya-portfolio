import { useEffect, useRef, useState } from 'react'
import purdueLogo from '../assets/purdue-logo.png'
import xieLogo from '../assets/xie-logo.png'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible') }, { threshold: 0.1 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return ref
}

const PURDUE_SUBJECTS = [
  'Business Analytics',
  'Technology-Driven Business',
  'Data And AI-Driven Marketing',
  'AI For Business Decisions',
  'Spreadsheet Modeling & Simulation',
  'Data Mining',
  'Visual Analytics',
  'Advanced Database',
  'Management of Organizational Data',
  'Cloud Computing I',
]

const XAVIER_SUBJECTS = [
  'Applied Data Science',
  'Data Warehousing & Mining',
  'Database Management Systems',
  'Big Data Analysis',
  'Social Media Analytics',
  'Management Information Systems',
  'Project Management',
  'Artificial Intelligence',
  'Machine Learning',
  'Natural Language Processing',
]

function SubjectDropdown({ subjects, accentColor, accentBg, accentBorder }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="select-none">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-3 py-2.5 rounded-sm transition-colors duration-200"
        style={{ background: accentBg, border: `1px solid ${accentBorder}`, color: accentColor }}
      >
        <div className="flex items-center gap-2">
          <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} opacity={0.7}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="font-mono text-[10px] tracking-widest uppercase">Relevant Coursework</span>
          <span className="font-mono text-[9px] tracking-wider opacity-50">✦</span>
        </div>
        <svg
          className="w-3 h-3 flex-shrink-0"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div style={{
        maxHeight: open ? `${subjects.length * 34 + 8}px` : '0px',
        opacity: open ? 1 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
      }}>
        <div className="mt-1 rounded-sm overflow-hidden"
          style={{ border: `1px solid ${accentBorder}` }}>
          {subjects.map((s, i) => (
            <div key={i}
              className="flex items-center gap-2.5 px-3 py-2 font-mono text-[11px] transition-colors duration-100"
              style={{
                color: accentColor,
                background: i % 2 === 0 ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.2)',
                borderBottom: i < subjects.length - 1 ? `1px solid ${accentBorder}` : 'none',
              }}
            >
              <span style={{ color: accentColor, opacity: 0.4, fontSize: '12px', lineHeight: 1 }}>•</span>
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Education() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal()

  return (
    <section id="education" className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <div ref={r1} className="reveal-on-scroll mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-7 h-px bg-rose" />
            <span className="font-mono text-[10px] tracking-[.2em] uppercase text-rose">Education</span>
          </div>
          <h2 className="font-display font-light text-[clamp(2rem,4vw,3rem)] leading-tight">
            Academic <em className="gradient-text">foundations</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* ── Purdue Card — Black / Gold ── */}
          <div ref={r2} className="reveal-on-scroll bento-card group relative overflow-hidden rounded-lg cursor-default"
            style={{
              background: 'linear-gradient(145deg, #0c0900 0%, #181200 55%, #0c0900 100%)',
              border: '1px solid rgba(207,185,145,0.22)',
              boxShadow: '0 4px 40px rgba(207,185,145,0.04), inset 0 1px 0 rgba(207,185,145,0.1)',
            }}>

            {/* Gold top bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: 'linear-gradient(90deg, #CFB991 0%, #a07840 70%, transparent 100%)' }} />

            {/* Gold ambient glow */}
            <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full pointer-events-none opacity-[0.04] group-hover:opacity-[0.09] transition-opacity duration-700"
              style={{ background: 'radial-gradient(circle, #CFB991, transparent)' }} />

            {/* Purdue logo */}
            <div className="absolute top-5 right-5 w-24 pointer-events-none opacity-75 group-hover:opacity-100 transition-opacity duration-400">
              <img src={purdueLogo} alt="Purdue University" className="w-full h-auto object-contain" />
            </div>

            <div className="p-7">
              {/* Degree tag + date */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className="font-mono text-[9px] px-2.5 py-[5px] rounded tracking-[.18em] uppercase font-semibold"
                  style={{ background: 'rgba(207,185,145,0.16)', border: '1px solid rgba(207,185,145,0.5)', color: '#CFB991' }}>
                  ★ Masters
                </span>
                <span className="font-mono text-[9px] text-muted tracking-widest uppercase">Aug 2025 – Dec 2026</span>
              </div>

              <div className="font-display text-[1.35rem] leading-snug text-white mb-1.5 pr-16">
                MS Business Analytics &<br />Information Management
              </div>

              <div className="font-semibold text-sm mb-1" style={{ color: '#CFB991' }}>
                Purdue University
              </div>

              <div className="font-mono text-[10px] text-muted mb-5">📍 West Lafayette, Indiana, USA</div>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className="font-mono text-[10px] px-2 py-1 rounded-sm"
                  style={{ background: 'rgba(207,185,145,0.08)', border: '1px solid rgba(207,185,145,0.2)', color: '#CFB991' }}>
                  STEM-designated
                </span>
                <span className="font-mono text-[10px] px-2 py-1 rounded-sm"
                  style={{ background: 'rgba(160,128,80,0.08)', border: '1px solid rgba(160,128,80,0.2)', color: '#a08050' }}>
                  Daniels School of Business
                </span>
              </div>

              <SubjectDropdown
                subjects={PURDUE_SUBJECTS}
                accentColor="#CFB991"
                accentBg="rgba(207,185,145,0.07)"
                accentBorder="rgba(207,185,145,0.22)"
              />
            </div>
          </div>

          {/* ── Xavier Card — Black / White / Blue ── */}
          <div ref={r3} className="reveal-on-scroll bento-card group relative overflow-hidden rounded-lg cursor-default"
            style={{
              background: 'linear-gradient(145deg, #000b1c 0%, #001128 55%, #000b1c 100%)',
              border: '1px solid rgba(59,130,246,0.22)',
              boxShadow: '0 4px 40px rgba(59,130,246,0.04), inset 0 1px 0 rgba(147,197,253,0.07)',
              transitionDelay: '.1s',
            }}>

            {/* Blue top bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: 'linear-gradient(90deg, #3b82f6 0%, #1d4ed8 70%, transparent 100%)' }} />

            {/* Blue ambient glow */}
            <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full pointer-events-none opacity-[0.04] group-hover:opacity-[0.09] transition-opacity duration-700"
              style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />

            {/* Xavier logo */}
            <div className="absolute top-5 right-5 w-14 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-400">
              <img src={xieLogo} alt="Xavier Institute of Engineering" className="w-full h-auto object-contain" />
            </div>

            <div className="p-7">
              {/* Degree tag + date */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className="font-mono text-[9px] px-2.5 py-[5px] rounded tracking-[.18em] uppercase font-semibold"
                  style={{ background: 'rgba(59,130,246,0.16)', border: '1px solid rgba(59,130,246,0.5)', color: '#93c5fd' }}>
                  ✦ Bachelors
                </span>
                <span className="font-mono text-[9px] text-muted tracking-widest uppercase">Jun 2021 – Jun 2025</span>
              </div>

              <div className="font-display text-[1.35rem] leading-snug text-white mb-1.5 pr-16">
                B.E. Computer Engineering<br />with Honors in AI/ML
              </div>

              <div className="font-semibold text-sm mb-1" style={{ color: '#93c5fd' }}>
                Xavier Institute of Engineering
              </div>

              <div className="font-mono text-[10px] text-white/60 mb-5">📍 Mumbai, India</div>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className="font-mono text-[10px] px-2 py-1 rounded-sm"
                  style={{ background: 'rgba(147,197,253,0.07)', border: '1px solid rgba(147,197,253,0.18)', color: '#bfdbfe' }}>
                  Second Rank Holder
                </span>
                <span className="font-mono text-[10px] px-2 py-1 rounded-sm"
                  style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', color: '#93c5fd' }}>
                  Woman of Intelligence Award 24-25
                </span>
              </div>

              <SubjectDropdown
                subjects={XAVIER_SUBJECTS}
                accentColor="#93c5fd"
                accentBg="rgba(59,130,246,0.07)"
                accentBorder="rgba(59,130,246,0.22)"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
