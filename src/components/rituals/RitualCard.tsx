export type RitualCardProps = {
  title: string
  summary: string
}

export function RitualCard({ title, summary }: RitualCardProps) {
  return (
    <article
      className="ritual-card"
      aria-labelledby={`ritual-${sanitizeId(title)}`}
    >
      <h3 id={`ritual-${sanitizeId(title)}`}>{title}</h3>
      <p>{summary}</p>
    </article>
  )
}

function sanitizeId(label: string) {
  return label.toLowerCase().replace(/\s+/g, '-')
}
