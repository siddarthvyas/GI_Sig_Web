import { useState } from 'react'
import { IDEA_FORM_URL } from '../data'

const navLinks = [
  { label: 'About', href: '#about-detail' },
  { label: 'Events', href: '#events' },
  { label: 'Board', href: '#board' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-navy sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 flex-shrink-0">
          <img src="/photos/logo.png" alt="GI SIG Logo" className="w-10 h-10 object-contain" />
          <div className="leading-tight">
            <div className="text-white font-semibold text-sm">GI SIG</div>
            <div className="text-white/50 text-xs">UTRGV · Rio Grande Valley</div>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href={IDEA_FORM_URL} target="_blank" rel="noreferrer" className="btn-primary text-sm">
            Submit an Idea
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-navy px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/70 hover:text-white text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href={IDEA_FORM_URL} target="_blank" rel="noreferrer" className="btn-primary text-sm text-center">
            Submit an Idea
          </a>
        </div>
      )}
    </nav>
  )
}
