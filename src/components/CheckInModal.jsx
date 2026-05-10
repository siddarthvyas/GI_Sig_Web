import { QRCodeSVG } from 'qrcode.react'
import { useEffect } from 'react'

export default function CheckInModal({ event, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
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

        <div className="p-4 border-2 border-navy/10 rounded-xl">
          <QRCodeSVG
            value={event.checkInUrl}
            size={180}
            fgColor="#0F2D4A"
            bgColor="#ffffff"
            level="M"
          />
        </div>

        <div className="text-center text-xs text-navy/50 leading-relaxed max-w-xs">
          Point your phone camera at this code. Your attendance is automatically recorded.
        </div>

        <button
          onClick={onClose}
          className="w-full btn-primary text-sm text-center"
        >
          Close
        </button>
      </div>
    </div>
  )
}
