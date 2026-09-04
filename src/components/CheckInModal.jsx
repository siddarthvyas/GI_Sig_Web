import { QRCodeSVG } from 'qrcode.react'
import { useEffect } from 'react'
import { checkInUrlFor, sigs } from '../data'
import SigChips from './SigChips'

export default function CheckInModal({ event, onClose }) {
  const url = checkInUrlFor(event)

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    // Stop the page behind the modal from scrolling on mobile.
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Check in for ${event.title}`}
    >
      <div
        className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl flex flex-col items-center gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <div className="text-xs font-semibold tracking-widest uppercase text-brand mb-1">
            {event.month} {event.day}
          </div>
          <h3 className="text-navy font-bold text-xl">{event.title}</h3>
          <p className="text-navy/50 text-sm mt-1">Scan to log your attendance</p>
        </div>

        {event.coHosts?.length > 0 && (
          <div className="flex flex-col items-center gap-2">
            <SigChips keys={event.coHosts} size="sm" />
            <p className="text-navy/40 text-[11px] text-center leading-relaxed max-w-[15rem]">
              One check-in covers all {event.coHosts.length} groups —{' '}
              {event.coHosts.map((k) => sigs[k]?.abbr).filter(Boolean).join(', ')}.
            </p>
          </div>
        )}

        <div className="p-4 border-2 border-navy/10 rounded-xl">
          <QRCodeSVG
            value={url}
            size={220}
            fgColor="#0F2D4A"
            bgColor="#ffffff"
            level="M"
          />
        </div>

        <div className="text-center text-xs text-navy/50 leading-relaxed max-w-xs">
          Point your phone camera at this code. Your attendance is automatically recorded.
        </div>

        {/* Anyone already on their phone can't scan their own screen — give them the link. */}
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="w-full btn-primary text-sm text-center"
        >
          Open the check-in form
        </a>

        <button
          onClick={onClose}
          className="w-full border border-navy/20 hover:border-navy/40 text-navy font-semibold text-sm py-2.5 rounded-lg transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  )
}
