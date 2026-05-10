import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import Leadership from './components/Leadership'
import IdeaCard from './components/IdeaCard'
import Attendance from './components/Attendance'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Events />
      <Leadership />
      <IdeaCard />
      <Attendance />
      <Footer />
      <Analytics />
    </>
  )
}
