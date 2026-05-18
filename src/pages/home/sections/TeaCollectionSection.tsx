import { motion } from 'framer-motion'

import { useSimplifiedMotion } from '@/hooks/useSimplifiedMotion'
import { Link } from 'react-router-dom'

import { revealNestedContainerVariants } from '@/components/RevealSection/revealMotion'
import { RevealItem, RevealStagger } from '@/components/RevealSection/RevealSection'

import './tea-collection-section.scss'

const teaLeavesImg = '/img/tea-leaves.jpg'
const cupsImg = '/img/cups.webp'
const teaRitualImg = '/img/tea-ritual.avif'

export function TeaCollectionSection() {
  const simplifiedMotion = useSimplifiedMotion()
  return (
    <section className="tea-collection-section" aria-labelledby="tea-collection-heading">
      <div className="tea-collection-section__inner">
        <RevealStagger className="tea-collection-section__layout">
          <RevealItem className="tea-collection-section__copy">
            <p className="tea-collection-section__eyebrow">Tea Collection</p>
            <h2 id="tea-collection-heading" className="tea-collection-section__title">
              <span className="tea-collection-section__title-line">Garden-grown leaves,</span>
              <span className="tea-collection-section__title-line">shaded stone mills,</span>
              <span className="tea-collection-section__title-line tea-collection-section__title-line--muted">
                restrained aromatics.
              </span>
            </h2>
            <p className="tea-collection-section__lead">
              A curated selection of Japanese teas shaped by shade, steam and silence.
            </p>
            <Link className="tea-collection-section__ghost" to="/tea">
              Explore collection
            </Link>
          </RevealItem>

          <motion.div
            className="tea-collection-section__mosaic"
            role="group"
            aria-label="Tea collection visuals"
            variants={revealNestedContainerVariants(!!simplifiedMotion)}
          >
            <RevealItem
              as="figure"
              className="tea-collection-section__tile tea-collection-section__tile--pillar"
            >
              <div className="tea-collection-section__tile-frame">
                <img
                  className="tea-collection-section__tile-media"
                  src={teaLeavesImg}
                  alt="Tea leaves layered in subdued garden shade"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 48rem) 42vw, 100vw"
                />
              </div>
            </RevealItem>

            <div className="tea-collection-section__satellites">
              <RevealItem
                as="figure"
                className="tea-collection-section__tile tea-collection-section__tile--ritual"
              >
                <div className="tea-collection-section__tile-frame">
                  <img
                    className="tea-collection-section__tile-media"
                    src={teaRitualImg}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 48rem) 28vw, 88vw"
                  />
                </div>
              </RevealItem>

              <RevealItem
                as="figure"
                className="tea-collection-section__tile tea-collection-section__tile--cups"
              >
                <div className="tea-collection-section__tile-frame">
                  <img
                    className="tea-collection-section__tile-media"
                    src={cupsImg}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 48rem) 36vw, 100vw"
                  />
                </div>
              </RevealItem>
            </div>
          </motion.div>
        </RevealStagger>
      </div>
    </section>
  )
}
