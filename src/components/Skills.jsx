import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

// ─── Data ─────────────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    key: 'core', label: 'Core Technical',
    color: '#5588f0', r: '85,136,240',
    skills: [
      { name: 'Python',                             tier: 1 },
      { name: 'Machine Learning',                   tier: 1 },
      { name: 'SQL / MySQL',                        tier: 2 },
      { name: 'Statistical Analysis & Forecasting',  tier: 2 },
      { name: 'R',                                  tier: 3 },
    ],
  },
  {
    key: 'cloud', label: 'Data Engineering',
    color: '#22d3ee', r: '34,211,238',
    skills: [
      { name: 'ETL Pipelines',              tier: 1 },
      { name: 'Feature Engineering',        tier: 2 },
      { name: 'Data Cleaning & Wrangling',  tier: 2 },
      { name: 'Google Cloud Platform',      tier: 3 },
    ],
  },
  {
    key: 'analytics', label: 'Analytics & BI',
    color: '#a855f7', r: '168,85,247',
    skills: [
      { name: 'Data Storytelling',                    tier: 1 },
      { name: 'Power BI',                             tier: 2 },
      { name: 'Tableau',                              tier: 2 },
      { name: 'Dashboard Design',                     tier: 2 },
      { name: 'Predictive Modeling',                  tier: 3 },
      { name: 'Excel (Pivot Tables, Power Query)',    tier: 3 },
    ],
  },
  {
    key: 'collab', label: 'Collaboration & Communication',
    color: '#f59e0b', r: '245,158,11',
    skills: [
      { name: 'Analytical Problem-Solving',    tier: 1 },
      { name: 'Stakeholder Reporting',         tier: 2 },
      { name: 'Cross-Functional Collaboration', tier: 2 },
      { name: 'Root Cause Analysis',           tier: 3 },
    ],
  },
  {
    key: 'tools', label: 'Tools',
    color: '#64748b', r: '100,116,139',
    skills: [
      { name: 'Git',         tier: 2 },
      { name: 'Jupyter',     tier: 2 },
      { name: 'VS Code',     tier: 2 },
      { name: 'Streamlit',   tier: 2 },
      { name: 'Salesforce',  tier: 3 },
      { name: 'Freshservice', tier: 3 },
      { name: 'APIs',        tier: 3 },
    ],
  },
]

// Interleave across categories so the cloud feels mixed
const ALL_SKILLS = (() => {
  const out = []
  const max = Math.max(...CATEGORIES.map(c => c.skills.length))
  for (let i = 0; i < max; i++) {
    CATEGORIES.forEach(cat => {
      if (i < cat.skills.length) out.push({ ...cat.skills[i], cat })
    })
  }
  return out
})()

const TIER_FONT = {
  1: { fontFamily: '"Cormorant Garamond",serif', fontWeight: 300, fontStyle: 'italic', letterSpacing: '0.01em' },
  2: { fontFamily: '"DM Sans",sans-serif',       fontWeight: 300, letterSpacing: '0.01em' },
  3: { fontFamily: '"JetBrains Mono",monospace', fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase' },
}

// ─── Category filter box ──────────────────────────────────────────────────────
function CatBox({ cat, isActive, onEnter, onLeave, idx, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: idx * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '9px 18px',
        border: `1px solid ${isActive ? cat.color : 'rgba(255, 255, 255, 0.35)'}`,
        background: isActive ? `rgba(${cat.r},0.07)` : 'transparent',
        cursor: 'default',
        transition: 'border-color 0.22s, background 0.22s',
        userSelect: 'none',
      }}
    >
      <div style={{
        width: 5, height: 5, borderRadius: '50%', flexShrink: 0,
        background: cat.color,
        boxShadow: isActive ? `0 0 8px ${cat.color}` : 'none',
        transition: 'box-shadow 0.22s',
      }} />
      <span style={{
        fontFamily: '"JetBrains Mono",monospace',
        fontSize: 9, letterSpacing: '.15em', textTransform: 'uppercase',
        color: isActive ? cat.color : 'rgba(255, 255, 255, 0.79)',
        transition: 'color 0.22s',
        whiteSpace: 'nowrap',
      }}>
        {cat.label}
      </span>
    </motion.div>
  )
}

// ─── Skills cloud ─────────────────────────────────────────────────────────────
function SkillCloud({ hovCat, inView }) {
  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap',
      gap: '14px 26px', alignItems: 'baseline',
    }}>
      {ALL_SKILLS.map((skill, i) => {
        const p = skill.cat
        const isLit = hovCat === null || skill.cat.key === hovCat
        const isDim = hovCat !== null && skill.cat.key !== hovCat

        const litColor =
          skill.tier === 1 ? p.color
          : skill.tier === 2 ? '#f0f0f0'
          : `rgba(${p.r},0.65)`

        const restColor =
          skill.tier === 1 ? `rgba(${p.r},0.72)`
          : skill.tier === 2 ? 'rgba(255,255,255,0.52)'
          : 'rgba(255,255,255,0.26)'

        const color = isDim
          ? 'rgba(255,255,255,0.07)'
          : isLit && hovCat !== null ? litColor
          : restColor

        const glow =
          hovCat !== null && skill.cat.key === hovCat && skill.tier === 1
            ? `0 0 22px rgba(${p.r},0.45)`
            : 'none'

        const fontSize =
          skill.tier === 1 ? 'clamp(20px,2.2vw,28px)'
          : skill.tier === 2 ? 'clamp(12px,1.4vw,17px)'
          : 'clamp(9px,0.9vw,11px)'

        return (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.022, duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            style={{
              ...TIER_FONT[skill.tier],
              fontSize,
              color,
              textShadow: glow,
              lineHeight: 1,
              display: 'inline-block',
              cursor: 'default',
              transition: 'color 0.25s, text-shadow 0.25s',
            }}
          >
            {skill.name}
          </motion.span>
        )
      })}
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function Skills() {
  const sectionRef = useRef(null)
  const [hovCat, setHovCat] = useState(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.08 })

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6 bg-surface overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-px bg-rose" />
            <span className="font-mono text-[10px] tracking-[.2em] uppercase text-rose">Skills</span>
          </div>
          <h2 className="font-display font-light text-[clamp(2rem,4vw,3rem)] leading-tight">
            Tools I <em className="gradient-text">actually use</em>
          </h2>
        </motion.div>

        {/* ── Category filter boxes ── */}
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map((cat, i) => (
            <CatBox
              key={cat.key}
              cat={cat}
              isActive={hovCat === cat.key}
              onEnter={() => setHovCat(cat.key)}
              onLeave={() => setHovCat(null)}
              idx={i}
              inView={inView}
            />
          ))}

          {/* Hint */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.55, duration: 0.5 }}
            style={{
              fontFamily: '"JetBrains Mono",monospace',
              fontSize: 8.5, color: '#C2C2C2',
              letterSpacing: '.14em', textTransform: 'uppercase',
              alignSelf: 'center', marginLeft: 4,
            }}
          >
            hover to filter
          </motion.span>
        </div>

        {/* ── Skill cloud ── */}
        <SkillCloud hovCat={hovCat} inView={inView} />

      </div>
    </section>
  )
}
