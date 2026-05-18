import { motion, useReducedMotion } from 'framer-motion'

import { revealNestedContainerVariants } from '@/components/RevealSection/revealMotion'
import { RevealItem, RevealStagger } from '@/components/RevealSection/RevealSection'

import './guest-voices-section.scss'

const VOICES = [
  {
    id: 'voice-stillness',
    quote:
      'The room felt like dusk held still—steam braided above the cups, footsteps softened on wood, ' +
      'and the evening unspooled slowly enough to hear your own pulse.',
    name: 'Rei Okada',
    location: 'Kyoto, Japan',
  },
  {
    id: 'voice-ritual',
    quote:
      'A quiet ritual of rinsing leaves, warmed ceramic, muted light on linen—small gestures that settle ' +
      'the nerves after long days.',
    name: 'Eleanor Wright',
    location: 'Portland, Oregon',
  },
] as const

export function GuestVoicesSection() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="guest-voices-section" aria-labelledby="guest-voices-heading">
      <div className="guest-voices-section__inner">
        <RevealStagger className="guest-voices-section__grid">
          <RevealItem as="header" className="guest-voices-section__intro">
            <p className="guest-voices-section__eyebrow">Guest voices</p>
            <h2 id="guest-voices-heading" className="guest-voices-section__title">
              Quiet enough to hear the kettle—and yourself.
            </h2>
            <p className="guest-voices-section__lede">
              A short atmospheric placeholder note—stillness pooling in corners, kettle steam thinning the
              air, slow evenings and calm rituals drifting like incense.
            </p>
          </RevealItem>

          <motion.div
            className="guest-voices-section__cards"
            role="list"
            variants={revealNestedContainerVariants(!!reduceMotion)}
          >
            {VOICES.map((voice) => (
              <RevealItem
                key={voice.id}
                as="article"
                className="guest-voices-card"
                role="listitem"
              >
                <div className="guest-voices-card__glow" aria-hidden="true" />
                <blockquote className="guest-voices-card__quote">
                  <p>{voice.quote}</p>
                </blockquote>
                <footer className="guest-voices-card__meta">
                  <div
                    className="guest-voices-card__avatar guest-voices-card__avatar--placeholder"
                    aria-hidden="true"
                    title="Portrait placeholder"
                  />
                  <div className="guest-voices-card__byline">
                    <p className="guest-voices-card__name">{voice.name}</p>
                    <p className="guest-voices-card__location">{voice.location}</p>
                  </div>
                </footer>
              </RevealItem>
            ))}
          </motion.div>
        </RevealStagger>
      </div>
    </section>
  )
}
