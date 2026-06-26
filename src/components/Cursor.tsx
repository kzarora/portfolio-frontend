import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 500, damping: 30 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 30 })
  const ringX = useSpring(cursorX, { stiffness: 120, damping: 18 })
  const ringY = useSpring(cursorY, { stiffness: 120, damping: 18 })
  const hovering = useRef(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    const over = (e: MouseEvent) => {
      const target = e.target as Element | null
      hovering.current = !!target?.closest('a, button, [data-hover]')
      document.documentElement.style.setProperty(
        '--ring-scale',
        hovering.current ? '2.2' : '1',
      )
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-[var(--color-neon)]"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-9 w-9 rounded-full border border-[var(--color-magenta)] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          scale: 'var(--ring-scale, 1)',
        }}
      />
    </>
  )
}
