import { motion } from 'framer-motion'

import { useSimplifiedMotion } from '@/hooks/useSimplifiedMotion'
import { Link } from 'react-router-dom'

import { revealNestedContainerVariants } from '@/components/RevealSection/revealMotion'
import { RevealItem, RevealStagger } from '@/components/RevealSection/RevealSection'

import './hero-section.scss'

export function HeroSection() {
  const simplifiedMotion = useSimplifiedMotion()

  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-section__media" aria-hidden="true" />
      <div className="hero-section__inner">
        <RevealStagger className="hero-section__content">
          <RevealItem>
            <p className="hero-section__eyebrow">Japanese Tea Retreat</p>
          </RevealItem>
          <motion.h1
            id="hero-heading"
            className="hero-section__title"
            variants={revealNestedContainerVariants(!!simplifiedMotion)}
          >
            <RevealItem as="span" className="hero-section__title-line">
              Silence
            </RevealItem>
            <RevealItem as="span" className="hero-section__title-line">
              Between Leaves
            </RevealItem>
          </motion.h1>
          <RevealItem>
            <div className="hero-section__cta">
              <Link className="hero-section__btn" to="/rituals">
                Enter the House
              </Link>
            </div>
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  )
}
