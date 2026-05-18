import { motion, useReducedMotion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
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
  const reduceMotion = useReducedMotion()
  const MotionEl = motionItemMap[as]
  return (
    <MotionEl variants={revealItemVariants} transition={revealItemTransition(!!reduceMotion)} {...rest}>
      {children}
    </MotionEl>
  )
}

type RevealStaggerProps = {
  children: ReactNode
  className?: string
}

export function RevealStagger({ children, className }: RevealStaggerProps) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={staggerContainerVariants(!!reduceMotion)}
      initial={reduceMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={revealViewport}
    >
      {children}
    </motion.div>
  )
}

type RevealSectionProps = {
  children: ReactNode
  className?: string
}

export function RevealSection({ children, className }: RevealSectionProps) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={revealItemVariants}
      initial={reduceMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={revealViewport}
      transition={revealItemTransition(!!reduceMotion)}
    >
      {children}
    </motion.div>
  )
}
