import { IDEA_FORM_URL } from '../data'

export default function IdeaCard() {
  return (
    <section className="bg-cream py-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-navy rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="text-brand text-2xl mt-0.5">💡</div>
            <div>
              <h3 className="text-white font-bold text-lg mb-1">Have an event idea?</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-md">
                Suggest speakers, social events, or anything else you want to see. We review every
                submission and vote on the best ones each semester.
              </p>
            </div>
          </div>
          <a
            href={IDEA_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary flex-shrink-0 whitespace-nowrap"
          >
            Submit an idea →
          </a>
        </div>
      </div>
    </section>
  )
}
