const speakers = [
  {
    name: 'Juliana Yang, MD, FASGE',
    title: 'Gastroenterologist',
    affiliation: 'UT Health RGV',
    initials: 'JY',
  },
  // Add more speakers here as they come:
  // { name: 'First Last, MD', title: 'Title', affiliation: 'Institution', initials: 'FL' },
]

export default function Speakers() {
  if (speakers.length === 0) return null

  return (
    <section className="bg-cream py-20 border-t border-navy/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-label">Previous Speakers</div>
        <h2 className="text-3xl font-extrabold text-navy mb-10">Who we've hosted</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {speakers.map((s) => (
            <div key={s.name} className="bg-white rounded-2xl p-5 flex flex-col items-center text-center shadow-sm border border-navy/5">
              <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mb-3 flex-shrink-0">
                <span className="text-white font-bold text-base">{s.initials}</span>
              </div>
              <div className="font-bold text-navy text-sm leading-tight">{s.name}</div>
              <div className="text-brand text-xs font-semibold mt-1">{s.title}</div>
              <div className="text-navy/40 text-xs mt-0.5">{s.affiliation}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
