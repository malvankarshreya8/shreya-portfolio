import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import altardLogo   from '../../logo/altar_d_state_logo.jpg'
import jayLogo      from '../../logo/jay_instrument_and_systems__logo.png'
import ibmLogo      from '../../logo/ibm_skillsbuild_student_ambassador_program_logo.jpg'
import googleLogo   from '../../logo/Google__G__logo.svg.png'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('visible') },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

const EXP = [
  {
    period: 'Jun 2026 – Aug 2026',
    role: 'IT Business Analyst Intern',
    company: "Altar'd State | Stand Out for Good Inc.",
    location: 'Tennessee, USA',
    color: '#F8ACCD',
    logo: altardLogo,
    tags: ['Process Improvement', 'Data Analysis', 'Workflow Automation', 'IT Operations', 'Technical Documentation', 'Root Cause Analysis'],
    bullets: [
      { icon: '*', text: 'Performed data analysis on 41,000+ IT service tickets using SQL, BigQuery, and Excel to identify trends, root causes, and key performance indicators for leadership reporting.' },
      { icon: '*', text: 'Conducted seasonal demand forecasting on 5,161 Back-to-School and 58,421 Christmas peak season tickets, informing pre-season operational planning across both peak retail periods.' },
      { icon: '*', text: 'Built KPI dashboards and data visualizations tracking Mean Time to Resolution, SLA compliance, and cost-per-ticket metrics for executive stakeholders.' },
      { icon: '*', text: 'Cleaned, standardized, and analyzed large datasets (40,000+ records) using pivot tables, VLOOKUP, and COUNTIFS to support data-driven decision making.' },
      { icon: '*', text: 'Analyzed Facilities maintenance data and budget/spend records to identify cost correlations and operational inefficiencies.' },
      { icon: '*', text: 'Collaborated with a cross-functional engineering team (Infosys) to write SQL queries prioritizing 116 data scenarios by transaction volume for a production analytics solution.' },
     ],
  },
  {
    period: 'Jan 2026 – May 2026',
    role: 'Student Data Analyst | Industry Practicum',
    company: 'Google',
    location: 'USA',
    color: '#04B138',
    logo: googleLogo,
    tags: ['Python', 'Large-Scale Data Analysis', 'NLP', 'Recommendation Systems', 'Feature Engineering','Interactive Dashboards'],
    bullets: [
      { icon: '*', text: 'Analyzed 30,000+ YouTube videos across 500+ channels to identify high-demand content opportunities and creator trends.' },
      { icon: '*', text: 'Performed data cleaning, EDA, and feature engineering in Python for analytics and machine learning workflows.' },
      { icon: '*', text: 'Developed NLP-based topic models and recommendation systems to generate explainable insights for data-driven decisions.' },
      { icon: '*', text: 'Built an AI-powered Streamlit dashboard with interactive visualizations, reducing research time by 40×; awarded 1st Place at the Future Edelman Impact Award.' },
    ],
  },
  {
    period: 'Dec 2023 – May 2024',
    role: 'Data Analyst Intern',
    company: 'Jay Instruments & Systems',
    location: 'Mumbai, India · On-site',
    color: '#ff3d5a',
    logo: jayLogo,
    tags: ['Dashboards','Power Query','Power BI', 'ETL', 'Python', 'SQL', 'CRM'],
    bullets: [
      { icon: '*', text: 'Drove 10% increase in marketing ROI and 3.3% revenue growth through data-led sales strategy improvements.' },
      { icon: '*', text: 'Built 25+ ETL workflows, boosting data integration efficiency and cutting processing time by 40%.' },
      { icon: '*', text: 'Drove 15% increase in customer retention and 10% operational efficiency boost through data-guided strategic decisions.' },
      { icon: '*', text: 'Designed interactive Power BI dashboards tracking YTD/YOY revenue, geolocation trends, and demographics for executive stakeholders.' },
      { icon: '*', text: 'Collaborated with sales on Salesforce dashboards and CRM-based reporting.' },
    ],
  },
  {
    period: 'Jun 2023 – Jul 2023',
    role: 'Data Analyst Intern',
    company: 'IBM SkillsBuild',
    location: 'Remote · Mumbai',
    color: '#55F4F7',
    logo: ibmLogo,
    tags: ['Python', 'GANs', 'Deep Learning', 'Image Super Resolution'],
    bullets: [
      { icon: '*', text: 'Collaborated with a team to develop a working Python model for Image Super Resolution.' },
      { icon: '*', text: 'Trained a GAN-based model to generate high-resolution images from low-resolution inputs.' },
      { icon: '*', text: 'Applied GANs to improve image clarity, enhance detail, and upscale content while preserving structure.' },
    ],
  },
]

