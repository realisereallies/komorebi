import { Link } from 'react-router-dom'

import './hero-section.scss'

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-section__media" aria-hidden="true" />
      <div className="hero-section__inner">
        <div className="hero-section__content">
          <p className="hero-section__eyebrow">Japanese Tea Retreat</p>
          <h1 className="hero-section__title" id="hero-heading">
            <span className="hero-section__title-line">Silence</span>
            <span className="hero-section__title-line">Between Leaves</span>
          </h1>
          <div className="hero-section__cta">
            <Link className="hero-section__btn" to="/rituals">
              Enter the House
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
