export type TeaCardProps = {
  name: string
  description: string
}

export function TeaCard({ name, description }: TeaCardProps) {
  return (
    <article className="tea-card" aria-labelledby={`tea-${sanitizeId(name)}`}>
      <h3 id={`tea-${sanitizeId(name)}`}>{name}</h3>
      <p>{description}</p>
    </article>
  )
}

function sanitizeId(label: string) {
  return label.toLowerCase().replace(/\s+/g, '-')
}
