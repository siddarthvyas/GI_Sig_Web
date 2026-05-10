import { events, CONTACT_EMAIL } from '../data'

const nextEvent = events[0]

export default function Hero() {
  return (
    <section id="about" className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          {/* Logo */}
          <div className="mb-7">
            <img
              src="/photos/logo.png"
              alt="Gi SIG Logo"
              className="w-44 h-44 rounded-full object-cover shadow-lg"
            />
          </div>

          <div className="inline-block border border-white/30 text-white/70 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            UTRGV School of Medicine
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Gastroenterology{' '}
            <span className="text-brand">Student Interest Group</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
            Exploring the growing role of GI in patient care.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#events" className="btn-primary">Upcoming Events</a>
            <a href="#board" className="btn-outline">Meet the Board</a>
          </div>
        </div>

        {/* Right — info cards */}
        <div className="flex flex-col gap-4">
          <InfoCard
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
            label="NEXT EVENT"
            title={nextEvent ? `${nextEvent.title} · ${nextEvent.month} ${nextEvent.day}` : 'Stay tuned — coming soon'}
            sub={nextEvent ? `${nextEvent.time} · ${nextEvent.location.split(',')[0]}` : 'Check back for our semester lineup'}
          />
          <InfoCard
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            label="LEADERSHIP"
            title="2025–2026 Board"
            sub="UTRGV School of Medicine"
          />
          <InfoCard
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            label="CONTACT"
            title={CONTACT_EMAIL}
            sub="Questions, speakers, ideas"
            href={`mailto:${CONTACT_EMAIL}`}
          />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="flex justify-center pb-8">
        <a
          href="#events"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}

function InfoCard({ icon, label, title, sub, href }) {
  const content = (
    <div className="bg-navy-light/60 border border-white/10 rounded-xl px-5 py-4 flex items-start gap-4 hover:border-white/20 transition-colors">
      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-brand">
        {icon}
      </div>
      <div>
        <div className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-0.5">{label}</div>
        <div className="text-white font-semibold text-sm">{title}</div>
        <div className="text-white/50 text-xs mt-0.5">{sub}</div>
      </div>
    </div>
  )

  if (href) return <a href={href}>{content}</a>
  return content
}
