import { motion } from 'framer-motion'

const stack = [
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind',
  'Framer Motion',
  'Three.js',
  'GSAP',
  'Vite',
  'Node.js',
  'WebGL',
  'Figma',
  'GraphQL',
]

export default function Marquee() {
  const row = [...stack, ...stack]
  return (
    <section id="stack" className="border-y border-white/5 py-10">
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex shrink-0 gap-6 pr-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        >
          {row.map((s, i) => (
            <span
              key={i}
              className="glass rounded-full px-6 py-2.5 text-lg font-semibold whitespace-nowrap text-white/80"
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
