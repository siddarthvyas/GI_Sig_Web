import { useState } from 'react'
import { boardMembers, CONTACT_EMAIL } from '../data'

export default function Leadership() {
  return (
    <section id="board" className="bg-cream py-20 border-t border-navy/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="section-label">Leadership</div>
            <h2 className="text-3xl font-extrabold text-navy">2025–2026 Board</h2>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-brand hover:text-brand-dark font-semibold text-sm transition-colors hidden sm:block"
          >
            Contact board →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {boardMembers.map((m) => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MemberCard({ member }) {
  const [imgFailed, setImgFailed] = useState(false)
  const isOrange = member.color === 'orange'
  const bgColor = isOrange ? 'bg-brand' : 'bg-navy'
  const showPhoto = member.photo && !imgFailed

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm border border-navy/5">
      {showPhoto ? (
        <img
          src={member.photo}
          alt={member.name}
          className="w-20 h-20 rounded-full object-cover object-top mb-4 border-2 border-navy/10"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div className={`w-20 h-20 rounded-full ${bgColor} flex items-center justify-center mb-4`}>
          <span className="text-white font-bold text-xl">{member.initials}</span>
        </div>
      )}
      <div className="font-bold text-navy text-base leading-tight">{member.name}</div>
      <div className="text-brand text-xs font-semibold tracking-wider mt-1">{member.role}</div>
      <div className="text-navy/40 text-xs mt-1">{member.year}</div>
    </div>
  )
}
