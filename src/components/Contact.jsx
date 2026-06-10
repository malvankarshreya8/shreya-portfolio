import { useState, useEffect, useRef } from 'react'

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
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
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

        <div ref={r2} className="reveal-on-scroll grid grid-cols-1 md:grid-cols-2 gap-10">
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
              {[['LinkedIn','https://www.linkedin.com/in/shreya-sunil-malvankar/'],['GitHub','#'],['Resume','#']].map(([n,h]) => (
                <a key={n} href={h} target="_blank"
                  className="flex-1 text-center font-mono text-[10px] tracking-widest uppercase py-2.5 border border-dim text-muted hover:border-rose hover:text-rose transition-all duration-200">
                  {n} ↗
                </a>
              ))}
            </div>
          </div>


{/* Form */}
{sent ? (
  <div className="bg-card border border-rose/30 p-10 text-center flex flex-col items-center justify-center">
    <div className="text-4xl mb-3">✅</div>
    <div className="font-display italic text-[1.4rem] text-rose mb-1">
      Message sent!
    </div>
    <p className="text-muted text-sm">
      I'll get back to you soon.
    </p>
  </div>
) : (
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
    onSubmit={() => setSent(true)}
    className="flex flex-col gap-3"
  >
    {/* Required hidden input */}
    <input type="hidden" name="form-name" value="contact" />

    {/* Spam protection */}
    <input type="hidden" name="bot-field" />

    <div className="grid grid-cols-2 gap-3">
      <input
        name="name"
        required
        placeholder="First name"
        value={form.name}
        onChange={(e) =>
          setForm((f) => ({ ...f, name: e.target.value }))
        }
        className="p-3 bg-card border border-cborder text-white font-body text-[.85rem] outline-none focus:border-rose transition-colors duration-200 placeholder:text-muted"
      />

      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm((f) => ({ ...f, email: e.target.value }))
        }
        className="p-3 bg-card border border-cborder text-white font-body text-[.85rem] outline-none focus:border-rose transition-colors duration-200 placeholder:text-muted"
      />
    </div>

    <input
      name="subject"
      placeholder="Subject"
      value={form.subject}
      onChange={(e) =>
        setForm((f) => ({ ...f, subject: e.target.value }))
      }
      className="p-3 bg-card border border-cborder text-white font-body text-[.85rem] outline-none focus:border-rose transition-colors duration-200 placeholder:text-muted"
    />

    <textarea
      name="message"
      required
      rows={5}
      placeholder="Your message…"
      value={form.message}
      onChange={(e) =>
        setForm((f) => ({ ...f, message: e.target.value }))
      }
      className="p-3 bg-card border border-cborder text-white font-body text-[.85rem] outline-none focus:border-rose transition-colors duration-200 placeholder:text-muted resize-none"
    />

    <button
      type="submit"
      className="self-start px-7 py-3 bg-rose text-white font-mono text-[11px] tracking-widest uppercase hover:bg-rose2 transition-colors duration-200"
    >
      Send Message →
    </button>
  </form>
)}
<form name="contact" data-netlify="true" hidden>
  <input name="name" />
  <input name="email" />
  <input name="subject" />
  <textarea name="message"></textarea>
</form>

        </div>
      </div>
    </section>
  )
}
