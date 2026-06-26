import { motion } from 'framer-motion'
import { Github, Linkedin, Menu } from 'lucide-react'

const links = ['Home', 'Stack', 'Work', 'Contact']

function Medium({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42S20.96 8.46 20.96 12zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  )
}

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav className="glass flex w-full max-w-5xl items-center justify-between rounded-2xl px-5 py-3">
        <a href="#home" className="text-lg font-bold tracking-widest">
         <span className="text-gradient">Kshitiz's Portfolio</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium text-white/70 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="relative transition hover:text-white"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 text-white/70">
          <a href="https://github.com/kzarora/" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="transition hover:text-[var(--color-neon)]">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/kshitizaol/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="transition hover:text-[var(--color-neon)]">
            <Linkedin size={18} />
          </a>
          <a href="https://medium.com/@kshitizaol" aria-label="Medium" target="_blank" rel="noopener noreferrer" className="transition hover:text-[var(--color-neon)]">
            <Medium size={18} />
          </a>
          <button aria-label="Menu" className="md:hidden">
            <Menu size={20} />
          </button>
        </div>
      </nav>
    </motion.header>
  )
}
