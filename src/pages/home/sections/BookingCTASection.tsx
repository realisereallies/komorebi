import { type CSSProperties } from 'react'
import { motion } from 'framer-motion'

import { useSimplifiedMotion } from '@/hooks/useSimplifiedMotion'
import { Link } from 'react-router-dom'

import { revealNestedContainerVariants } from '@/components/RevealSection/revealMotion'
import { RevealItem, RevealStagger } from '@/components/RevealSection/RevealSection'
import { FIREFLY_MOTES } from '@/data/fireflyMotes'
import { playNavTapSound } from '@/utils/playNavTapSound'

import './booking-cta-section.scss'

export function BookingCTASection() {
  const simplifiedMotion = useSimplifiedMotion()
  return (
    <section className="booking-cta-section" aria-labelledby="booking-cta-heading">
      <span className="booking-cta-section__grain" aria-hidden="true" />
      <span className="booking-cta-section__vignette" aria-hidden="true" />
      <span className="booking-cta-section__lantern" aria-hidden="true" />
      <span className="booking-cta-section__smoke" aria-hidden="true" />
      <span className="booking-cta-section__motes" aria-hidden="true">
        {FIREFLY_MOTES.map((mote) => (
          <span
            key={mote.id}
            className="booking-cta-section__mote"
            style={
              {
                '--mote-delay': `${mote.delay}s`,
                '--mote-size': `${mote.size}px`,
                left: mote.left,
                top: mote.top,
              } as CSSProperties
            }
          />
        ))}
      </span>

      <RevealStagger className="booking-cta-section__inner">
        <motion.div
          className="booking-cta-section__content"
          variants={revealNestedContainerVariants(!!simplifiedMotion)}
        >
          <RevealItem>
            <hr className="booking-cta-section__divider" aria-hidden="true" />
          </RevealItem>
          <RevealItem>
            <p className="booking-cta-section__eyebrow">RESERVATIONS</p>
          </RevealItem>
          <RevealItem>
            <h2 className="booking-cta-section__title" id="booking-cta-heading">
              Reserve a seated ritual
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="booking-cta-section__description">
              Limited placements each evening amid cedar light.
            </p>
          </RevealItem>
          <RevealItem>
            <div className="booking-cta-section__cta">
              <Link
                className="booking-cta-section__btn"
                to="/booking"
                onClick={() => playNavTapSound()}
              >
                Request a booking
              </Link>
            </div>
          </RevealItem>
        </motion.div>
      </RevealStagger>
    </section>
  )
}
