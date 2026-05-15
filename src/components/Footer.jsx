export default function Footer() {
  return (
    <footer className="bg-surface border-t border-cborder py-5 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <span className="font-display italic text-[.9rem] text-muted">
          Shreya <span className="gradient-text not-italic">Malvankar</span>
        </span>
        <span className="font-mono text-[10px] text-muted tracking-widest">
          © 2025 · MSBAIM · Purdue University · Indiana
        </span>
        <div className="flex gap-4">
          {[['LinkedIn','https://www.linkedin.com/in/shreya-malvankar/'],['GitHub','#'],['Resume','#']].map(([n,h]) => (
            <a key={n} href={h} target="_blank"
              className="font-mono text-[10px] text-muted tracking-widest uppercase hover:text-rose transition-colors duration-200">
              {n} ↗
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
