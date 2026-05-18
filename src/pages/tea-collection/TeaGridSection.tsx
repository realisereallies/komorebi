import { TeaCard } from '@/components/tea/TeaCard'

const mockData = [
  {
    id: 'matcha',
    name: 'Matcha',
    description: 'Stone-milled emerald froth made for ceremonial stillness.',
  },
  {
    id: 'sencha',
    name: 'Sencha',
    description: 'Bright steamed leaves with coastal breeze aromatics.',
  },
  {
    id: 'hojicha',
    name: 'Hojicha',
    description: 'Roasted warmth with low caffeine for twilight pours.',
  },
  {
    id: 'jasmine',
    name: 'Jasmine Tea',
    description: 'Night-bloomed blossoms layered onto tender green tea.',
  },
] as const

export function TeaGridSection() {
  return (
    <section aria-labelledby="tea-grid-heading">
      <h2 id="tea-grid-heading">Curated teas</h2>
      <ul className="tea-grid">
        {mockData.map((tea) => (
          <li key={tea.id}>
            <TeaCard name={tea.name} description={tea.description} />
          </li>
        ))}
      </ul>
    </section>
  )
}
