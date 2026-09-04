// ---------------------------------------------------------------------------
// Co-hosting interest groups
//
// Reused by the event cards and the check-in modal so a joint event only has
// to list SIG keys instead of repeating names and colors.
// ---------------------------------------------------------------------------
export const sigs = {
  im: { abbr: 'IM', name: 'Internal Medicine', color: 'bg-navy text-white' },
  gi: { abbr: 'GI', name: 'Gastroenterology', color: 'bg-sig-gi text-white' },
  ho: { abbr: 'H/O', name: 'Hematology/Oncology', color: 'bg-sig-ho text-white' },
  cv: { abbr: 'CV', name: 'Cardiology', color: 'bg-sig-cv text-navy' },
}

// ---------------------------------------------------------------------------
// Check-in form
//
// Shared default for every event. An event can override it with its own
// `checkInUrl` when it needs a separate sheet (e.g. a co-hosted event whose
// responses go to another SIG's form).
// ---------------------------------------------------------------------------
export const CHECK_IN_URL = 'https://forms.gle/akQmLdjKZcffHeX58'

// ---------------------------------------------------------------------------
// Events
//
// Ordered soonest first. Past events drop off automatically (see `nextEvent`),
// so nothing has to be deleted by hand after a meeting.
//
// `startUTC` / `endUTC` are written out in UTC on purpose: the Valley is on
// CDT (UTC-5) until Nov 1 and CST (UTC-6) after, and hardcoding the converted
// value keeps the "Add to calendar" link correct without a timezone library.
// ---------------------------------------------------------------------------
export const events = [
  {
    id: 'joint-general-meeting-2026-10-14',
    date: '2026-10-14',
    month: 'OCT',
    day: '14',
    weekday: 'Wednesday',
    dateLong: 'October 14, 2026',
    title: '1st Joint General Meeting',
    category: 'GENERAL MEETING',
    time: '12:00 – 1:00 PM',
    location: 'ETBLC 1.102',
    detail: 'Chick-fil-A provided · Open to all years',
    detailIcon: 'note',
    color: 'orange',
    coHosts: ['im', 'gi', 'ho', 'cv'],
    blurb:
      'Kicking off a new year of collaboration. Meet the boards of all four groups, hear what each has planned for the year, and explore your future specialty over lunch.',
    startUTC: '20261014T170000Z',
    endUTC: '20261014T180000Z',
  },
]

// The soonest event that has not happened yet, or null once everything is past.
export function nextEvent(today = new Date()) {
  const cutoff = today.toISOString().slice(0, 10)
  return events.filter((e) => e.date >= cutoff).sort((a, b) => a.date.localeCompare(b.date))[0] || null
}

// Per-event check-in link, falling back to the shared form.
export function checkInUrlFor(event) {
  return event?.checkInUrl || CHECK_IN_URL
}

// Google Calendar "add event" link built from the event's own fields.
export function calendarUrlFor(event) {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${event.title} — GI SIG`,
    dates: `${event.startUTC}/${event.endUTC}`,
    location: `${event.location}, UTRGV School of Medicine`,
    details: event.blurb || '',
  })
  return `https://calendar.google.com/calendar/render?${params}`
}

export const boardMembers = [
  {
    initials: 'SV',
    name: 'Siddarth Vyas',
    role: 'PRESIDENT',
    year: 'MS1 · Class of 2029',
    color: 'navy',
    photo: '/photos/Siddarth.jpg',
  },
  {
    initials: 'AN',
    name: 'Avery Nesson',
    role: 'VICE PRESIDENT',
    year: 'MS1 · Class of 2029',
    color: 'navy',
    photo: '/photos/Avery.jpg',
  },
  {
    initials: 'VO',
    name: "Veronica O'Brien",
    role: 'SECRETARY',
    year: 'MS2 · Class of 2028',
    color: 'orange',
    photo: '/photos/Veronica.jpg',
  },
  {
    initials: 'HA',
    name: 'Haider Ahsan',
    role: 'TREASURER',
    year: 'MS1 · Class of 2029',
    color: 'orange',
    photo: '/photos/Haider.jpg',
  },
  {
    initials: 'AP',
    name: 'Angel Phillips',
    role: 'RESEARCH CHAIR',
    year: 'MS2 · Class of 2028',
    color: 'navy',
    photo: '/photos/Angel.jpg',
  },
]

export const IDEA_FORM_URL = 'https://forms.gle/cghoYtUTaJJN1pKb7'
export const CONTACT_EMAIL = 'gi.utrgv@gmail.com'
