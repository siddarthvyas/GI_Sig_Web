import { useState } from 'react'

const FORM_RESPONSE_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeEcKfRwTyrYrpoFTtHo_yr8TGQwWa_kELpyianblcDJfL32g/formResponse'
const FIELD_ID = 'entry.87447548'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      await fetch(FORM_RESPONSE_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `${FIELD_ID}=${encodeURIComponent(email)}`,
      })
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="bg-navy py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-white font-bold text-2xl mb-2">Stay in the loop</h3>
          <p className="text-white/55 text-sm max-w-sm">
            Get notified when we schedule new events, speakers, and opportunities.
          </p>
        </div>

        {status === 'success' ? (
          <div className="flex items-center gap-3 text-white bg-white/10 border border-white/20 rounded-xl px-6 py-3">
            <svg className="w-5 h-5 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">You're on the list — we'll be in touch.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 md:w-72 bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary text-sm whitespace-nowrap disabled:opacity-60"
            >
              {status === 'loading' ? 'Signing up...' : 'Sign up'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-400 text-xs mt-2">Something went wrong. Try emailing us directly.</p>
        )}
      </div>
    </section>
  )
}
