import { calendarUrlFor, icsFor } from '../data'

const CalendarIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

// Apple Calendar and Outlook can't open a Google Calendar template link, so
// offer a .ics alongside it. The file carries a 30-minute alarm, which is the
// "remind me" half of this control.
function downloadIcs(event) {
  const blob = new Blob([icsFor(event)], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${event.id}.ics`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  // Revoke on the next tick so Safari has finished reading the blob.
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export default function AddToCalendar({ event, variant = 'light' }) {
  if (!event?.startUTC || !event?.endUTC) return null

  const isDark = variant === 'dark'
  const primary = isDark
    ? 'border-white/25 hover:border-white/50 text-white'
    : 'border-navy/20 hover:border-navy/40 text-navy'
  const secondary = isDark ? 'text-white/45 hover:text-white' : 'text-navy/45 hover:text-brand'

  return (
    <div className="flex flex-col gap-1.5">
      <a
        href={calendarUrlFor(event)}
        target="_blank"
        rel="noreferrer"
        className={`w-full flex items-center justify-center gap-2 border ${primary} font-semibold text-sm py-2.5 rounded-lg transition-colors`}
      >
        <CalendarIcon />
        Add to calendar
      </a>
      <button
        onClick={() => downloadIcs(event)}
        className={`${secondary} text-xs font-medium transition-colors`}
      >
        Apple Calendar / Outlook (.ics)
      </button>
    </div>
  )
}
