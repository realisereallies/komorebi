import psyImg from '../../../assets/images/psy-img.jpg'

import { RevealItem, RevealStagger } from '@/components/RevealSection/RevealSection'

import './philosophy-section.scss'

export function PhilosophySection() {
  return (
    <section className="philosophy-section" aria-labelledby="philosophy-heading">
      <div className="philosophy-section__tree-bg" aria-hidden="true" />
      <RevealStagger className="philosophy-section__inner">
        <RevealItem className="philosophy-section__copy">
          <p className="philosophy-section__label">Philosophy</p>
          <h2 id="philosophy-heading" className="philosophy-section__title">
            Tea is not consumed.
            <span className="philosophy-section__title-line">It is experienced slowly.</span>
          </h2>
          <p className="philosophy-section__lead">
            Komorebi was created as a quiet retreat for tea rituals, stillness and intentional
            evenings.
          </p>
        </RevealItem>

        <RevealItem as="figure" className="philosophy-section__figure">
          <div className="philosophy-section__figure-frame">
            <img
              className="philosophy-section__img"
              src={psyImg}
              alt="Quiet, atmospheric scene at Komorebi"
              width={720}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </div>
        </RevealItem>
      </RevealStagger>
    </section>
  )
}
