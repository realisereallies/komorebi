import { useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

/** Viewport below `md` layout (48rem) — lighter Framer presets, matches SCSS `mixins.mq(md)` */
const NARROW_VIEWPORT_MQ = '(max-width: 47.98rem)'

/**
 * Prefer reduced/simplified motion when the user opts out globally or on small screens
 * (performance and smoother scroll on phones).
 */
export function useSimplifiedMotion() {
  const prefersReduced = useReducedMotion()
  const [narrowViewport, setNarrowViewport] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(NARROW_VIEWPORT_MQ)
    const sync = () => setNarrowViewport(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return Boolean(prefersReduced || narrowViewport)
}
