import { useState } from 'react'

const SIGNUP_FORM_URL = 'https://forms.gle/1LAB4B1gopNoYrKH6'

export default function EmailSignup() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    const url = `${SIGNUP_FORM_URL}?usp=pp_url&entry.87447548=${encodeURIComponent(email)}`
    window.open(url, '_blank')
    setEmail('')
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
        <form onSubmit={handleSubmit} className="flex gap-3 w-full md:w-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 md:w-72 bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand transition-colors"
          />
          <button type="submit" className="btn-primary text-sm whitespace-nowrap">
            Sign up
          </button>
        </form>
      </div>
    </section>
  )
}
