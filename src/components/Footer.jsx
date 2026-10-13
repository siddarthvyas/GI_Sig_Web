import { QRCodeSVG } from 'qrcode.react'
import { CONTACT_EMAIL, GROUPME_URL, IDEA_FORM_URL, INSTAGRAM_URL } from '../data'

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const ChatIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.9 9.9 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const explore = [
  { label: 'About', href: '#about-detail' },
  { label: 'Events', href: '#events' },
  { label: 'Check in', href: '#attendance' },
  { label: 'News', href: '#news' },
  { label: 'Board', href: '#board' },
]

function ColumnTitle({ children }) {
  return (
    <div className="text-white/40 text-[11px] font-semibold tracking-widest uppercase mb-4">{children}</div>
  )
}

const linkClass = 'text-white/70 hover:text-brand transition-colors text-sm'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white border-t border-white/10">
      {/* Thin brand rule ties the footer to the orange accents above. */}
      <div className="h-1 bg-gradient-to-r from-brand via-brand/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
        {/* Identity */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-4">
            <img src="/photos/logo.png" alt="GI SIG" className="w-14 h-14 object-contain" />
            <div>
              <div className="font-extrabold text-lg leading-tight">GI SIG</div>
              <div className="text-white/50 text-xs">UTRGV School of Medicine</div>
            </div>
          </div>
          <p className="text-white/55 text-sm leading-relaxed max-w-xs">
            Gastroenterology Student Interest Group. Speakers, procedures, research, and mentorship
            for students curious about GI in the Rio Grande Valley.
          </p>
        </div>

        {/* Explore */}
        <div className="lg:col-span-2">
          <ColumnTitle>Explore</ColumnTitle>
          <ul className="flex flex-col gap-2.5">
            {explore.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={linkClass}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href={IDEA_FORM_URL} target="_blank" rel="noreferrer" className={linkClass}>
                Submit an idea
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <ColumnTitle>Contact</ColumnTitle>
          <ul className="flex flex-col gap-3">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className={`${linkClass} flex items-center gap-2`}>
                <MailIcon />
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className={`${linkClass} flex items-center gap-2`}>
                <InstagramIcon />
                @gi.utrgv
              </a>
            </li>
            <li>
              <a href={GROUPME_URL} target="_blank" rel="noreferrer" className={`${linkClass} flex items-center gap-2`}>
                <ChatIcon />
                GroupMe chat
              </a>
            </li>
          </ul>
        </div>

        {/* Join */}
        <div className="lg:col-span-3">
          <ColumnTitle>Join the GroupMe</ColumnTitle>
          <div className="flex items-center gap-4">
            <a href={GROUPME_URL} target="_blank" rel="noreferrer" className="bg-white p-2 rounded-xl flex-shrink-0" aria-label="Join our GroupMe">
              <QRCodeSVG
                value={GROUPME_URL}
                size={96}
                fgColor="#0F2D4A"
                bgColor="#ffffff"
                level="H"
                imageSettings={{ src: '/photos/logo.png', height: 24, width: 24, excavate: true }}
              />
            </a>
            <p className="text-white/55 text-xs leading-relaxed">
              Scan with your phone camera, or tap the code. Event reminders and room changes go here first.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs">
          <span>© {year} GI SIG · UTRGV School of Medicine</span>
          <a href="#" className="hover:text-brand transition-colors">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
