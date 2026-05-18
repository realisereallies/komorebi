import { motion, type TargetAndTransition, useReducedMotion } from 'framer-motion'

import { revealNestedContainerVariants } from '@/components/RevealSection/revealMotion'
import { RevealItem, RevealStagger } from '@/components/RevealSection/RevealSection'

const rituals = [
  {
    id: 'evening-ceremony',
    title: 'Evening Ceremony',
    body: 'Charcoal-lit temae with seasonal wagashi pairing.',
    visualTone: 'ember' as const,
  },
  {
    id: 'forest-meditation',
    title: 'Forest Meditation',
    body: 'Guided silence among cedar before a standing tea service.',
    visualTone: 'cedar' as const,
  },
  {
    id: 'silent-tea',
    title: 'Silent Tea Ritual',
    body: 'No speaking—only pour, sip, and listen to the kettle.',
    visualTone: 'mist' as const,
  },
] as const

export function RitualsSignatureSection() {
  const reduceMotion = useReducedMotion()
  const hoverLift: TargetAndTransition | undefined = reduceMotion
    ? undefined
    : { y: -3, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }

  return (
    <section className="rituals-signature" aria-labelledby="rituals-signature-heading">
      <RevealStagger className="rituals-signature__wrap">
        <RevealItem as="header" className="rituals-signature__intro">
          <h2 id="rituals-signature-heading" className="rituals-signature__title">
            Signature experiences
          </h2>
        </RevealItem>

        <motion.div
          className="rituals-signature__list"
          variants={revealNestedContainerVariants(!!reduceMotion)}
        >
          {rituals.map((ritual, index) => (
            <RevealItem
              key={ritual.id}
              as="article"
              className={`rituals-editorial${index % 2 === 1 ? ' rituals-editorial--reverse' : ''}`}
              whileHover={hoverLift}
            >
              <div className={`rituals-editorial__visual rituals-editorial__visual--${ritual.visualTone}`}>
                <span className="rituals-editorial__blur" aria-hidden="true" />
                <span className="rituals-editorial__smoke" aria-hidden="true" />
              </div>
              <div className="rituals-editorial__copy">
                <h3 className="rituals-editorial__name">{ritual.title}</h3>
                <p className="rituals-editorial__text">{ritual.body}</p>
              </div>
            </RevealItem>
          ))}
        </motion.div>
      </RevealStagger>
    </section>
  )
}
