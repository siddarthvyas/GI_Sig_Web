import { useState } from 'react'
import { events, CHECK_IN_URL } from '../data'
import CheckInModal from './CheckInModal'

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)
const PinIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)
const QrIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM15 18h.01M18 15h.01M21 18h.01M18 21h.01M21 21h.01M15 21h.01M19 15h.01" />
  </svg>
)

const detailIcons = {
  speaker: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  ),
  limit: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  note: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
}

function EventCard({ event, onCheckIn }) {
  const isOrange = event.color === 'orange'
  const headerBg = isOrange ? 'bg-brand' : 'bg-navy'

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-navy/5 flex flex-col">
      <div className={`${headerBg} text-white px-5 pt-5 pb-4`}>
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center leading-none">
            <span className="text-xs font-semibold opacity-70 tracking-wider">{event.month}</span>
            <span className="text-3xl font-extrabold">{event.day}</span>
          </div>
          <div>
            <div className="font-bold text-lg leading-tight">{event.title}</div>
            <div className="text-xs opacity-60 font-semibold tracking-wider mt-0.5">{event.category}</div>
          </div>
        </div>
      </div>

      <div className="px-5 py-4 flex flex-col gap-2.5 flex-1">
        <DetailRow icon={<ClockIcon />} text={event.time} />
        <DetailRow icon={<PinIcon />} text={event.location} />
        {event.detail && <DetailRow icon={detailIcons[event.detailIcon]} text={event.detail} />}
      </div>

      <div className="px-5 pb-5">
        <button
          onClick={() => onCheckIn(event)}
          className="w-full flex items-center justify-center gap-2 border border-navy/20 hover:border-navy/40 text-navy font-semibold text-sm py-2.5 rounded-lg transition-colors"
        >
          <QrIcon />
          Check In
        </button>
      </div>
    </div>
  )
}

function DetailRow({ icon, text }) {
  return (
    <div className="flex items-center gap-2.5 text-navy/60 text-sm">
      <span className="flex-shrink-0">{icon}</span>
      <span>{text}</span>
    </div>
  )
}

function ComingSoonCard() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center bg-white rounded-2xl border-2 border-dashed border-navy/15 py-16 px-8 text-center">
      <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center mb-5">
        <svg className="w-7 h-7 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <h3 className="text-navy font-bold text-xl mb-2">Events coming soon</h3>
      <p className="text-navy/50 text-sm max-w-sm leading-relaxed">
        We're planning our next semester lineup. Check back soon or submit an idea below — the best
        suggestions get voted on by the board.
      </p>
    </div>
  )
}

export default function Events() {
  const [activeEvent, setActiveEvent] = useState(null)

  return (
    <section id="events" className="bg-cream py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="section-label">Calendar</div>
            <h2 className="text-3xl font-extrabold text-navy">Upcoming events</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.length > 0 ? (
            events.map((ev) => (
              <EventCard key={ev.id} event={ev} onCheckIn={setActiveEvent} />
            ))
          ) : (
            <ComingSoonCard />
          )}
        </div>
      </div>

      {activeEvent && (
        <CheckInModal event={activeEvent} onClose={() => setActiveEvent(null)} />
      )}
    </section>
  )
}
