import { type CSSProperties } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { revealNestedContainerVariants } from '@/components/RevealSection/revealMotion'
import { RevealItem, RevealStagger } from '@/components/RevealSection/RevealSection'

import './booking-cta-section.scss'

const MOTES = [
  { id: 'm1', left: '14%', top: '72%', size: 3.15, delay: 0 },
  { id: 'm2', left: '22%', top: '56%', size: 4, delay: 2.2 },
  { id: 'm3', left: '31%', top: '68%', size: 2.85, delay: 4.8 },
  { id: 'm4', left: '76%', top: '54%', size: 3.65, delay: 1.1 },
  { id: 'm5', left: '82%', top: '62%', size: 3.1, delay: 6.4 },
  { id: 'm6', left: '58%', top: '71%', size: 3.35, delay: 3.6 },
  { id: 'm7', left: '67%', top: '48%', size: 2.9, delay: 8.1 },
  { id: 'm8', left: '8%', top: '44%', size: 3.4, delay: 1.8 },
  { id: 'm9', left: '42%', top: '82%', size: 2.75, delay: 5.5 },
  { id: 'm10', left: '91%', top: '38%', size: 3.25, delay: 0.6 },
  { id: 'm11', left: '52%', top: '34%', size: 2.95, delay: 9.2 },
  { id: 'm12', left: '18%', top: '88%', size: 3.5, delay: 3.9 },
  { id: 'm13', left: '38%', top: '50%', size: 2.65, delay: 7.4 },
  { id: 'm14', left: '71%', top: '78%', size: 3.2, delay: 2.7 },
  { id: 'm15', left: '94%', top: '70%', size: 2.55, delay: 10.1 },
  { id: 'm16', left: '5%', top: '63%', size: 3.8, delay: 4.3 },
  { id: 'm17', left: '48%', top: '64%', size: 3.05, delay: 6.8 },
  { id: 'm18', left: '63%', top: '40%', size: 2.8, delay: 11.4 },
  { id: 'm19', left: '29%', top: '40%', size: 3.3, delay: 1.4 },
  { id: 'm20', left: '86%', top: '86%', size: 3.45, delay: 8.7 },
  { id: 'm21', left: '73%', top: '32%', size: 2.7, delay: 5.1 },
  { id: 'm22', left: '35%', top: '92%', size: 2.6, delay: 12.8 },
] as const

export function BookingCTASection() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="booking-cta-section" aria-labelledby="booking-cta-heading">
      <span className="booking-cta-section__grain" aria-hidden="true" />
      <span className="booking-cta-section__vignette" aria-hidden="true" />
      <span className="booking-cta-section__lantern" aria-hidden="true" />
      <span className="booking-cta-section__smoke" aria-hidden="true" />
      <span className="booking-cta-section__motes" aria-hidden="true">
        {MOTES.map((mote) => (
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
          variants={revealNestedContainerVariants(!!reduceMotion)}
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
              <Link className="booking-cta-section__btn" to="/booking">
                Request a booking
              </Link>
            </div>
          </RevealItem>
        </motion.div>
      </RevealStagger>
    </section>
  )
}
