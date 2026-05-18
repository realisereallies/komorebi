import { useEffect, useRef, useState, type CSSProperties } from 'react'

import './guest-voices-section.scss'

const VOICES = [
  {
    id: 'placeholder-stillness',
    quote:
      'The room felt like dusk held still—steam braided above the cups, footsteps softened on wood, ' +
      'and the evening unspooled slowly enough to hear your own pulse.',
    name: 'Guest name placeholder',
    location: 'Kyoto, Japan — placeholder',
  },
  {
    id: 'placeholder-ritual',
    quote:
      'A quiet ritual of rinsing leaves, warmed ceramic, muted light on linen—small gestures that settle ' +
      'the nerves after long days.',
    name: 'Second guest placeholder',
    location: 'Portland — placeholder',
  },
] as const

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function useReveal() {
  const ref = useRef<HTMLElement | null>(null)
  const [active, setActive] = useState(() => prefersReducedMotion())

  useEffect(() => {
    const root = ref.current
    if (!root || prefersReducedMotion()) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(root)
    return () => observer.disconnect()
  }, [])

  return { ref, active }
}

export function GuestVoicesSection() {
  const { ref, active } = useReveal()
  const stateClass = active ? 'guest-voices-section--visible' : ''

  return (
    <section
      ref={ref}
      className={`guest-voices-section ${stateClass}`}
      aria-labelledby="guest-voices-heading"
    >
      <div className="guest-voices-section__inner">
        <div className="guest-voices-section__grid">
          <header className="guest-voices-section__intro">
            <p className="guest-voices-section__eyebrow">Guest voices</p>
            <h2 id="guest-voices-heading" className="guest-voices-section__title">
              Quiet enough to hear the kettle—and yourself.
            </h2>
            <p className="guest-voices-section__lede">
              A short atmospheric placeholder note—stillness pooling in corners, kettle steam thinning the
              air, slow evenings and calm rituals drifting like incense.
            </p>
          </header>

          <div className="guest-voices-section__cards" role="list">
            {VOICES.map((voice, index) => (
              <article
                key={voice.id}
                className="guest-voices-card"
                role="listitem"
                style={{ '--guest-voices-stagger': index } as CSSProperties}
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
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
