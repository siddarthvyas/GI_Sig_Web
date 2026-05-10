const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Education',
    body: 'Expert guest lectures, workshops, and Q&A panels that expose students to the breadth of GI practice — from general care to advanced interventions.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Career Development',
    body: 'Networking opportunities with GI specialists, research guidance, and resources to help you build a competitive application for residency.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Community & Outreach',
    body: 'Volunteer events throughout the year, partnering with other clubs and local health organizations to host events on nutrition, IBD management, and liver health.',
  },
]

export default function About() {
  return (
    <section id="about-detail" className="bg-white py-20 border-t border-navy/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-label">About</div>
        <h2 className="text-3xl font-extrabold text-navy mb-3">What we do</h2>
        <p className="text-navy/55 text-base leading-relaxed max-w-2xl mb-12">
          We are a student organization dedicated to helping medical students explore gastroenterology
          and hepatology through mentorship, education, research, and service — whether you're already
          interested in GI or simply curious about the field.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="bg-cream rounded-2xl p-7 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center text-brand flex-shrink-0">
                {p.icon}
              </div>
              <div>
                <div className="font-bold text-navy text-lg mb-2">{p.title}</div>
                <p className="text-navy/60 text-sm leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
