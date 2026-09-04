import { news } from '../data'

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

function NewsCard({ item }) {
  return (
    <article className="bg-white rounded-2xl border border-navy/5 shadow-sm p-7 flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        {item.tag && (
          <span className="bg-navy text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
            {item.tag}
          </span>
        )}
        <span className="text-navy/40 text-xs font-semibold tracking-wider uppercase">
          {item.source} · {item.dateLong}
        </span>
      </div>

      <h3 className="text-navy font-bold text-xl leading-snug">{item.title}</h3>

      <p className="text-navy/60 text-sm leading-relaxed">{item.summary}</p>

      {item.note && (
        <p className="text-brand text-sm font-semibold">{item.note}</p>
      )}

      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="mt-1 inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-brand transition-colors self-start"
      >
        Read the article
        <ExternalIcon />
      </a>
    </article>
  )
}

export default function News() {
  if (news.length === 0) return null

  return (
    <section id="news" className="bg-white py-20 border-t border-navy/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-label">News</div>
        <h2 className="text-3xl font-extrabold text-navy mb-3">GI in the Valley</h2>
        <p className="text-navy/55 text-base leading-relaxed max-w-2xl mb-10">
          Gastroenterology news from UTRGV and the Rio Grande Valley.
        </p>

        <div
          className={
            news.length === 1
              ? 'grid grid-cols-1 max-w-3xl'
              : 'grid md:grid-cols-2 gap-6'
          }
        >
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
