import { motion, type Variants } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div
          variants={item}
          className="glass mx-auto mb-8 flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-wide text-white/70"
        >
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl leading-[0.95] font-black tracking-tight sm:text-7xl md:text-8xl"
        >
          I build <span className="text-gradient glow">insane</span>
          <br />
          web experiences
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-xl text-base text-white/60 md:text-lg"
        >
          Creative front-end engineer crafting immersive interfaces with React,
          motion design, and a relentless eye for detail.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#work"
            className="group relative overflow-hidden rounded-full bg-[var(--color-neon)] px-8 py-3.5 font-semibold text-[var(--color-ink)] transition-transform hover:scale-105"
          >
            <span className="relative z-10">View my work</span>
          </a>
          <a
            href="#contact"
            data-hover
            className="glass rounded-full px-8 py-3.5 font-semibold text-white transition-colors hover:text-[var(--color-neon)]"
          >
            Let&apos;s talk →
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#work"
        aria-label="Scroll down"
        className="absolute bottom-10 text-white/40"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown />
      </motion.a>
    </section>
  )
}
