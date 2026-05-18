import './tea-rituals-divider.scss'

export function TeaRitualsDivider() {
  return (
    <div className="tea-rituals-divider" role="presentation" aria-hidden="true">
      <div className="tea-rituals-divider__glow" />
      <div className="tea-rituals-divider__row">
        <span className="tea-rituals-divider__line tea-rituals-divider__line--left" />
        <span className="tea-rituals-divider__symbol">
          <span className="tea-rituals-divider__symbol-core">✦</span>
        </span>
        <span className="tea-rituals-divider__line tea-rituals-divider__line--right" />
      </div>
    </div>
  )
}
