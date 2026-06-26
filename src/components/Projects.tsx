import { motion, type Variants } from 'framer-motion'

const projects = [
  {
    title: 'Aurora Dashboard',
    tag: 'SaaS · Analytics',
    desc: 'Realtime data viz platform with 60fps animated charts.',
    accent: 'from-[var(--color-neon)] to-[var(--color-violet)]',
  },
  {
    title: 'Pulse Commerce',
    tag: 'E-commerce',
    desc: 'Headless storefront with buttery cart micro-interactions.',
    accent: 'from-[var(--color-magenta)] to-[var(--color-violet)]',
  },
  {
    title: 'Nebula Studio',
    tag: '3D · WebGL',
    desc: 'Interactive 3D product configurator running in the browser.',
    accent: 'from-[var(--color-violet)] to-[var(--color-neon)]',
  },
  {
    title: 'Echo Music',
    tag: 'Mobile Web App',
    desc: 'Spatial-audio player with a gesture-driven UI.',
    accent: 'from-[var(--color-neon)] to-[var(--color-magenta)]',
  },
]

const card: Variants = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-3 text-4xl font-black sm:text-5xl"
      >
        Selected <span className="text-gradient">Work</span>
      </motion.h2>
      <p className="mb-14 max-w-md text-white/50">
        A handful of projects pushing the limits of the browser.
      </p>

      <motion.div
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-6 sm:grid-cols-2"
      >
        {projects.map((p) => (
          <motion.article
            key={p.title}
            variants={card}
            data-hover
            whileHover={{ y: -8 }}
            className="glass group relative overflow-hidden rounded-3xl p-7"
          >
            <div
              className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-60`}
            />
            <span className="text-xs font-semibold tracking-widest text-[var(--color-neon)] uppercase">
              {p.tag}
            </span>
            <h3 className="mt-3 text-2xl font-bold">{p.title}</h3>
            <p className="mt-2 text-white/60">{p.desc}</p>
            <span className="mt-6 inline-block text-sm font-medium text-white/70 transition-transform group-hover:translate-x-1">
              Explore case study →
            </span>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
