import { useState } from 'react'

// Renders the event flyer, or nothing at all if the image is missing, so a
// event added before its flyer exists still lays out correctly.
export default function Flyer({ event, className = '', onClick }) {
  const [failed, setFailed] = useState(false)
  if (!event?.flyer || failed) return null

  const img = (
    <img
      src={event.flyer}
      alt={`${event.title} flyer`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`w-full h-full object-contain rounded-lg border border-navy/10 bg-white ${className}`}
    />
  )

  if (!onClick) return img

  return (
    <button
      onClick={onClick}
      className="block w-full group relative cursor-zoom-in"
      aria-label={`View the ${event.title} flyer full size`}
    >
      {img}
      <span className="absolute inset-0 rounded-lg bg-navy/0 group-hover:bg-navy/10 transition-colors" />
    </button>
  )
}
