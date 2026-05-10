import { CONTACT_EMAIL } from '../data'

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full border border-brand flex items-center justify-center">
            <span className="text-white font-bold text-xs">Gi</span>
          </div>
          <span className="text-white/50 text-sm">
            Gi SIG · UTRGV School of Medicine · Rio Grande Valley
          </span>
        </div>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-brand hover:text-brand-dark text-sm font-medium transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  )
}
