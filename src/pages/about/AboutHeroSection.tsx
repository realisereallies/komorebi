import { RevealItem, RevealStagger } from '@/components/RevealSection/RevealSection'
import { revealViewportCompact } from '@/components/RevealSection/revealMotion'

export function AboutHeroSection() {
  return (
    <section className="rituals-hero" aria-labelledby="about-page-hero-heading">
      <span className="rituals-hero__ambient" aria-hidden="true">
        <span className="rituals-hero__lantern rituals-hero__lantern--a" />
        <span className="rituals-hero__lantern rituals-hero__lantern--b" />
        <span className="rituals-hero__vignette" />
      </span>

      <header className="rituals-hero__inner">
        <RevealStagger viewport={revealViewportCompact}>
          <RevealItem>
            <p className="rituals-hero__eyebrow">About</p>
          </RevealItem>
          <RevealItem>
            <h1 id="about-page-hero-heading" className="rituals-hero__title">
              A quiet room for cedar, kettle steam and lingering light.
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="rituals-hero__lede">
              Komorebi is imagined as an evening harbor—tea served without hurry, rituals held with restraint,
              and space left for silence.
            </p>
          </RevealItem>
        </RevealStagger>
      </header>
    </section>
  )
}