function TimelineCard({ exp, index, isOpen, onToggle }) {
  return (
    <motion.div
      className="relative flex gap-0 group"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      {/* ── Left: period label + logo ── */}
      <div className="hidden sm:flex flex-col items-end pr-6 pt-1 w-44 flex-shrink-0 gap-3">
        <span
          className="font-mono text-[9px] tracking-widest uppercase leading-relaxed text-right"
          style={{ color: exp.color }}
        >
          {exp.period.split('–').map((p, i) => (
            <span key={i} className="block">{p.trim()}{i === 0 ? ' –' : ''}</span>
          ))}
        </span>
        <img src={exp.logo} alt={exp.company} className="w-14 h-14 object-contain" />
      </div>

      {/* ── Center: dot + spine ── */}
      <div className="flex flex-col items-center flex-shrink-0 w-8">
        {/* dot */}
        <div className="relative flex items-center justify-center mt-1.5">
          {isOpen && (
            <motion.div
              className="absolute rounded-full"
              style={{ background: exp.color + '20' }}
              animate={{ width: [24, 34, 24], height: [24, 34, 24], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
          <motion.button
            onClick={onToggle}
            className="relative z-10 w-4 h-4 rounded-full border-2 flex-shrink-0 focus:outline-none"
            animate={{
              backgroundColor: isOpen ? exp.color : '#0d0d0d',
              borderColor: exp.color,
              scale: isOpen ? 1.25 : 1,
              boxShadow: isOpen ? `0 0 16px ${exp.color}70` : 'none',
            }}
            whileHover={{ scale: 1.4 }}
            transition={{ type: 'spring', stiffness: 340, damping: 22 }}
          />
        </div>
        {/* spine segment (not after last) */}
        {index < EXP.length - 1 && (
          <motion.div
            className="w-px flex-1 mt-2"
            style={{ minHeight: 40 }}
            animate={{ background: isOpen ? `linear-gradient(${exp.color}, #333)` : '#222' }}
            transition={{ duration: 0.4 }}
          />
        )}
      </div>

      {/* ── Right: card ── */}
      <div className="flex-1 pl-5 pb-10 min-w-0">
        {/* period on mobile */}
        <div className="sm:hidden font-mono text-[9px] tracking-widest uppercase mb-2" style={{ color: exp.color }}>
          {exp.period}
        </div>

        <motion.div
          layout
          onClick={onToggle}
          className="relative bg-card border overflow-hidden cursor-pointer"
          animate={{
            borderColor: isOpen ? exp.color + '50' : '#ffffff0a',
          }}
          whileHover={{ borderColor: exp.color + '35' }}
          transition={{ duration: 0.25 }}
        >
          {/* top color bar — only rendered when open */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="bar"
                className="absolute top-0 left-0 right-0 h-[2px]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)`, transformOrigin: 'left' }}
                transition={{ duration: 0.35 }}
              />
            )}
          </AnimatePresence>

          {/* Card header – always visible */}
          <div className="px-5 pt-5 pb-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="font-display text-[1.15rem] leading-snug text-white mb-0.5">{exp.role}</div>
                <div className="font-semibold text-[12px] mb-1" style={{ color: exp.color }}>{exp.company}</div>
                <div className="font-mono text-[9px] text-white/60">📍 {exp.location}</div>
              </div>

              {/* Expand toggle icon */}
              <motion.div
                className="flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center mt-0.5 select-none"
                animate={{
                  borderColor: isOpen ? exp.color : '#555',
                  backgroundColor: isOpen ? exp.color + '20' : 'transparent',
                  rotate: isOpen ? 45 : 0,
                }}
                transition={{ duration: 0.25 }}
                style={{ color: isOpen ? exp.color : '#aaa' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <rect x="6" y="0" width="2" height="14" rx="1"/>
                  <rect x="0" y="6" width="14" height="2" rx="1"/>
                </svg>
              </motion.div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {exp.tags.map(t => (
                <motion.span
                  key={t}
                  className="font-mono text-[9px] px-2 py-0.5 border"
                  style={{ color: exp.color, borderColor: exp.color + '35', background: exp.color + '10' }}
                  whileHover={{ background: exp.color + '25', scale: 1.04 }}
                  transition={{ duration: 0.15 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Expandable bullets */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="bullets"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div
                  className="mx-5 mb-2 h-px"
                  style={{ background: `linear-gradient(90deg, ${exp.color}40, transparent)` }}
                />
                <div className="px-5 pb-5 flex flex-col gap-2">
                  {exp.bullets.map((b, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.06 + 0.05, duration: 0.25 }}
                      className="flex gap-3 items-start p-3 bg-bg/ border border-transparent transition-colors duration-200 rounded-[1px] group/b"
                      onMouseEnter={ev => ev.currentTarget.style.borderColor = exp.color + '99'}
                      onMouseLeave={ev => ev.currentTarget.style.borderColor = 'transparent'}
                    >
                      <span className="text-[.85rem] flex-shrink-0 mt-0.5 select-none">{b.icon}</span>
                      <span className="text-[.82rem] text-white/80 group-hover/b:text-white transition-colors duration-200 leading-relaxed">
                        {b.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const [open, setOpen] = useState(null)
  const r1 = useReveal()

  const toggle = (i) => setOpen(prev => prev === i ? null : i)

  return (
    <section id="experience" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={r1} className="reveal-on-scroll mb-14">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-7 h-px bg-rose" />
            <span className="font-mono text-[10px] tracking-[.2em] uppercase text-rose">Experience</span>
          </div>
          <h2 className="font-display font-light text-[clamp(2rem,4vw,3rem)] leading-tight">
            Where I've done <em className="gradient-text">real work</em>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* background spine */}
          <div
            className="absolute hidden sm:block"
            style={{
              left: 'calc(11rem + 1rem + 8px)',
              top: 8,
              bottom: 0,
              width: 1,
              background: 'linear-gradient(180deg, #ff3d5a22 0%, #a855f722 50%, #06b6d422 100%)',
            }}
          />
          <div className="sm:hidden absolute left-8 top-8 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, #ff3d5a22, #a855f722, rgba(53, 213, 241, 0.24))' }}
          />

          {EXP.map((exp, i) => (
            <TimelineCard
              key={i}
              exp={exp}
              index={i}
              isOpen={open === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
