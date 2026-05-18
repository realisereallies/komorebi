import { RevealItem, RevealStagger } from '@/components/RevealSection/RevealSection'

const steps = [
  'Arrival',
  'Incense preparation',
  'Breathing pause',
  'Tea pouring',
  'Silent tasting',
  'Departure',
] as const

export function RitualsFlowSection() {
  return (
    <section className="rituals-flow" aria-labelledby="rituals-flow-heading">
      <RevealStagger className="rituals-flow__wrap">
        <RevealItem as="header" className="rituals-flow__intro">
          <h2 id="rituals-flow-heading" className="rituals-flow__title">
            Ritual flow
          </h2>
        </RevealItem>

        <RevealItem>
          <ol className="rituals-flow__timeline">
            {steps.map((label, index) => (
              <li key={label} className="rituals-flow__step">
                <span className="rituals-flow__label">{label}</span>
                {index < steps.length - 1 ? (
                  <span className="rituals-flow__glyph" aria-hidden="true">
                    <span className="rituals-flow__line" />
                    <span className="rituals-flow__caret">↓</span>
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </RevealItem>
      </RevealStagger>
    </section>
  )
}
