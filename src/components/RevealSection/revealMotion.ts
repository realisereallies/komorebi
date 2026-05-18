export const revealViewport = {
  once: true,
  amount: 0.14,
  margin: '0px 0px -8% 0px',
} as const

export const revealItemVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
} as const

export function revealNestedContainerVariants(reduceMotion: boolean) {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: 0,
      },
    },
  }
}

export function revealItemTransition(reduceMotion: boolean) {
  if (reduceMotion) return { duration: 0 }
  return {
    opacity: { duration: 1.05, ease: [0.22, 0.61, 0.36, 1] as const },
    y: { duration: 1.35, ease: [0.16, 1, 0.3, 1] as const },
  }
}

export function staggerContainerVariants(reduceMotion: boolean) {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.13,
        delayChildren: reduceMotion ? 0 : 0.06,
      },
    },
  }
}
