import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-28 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass relative overflow-hidden rounded-[2.5rem] px-8 py-20"
      >
        <div className="blob absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--color-magenta)] opacity-25" />
        <h2 className="relative text-4xl font-black sm:text-6xl">
          Let&apos;s build something
          <br />
          <span className="text-gradient glow">unforgettable</span>
        </h2>
        <p className="relative mx-auto mt-6 max-w-md text-white/60">
          Have a wild idea? I love a good challenge. Drop me a line and let&apos;s
          make it real.
        </p>
        <a
          href="mailto:kshitizaol@gmail.com"
          className="relative mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--color-neon)] px-9 py-4 font-bold text-[var(--color-ink)] transition-transform hover:scale-105"
        >
          kshitizaol@gmail.com
          <ArrowUpRight size={20} />
        </a>
      </motion.div>

      <footer className="mt-16 text-sm text-white/40">
        © 2026 Crafted with React, Vite & too much coffee. ☕
      </footer>
    </section>
  )
}
