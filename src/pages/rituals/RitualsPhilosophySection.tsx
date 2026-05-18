import { RevealItem, RevealStagger } from '@/components/RevealSection/RevealSection'

export function RitualsPhilosophySection() {
  return (
    <section className="rituals-silence" aria-labelledby="philosophy-silence-quote">
      <RevealStagger className="rituals-silence__wrap">
        <RevealItem>
          <blockquote className="rituals-silence__blockquote">
            <p id="philosophy-silence-quote" className="rituals-silence__quote">
              “The kettle speaks first.”
            </p>
            <p className="rituals-silence__aside">
              Some ceremonies unfold without conversation—only steam, breathing and listening.
            </p>
          </blockquote>
        </RevealItem>
      </RevealStagger>
    </section>
  )
}
