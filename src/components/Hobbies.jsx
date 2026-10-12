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

// ─── Content — this is Shreya beyond the resume, not a skills list ────────────
const MOMENTS = [
  {
    num: '01', icon: '🎨', title: 'Art', color: '#ff3d5a',
    text: `I've always been drawn to creating things with my own hands — painting, sketching, and putting thoughts onto paper. It's one of the few things that can make me completely lose track of time.`,
  },
  {
    num: '02', icon: '🤲', title: 'Giving Back', color: '#a855f7',
    text: `I've always believed that whatever I have, I should try to share with someone who needs it more. I donate whenever I can, and one of my biggest hopes for the future is to do more for children in orphanages.`,
  },
  {
    num: '03', icon: '☀️', title: 'Finding Joy', color: '#06b6d4',
    text: `Lately, I've been learning to slow down and appreciate the little things — solo dates, good books, movies that stay with me, long walks, new places, and simply enjoying my own company.`,
  },
  {
    num: '04', icon: '📷', title: 'Photography', color: '#f59e0b',
    text: `I take pictures everywhere. A beautiful sky, a random street, a dinner with friends, a place I may never visit again — I love capturing little pieces of life and keeping the memories safe.`,
  },
  {
    num: '05', icon: '🫂', title: 'My People', color: '#ff3d5a',
    text: `Family and friends are a huge part of who I am. I'm the kind of person who shows up for the people I love — through the exciting moments, the difficult ones, and everything in between.`,
  },
  {
    num: '06', icon: '🍳', title: 'Cooking', color: '#a855f7',
    text: `I love trying new recipes, experimenting in the kitchen, and discovering something I've never made before. And honestly, food is even better when there are people around to share it with.`,
  },
]

const CLOSING = [
  { label: 'Create', icon: '✨', color: '#ff3d5a',
    text: `I find peace in creating, whether it's on a canvas, in the kitchen, or in life.` },
  { label: 'Remember', icon: '📸', color: '#a855f7',
    text: `I collect moments, not things. They're what stay with me.` },
  { label: 'Grow', icon: '🌱', color: '#06b6d4',
    text: `I'm always learning, unlearning, and becoming a better version of myself — lately that's meant lacing up more often, with a marathon somewhere on the horizon.` },
]

export default function Hobbies() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal()

  return (
    <section id="hobbies" className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={r1} className="reveal-on-scroll mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-7 h-px bg-rose" />
            <span className="font-mono text-[10px] tracking-[.2em] uppercase text-rose">Beyond the Data</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <h2 className="font-display font-light text-[clamp(2rem,4vw,3rem)] leading-tight">
              The things that<br /><em className="gradient-text">make life, life.</em>
            </h2>
            <p className="text-muted text-[.95rem] leading-[1.85] mt-1">
              There's a lot more to me than what fits on a resume.
              Here's a little glimpse of the things that shape me, inspire me, and keep me grounded.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div ref={r2} className="reveal-on-scroll grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          {MOMENTS.map((m, i) => (
            <div key={m.title}
              className="bento-card bg-card border border-cborder p-6 md:p-7 group relative overflow-hidden cursor-default"
              style={{ transitionDelay: `${i * .04}s` }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `radial-gradient(circle at 30% 30%, ${m.color}10, transparent 60%)` }} />

              <div className="flex items-start justify-between mb-5">
                <div className="text-2xl">{m.icon}</div>
                <span className="font-mono text-[10px] tracking-widest text-muted">{m.num}</span>
              </div>

              <div className="font-display text-[1.2rem] text-white mb-2">{m.title}</div>
              <p className="text-[.83rem] text-muted leading-relaxed">{m.text}</p>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: m.color }} />
            </div>
          ))}
        </div>

        {/* Closing strip */}
        <div ref={r3} className="reveal-on-scroll grid grid-cols-1 md:grid-cols-3 gap-px bg-cborder">
          {CLOSING.map(c => (
            <div key={c.label} className="bg-card p-5">
              <div className="font-mono text-[11px] font-medium mb-2" style={{ color: c.color }}>
                {c.icon} {c.label.toUpperCase()}
              </div>
              <p className="text-[.8rem] text-muted leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
