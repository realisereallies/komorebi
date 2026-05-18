import { motion } from 'framer-motion'

import { useSimplifiedMotion } from '@/hooks/useSimplifiedMotion'
import type { HTMLMotionProps, MotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

import {
  revealItemTransition,
  revealItemVariants,
  revealViewport,
  staggerContainerVariants,
} from './revealMotion'

const motionItemMap = {
  article: motion.article,
  div: motion.div,
  figure: motion.figure,
  header: motion.header,
  span: motion.span,
} as const

export type RevealItemTag = keyof typeof motionItemMap

type RevealItemProps = {
  as?: RevealItemTag
  children: ReactNode
} & Omit<HTMLMotionProps<'div'>, 'children' | 'variants' | 'transition'>

export function RevealItem({ as = 'div', children, ...rest }: RevealItemProps) {
  const simplifiedMotion = useSimplifiedMotion()
  const MotionEl = motionItemMap[as]
  return (
    <MotionEl variants={revealItemVariants} transition={revealItemTransition(!!simplifiedMotion)} {...rest}>
      {children}
    </MotionEl>
  )
}

type RevealStaggerProps = {
  children: ReactNode
  className?: string
  viewport?: MotionProps['viewport']
}

export function RevealStagger({ children, className, viewport }: RevealStaggerProps) {
  const simplifiedMotion = useSimplifiedMotion()
  return (
    <motion.div
      className={className}
      variants={staggerContainerVariants(!!simplifiedMotion)}
      initial={simplifiedMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={viewport ?? revealViewport}
    >
      {children}
    </motion.div>
  )
}

type RevealSectionProps = {
  children: ReactNode
  className?: string
  viewport?: MotionProps['viewport']
}

export function RevealSection({ children, className, viewport }: RevealSectionProps) {
  const simplifiedMotion = useSimplifiedMotion()
  return (
    <motion.div
      className={className}
      variants={revealItemVariants}
      initial={simplifiedMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={viewport ?? revealViewport}
      transition={revealItemTransition(!!simplifiedMotion)}
    >
      {children}
    </motion.div>
  )
}
