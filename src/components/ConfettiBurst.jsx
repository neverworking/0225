import { useEffect } from 'react'

export default function ConfettiBurst({ fire }) {
  useEffect(() => {
    if (!fire) return
    let canceled = false
    ;(async () => {
      const confetti = (await import('canvas-confetti')).default
      if (canceled) return

      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } })
      setTimeout(() => confetti({ particleCount: 120, angle: 60, spread: 55, origin: { x: 0 } }), 150)
      setTimeout(() => confetti({ particleCount: 120, angle: 120, spread: 55, origin: { x: 1 } }), 300)
    })()
    return () => { canceled = true }
  }, [fire])

  return null
}