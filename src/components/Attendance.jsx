import { QRCodeSVG } from 'qrcode.react'
import { nextEvent, checkInUrlFor, sigs } from '../data'
import SigChips from './SigChips'

const tags = [
  { icon: '📱', label: 'Scan at the door' },
  { icon: '📊', label: 'Auto-logged to Google Sheet' },
  { icon: '📄', label: 'Exportable for school records' },
]

export default function Attendance() {
  const event = nextEvent()
  const url = checkInUrlFor(event)

  return (
    <section id="attendance" className="bg-cream py-20 border-t border-navy/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-label">Attendance</div>
        <h2 className="text-3xl font-extrabold text-navy mb-10">Event check-in</h2>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-navy/5 flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            <div className="inline-block p-3 border-2 border-navy/10 rounded-xl">
              <QRCodeSVG value={url} size={180} fgColor="#0F2D4A" bgColor="#ffffff" level="M" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
          {event ? (
            <>
              <h3 className="text-navy font-bold text-lg mb-1">
                Checking in for {event.title}
              </h3>
              <div className="text-navy/50 text-sm mb-4">
                {event.weekday}, {event.dateLong || `${event.month} ${event.day}`} · {event.time}{' '}
                · {event.location}
              </div>

              {event.coHosts?.length > 0 && (
                <div className="flex flex-col gap-2 mb-5">
                  <SigChips keys={event.coHosts} size="sm" />
                  <p className="text-navy/55 text-sm leading-relaxed">
                    This is a joint event, so one check-in covers every group. The response
                    sheet is shared with the{' '}
                    {event.coHosts.map((k) => sigs[k]?.abbr).filter(Boolean).join(', ')} boards
                    so each can pull its own attendance for SOM reporting.
                  </p>
                </div>
              )}
            </>
          ) : (
            <h3 className="text-navy font-bold text-lg mb-2">QR code check-in at every event</h3>
          )}

          <p className="text-navy/55 text-sm leading-relaxed mb-6">
            Scan the code with your phone camera, or tap the button below if you are already
            reading this on your phone. Records are saved to a Google Sheet for SOM reporting.
          </p>

          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-block text-sm mb-6"
          >
            Open the check-in form
          </a>

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
      </div>
    </section>
  )
}
