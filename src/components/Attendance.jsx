const tags = [
  { icon: '📱', label: 'Scan at the door' },
  { icon: '📊', label: 'Auto-logged to Google Sheet' },
  { icon: '📄', label: 'Exportable for school records' },
]

export default function Attendance() {
  return (
    <section id="attendance" className="bg-cream py-20 border-t border-navy/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-label">Attendance</div>
        <h2 className="text-3xl font-extrabold text-navy mb-10">Event check-in</h2>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-navy/5 max-w-xl">
          {/* QR placeholder */}
          <div className="w-28 h-28 border-2 border-dashed border-navy/20 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-navy/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM15 17h2v2h-2zM17 15h2v2h-2zM19 17h2v2h-2zM17 19h2v2h-2zM19 19h2v2h-2zM15 19h2v2h-2zM19 15h2v2h-2z" />
            </svg>
          </div>

          <h3 className="text-navy font-bold text-lg mb-2">QR code check-in at every event</h3>
          <p className="text-navy/55 text-sm leading-relaxed mb-6">
            Each event gets a unique QR code displayed on-screen. Scan it with your phone to
            instantly log your attendance. Records are saved to a Google Sheet for SOM reporting.
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t.label}
                className="flex items-center gap-1.5 border border-navy/15 text-navy/70 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                <span>{t.icon}</span>
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
