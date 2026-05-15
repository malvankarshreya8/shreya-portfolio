const items = ['Power BI','Python','SQL','Tableau','ETL Development','Pandas','Time-Series Forecasting','Data Storytelling','GCP','MongoDB','Scikit-learn','Seaborn','R','Matplotlib']
const colors = ['text-rose','text-violet2','text-cyan','text-amber','text-rose','text-violet2']

export default function Ticker() {
  const all = [...items, ...items]
  return (
    <div className="overflow-hidden border-t border-b border-cborder bg-surface py-3">
      <div className="marquee-track whitespace-nowrap">
        {all.map((item, i) => (
          <span key={i} className={`inline-block px-10 font-mono text-[11px] tracking-widest uppercase ${colors[i % colors.length]}`}>
            {item} <span className="text-dim mx-8">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
