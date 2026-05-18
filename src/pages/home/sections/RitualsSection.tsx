import { Link } from 'react-router-dom'

import { TeaRitualsDivider } from './TeaRitualsDivider'
import './rituals-section.scss'

const ritualScenes = [
  {
    id: 'incense-dusk',
    src: '/img/incense-dusk.jpg',
    alt: 'Incense smoke drifting in dim copper evening light',
    objectPosition: '48% 38%',
    caption: 'Incense at dusk',
    hint: 'Smoky copper light, slow air.',
  },
  {
    id: 'kettle-hush',
    src: '/img/kettle-hush.jpg',
    alt: 'Steam rising from a kettle in quiet, low light',
    objectPosition: '52% 44%',
    caption: 'Kettle hush',
    hint: 'Steam lifting through measured silence.',
  },
  {
    id: 'ceremony-floor',
    src: '/img/ceremony-floor.jpg',
    alt: 'Warm shadows and muted tones across a ceremonial space',
    objectPosition: '50% 46%',
    caption: 'Ceremony floor',
    hint: 'Warm shadow, amber at the edges.',
  },
] as const

export function RitualsSection() {
  return (
    <section className="rituals-section" aria-labelledby="rituals-heading">
      <TeaRitualsDivider />

      <div className="rituals-section__inner">
        <header className="rituals-section__intro">
          <p className="rituals-section__eyebrow">Rituals</p>
          <h2 id="rituals-heading" className="rituals-section__title">
            <span className="rituals-section__title-line">Evenings shaped by incense,</span>
            <span className="rituals-section__title-line">kettle steam,</span>
            <span className="rituals-section__title-line rituals-section__title-line--muted">
              measured breath.
            </span>
          </h2>
          <Link className="rituals-section__cta" to="/rituals">
            View ceremonial experiences
          </Link>
        </header>

        <div className="rituals-section__grid" role="list">
          {ritualScenes.map((scene) => (
            <article key={scene.id} className="rituals-card" role="listitem">
              <figure className="rituals-card__figure">
                <div className="rituals-card__frame">
                  <img
                    className="rituals-card__media"
                    src={scene.src}
                    alt={scene.alt}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: scene.objectPosition }}
                    sizes="(min-width: 48rem) 28vw, 100vw"
                  />
                </div>
              </figure>
              <div className="rituals-card__meta">
                <p className="rituals-card__caption">{scene.caption}</p>
                <p className="rituals-card__hint">{scene.hint}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
