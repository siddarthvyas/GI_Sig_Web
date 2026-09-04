import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import Attendance from './components/Attendance'
import Speakers from './components/Speakers'
import Leadership from './components/Leadership'
import IdeaCard from './components/IdeaCard'
import EmailSignup from './components/EmailSignup'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Attendance />
      <Speakers />
      <Leadership />
      <IdeaCard />
      <EmailSignup />
      <Footer />
      {/* Pageview tracking. Inert in local dev and on non-Vercel hosts. */}
      <Analytics />
    </>
  )
}
