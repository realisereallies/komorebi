import { RevealItem, RevealStagger } from '@/components/RevealSection/RevealSection'
import { revealViewportCompact } from '@/components/RevealSection/revealMotion'

export function PhilosophyBlockSection() {
  return (
    <section className="rituals-silence" aria-labelledby="about-philosophy-quote">
      <RevealStagger viewport={revealViewportCompact} className="rituals-silence__wrap">
        <RevealItem>
          <blockquote className="rituals-silence__blockquote">
            <p id="about-philosophy-quote" className="rituals-silence__quote">
              “Tea asks for nowhere else to be.”
            </p>
            <p className="rituals-silence__aside">
              We tend the room—the temperature of water, the weight of porcelain, the hush between pours—so you can
              stay present for what is unfolding in your cup.
            </p>
          </blockquote>
        </RevealItem>
      </RevealStagger>
    </section>
  )
}
