import { useState } from 'react'

const speakers = [
  {
    name: 'Juliana Yang, MD, FASGE',
    title: 'Gastroenterologist',
    affiliation: 'UT Health RGV',
    initials: 'JY',
    photo: '/photos/juliana-yang.jpg',
  },
  // Add more speakers here as they come:
  // { name: 'First Last, MD', title: 'Title', affiliation: 'Institution', initials: 'FL', photo: '/photos/filename.jpg' },
]

function SpeakerCard({ speaker }) {
  const [imgFailed, setImgFailed] = useState(false)
  const showPhoto = speaker.photo && !imgFailed

  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col items-center text-center shadow-sm border border-navy/5">
      {showPhoto ? (
        <img
          src={speaker.photo}
          alt={speaker.name}
          className="w-20 h-20 rounded-full object-cover object-top mb-3 border-2 border-navy/10"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center mb-3 flex-shrink-0">
          <span className="text-white font-bold text-base">{speaker.initials}</span>
        </div>
      )}
      <div className="font-bold text-navy text-sm leading-tight">{speaker.name}</div>
      <div className="text-brand text-xs font-semibold mt-1">{speaker.title}</div>
      <div className="text-navy/40 text-xs mt-0.5">{speaker.affiliation}</div>
    </div>
  )
}

export default function Speakers() {
  if (speakers.length === 0) return null

  return (
    <section className="bg-cream py-20 border-t border-navy/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-label">Previous Speakers</div>
        <h2 className="text-3xl font-extrabold text-navy mb-10">Who we've hosted</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {speakers.map((s) => (
            <SpeakerCard key={s.name} speaker={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
