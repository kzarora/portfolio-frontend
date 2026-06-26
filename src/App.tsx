import { motion, useScroll, useSpring } from 'framer-motion'
import Cursor from './components/Cursor'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  })

  return (
    <div className="relative">
      <Cursor />
      <Background />

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-[var(--color-neon)] via-[var(--color-violet)] to-[var(--color-magenta)]"
      />

      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
