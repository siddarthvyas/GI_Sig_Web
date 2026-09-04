import { sigs } from '../data'

// Row of co-hosting SIG badges, color-coded to match the joint-meeting flyer.
export default function SigChips({ keys, size = 'md' }) {
  if (!keys || keys.length === 0) return null

  const pad = size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-2.5 py-1'

  return (
    <div className="flex flex-wrap gap-1.5">
      {keys.map((k) => {
        const sig = sigs[k]
        if (!sig) return null
        return (
          <span
            key={k}
            title={sig.name}
            className={`${sig.color} ${pad} font-bold tracking-wider rounded-full leading-none`}
          >
            {sig.abbr}
          </span>
        )
      })}
    </div>
  )
}
