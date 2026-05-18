export type TeaCardProps = {
  teaId: string
  name: string
  description: string
  origin: string
}

export function TeaCard({ teaId, name, description, origin }: TeaCardProps) {
  const headingId = `tea-${sanitizeId(name)}`
  return (
    <article
      className={`tea-archive-card tea-archive-card--${teaId}`}
      aria-labelledby={headingId}
    >
      <div className="tea-archive-card__sheen" aria-hidden="true" />
      <div className="tea-archive-card__inner">
        <p className="tea-archive-card__origin">{origin}</p>
        <h3 id={headingId} className="tea-archive-card__name">
          {name}
        </h3>
        <p className="tea-archive-card__notes">{description}</p>
      </div>
    </article>
  )
}

function sanitizeId(label: string) {
  return label.toLowerCase().replace(/\s+/g, '-')
}
