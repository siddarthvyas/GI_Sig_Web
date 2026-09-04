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
    // Pre-filled check-in link: the "Which event are you checking in for?"
    // answer is baked into the URL, so scanning the QR tags the response
    // with this event and nobody has to pick it from a list.
    checkInUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSdU-AaCRxKJkV110LR2cI1cPcDmsaVGv_8HeTFeEFYzYw6cNg/viewform?usp=pp_url&entry.76917494=Oct+14+%E2%80%94+1st+Joint+General+Meeting',
    flyer: '/photos/flyer-2026-10-14.png',
    blurb:
      'Kicking off a new year of collaboration. Meet the boards of all four groups, hear what each has planned for the year, and explore your future specialty over lunch.',
    startUTC: '20261014T170000Z',
    endUTC: '20261014T180000Z',
  },
]

// The soonest event that has not happened yet, or null once everything is past.
// The cutoff is built from local date parts rather than toISOString(), which
// reports UTC: in CDT that would retire an event at 7pm the evening before.
export function nextEvent(today = new Date()) {
  const cutoff = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0'),
  ].join('-')
  return events.filter((e) => e.date >= cutoff).sort((a, b) => a.date.localeCompare(b.date))[0] || null
}

// Per-event check-in link, falling back to the shared form.
export function checkInUrlFor(event) {
  return event?.checkInUrl || CHECK_IN_URL
}

// RFC 5545 escaping: commas, semicolons and backslashes are field separators.
function icsEscape(text) {
  return String(text).replace(/([\\,;])/g, '\\$1').replace(/\n/g, '\\n')
}

// A .ics file covers Apple Calendar and Outlook, which cannot open a Google
// Calendar template link. Built from the same fields as calendarUrlFor.
export function icsFor(event) {
  const stamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//GI SIG UTRGV//Events//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${event.id}@giutrgv.org`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${event.startUTC}`,
    `DTEND:${event.endUTC}`,
    `SUMMARY:${icsEscape(`${event.title} — GI SIG`)}`,
    `LOCATION:${icsEscape(`${event.location}, UTRGV School of Medicine`)}`,
    `DESCRIPTION:${icsEscape(event.blurb || '')}`,
    'BEGIN:VALARM',
    'TRIGGER:-PT30M',
    'ACTION:DISPLAY',
    `DESCRIPTION:${icsEscape(event.title)}`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
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

// ---------------------------------------------------------------------------
// News
//
// GI news worth putting in front of students, newest first. Keep it to items
// with a real Valley or UTRGV connection: a national headline they could find
// anywhere is not why they came to this site. Leave the array empty and the
// section disappears.
// ---------------------------------------------------------------------------
export const news = [
  {
    id: 'poem-first-in-valley-2026-08',
    date: '2026-08-12',
    dateLong: 'August 12, 2026',
    source: 'UTRGV Newsroom',
    tag: 'UT Health RGV',
    title: "UT Health RGV performs the Valley's first POEM procedure",
    summary:
      'Dr. Juliana Yang performed the region\'s first peroral endoscopic myotomy, a minimally ' +
      'invasive treatment for achalasia and gastroparesis, in partnership with Rio Grande ' +
      'Regional Hospital. Patients who needed the procedure previously traveled to Houston, ' +
      'San Antonio, or Dallas.',
    note: 'Dr. Yang has spoken to our group before.',
    url: 'https://www.utrgv.edu/newsroom/2026/08/12/ut-health-rgv-performs-first-poem-procedure.htm',
  },
]

export const IDEA_FORM_URL = 'https://forms.gle/cghoYtUTaJJN1pKb7'
export const GROUPME_URL = 'https://groupme.com/join_group/102541539/acwOZRZt'
export const INSTAGRAM_URL = 'https://www.instagram.com/gi.utrgv'
export const CONTACT_EMAIL = 'gi.utrgv@gmail.com'
