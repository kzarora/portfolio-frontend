export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="blob absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-[var(--color-violet)] opacity-40" />
      <div
        className="blob absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-[var(--color-magenta)] opacity-30"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="blob absolute -bottom-48 left-1/4 h-[38rem] w-[38rem] rounded-full bg-[var(--color-neon)] opacity-20"
        style={{ animationDelay: '-12s' }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
        }}
      />

      {/* Noise / vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,6,15,0.9)_100%)]" />
    </div>
  )
}
