import { useEffect } from 'react'

export default function FlyerModal({ event, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${event.title} flyer`}
    >
      <div className="flex flex-col items-center gap-4 max-h-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={event.flyer}
          alt={`${event.title} flyer`}
          className="max-h-[80vh] w-auto rounded-xl shadow-2xl bg-white"
        />
        <button
          onClick={onClose}
          className="btn-primary text-sm px-8"
        >
          Close
        </button>
      </div>
    </div>
  )
}
