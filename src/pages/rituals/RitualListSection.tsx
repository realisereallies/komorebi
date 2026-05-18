import { RitualCard } from '@/components/rituals/RitualCard'

const mockRituals = [
  {
    id: 'evening-ceremony',
    title: 'Evening Ceremony',
    summary: 'Charcoal-lit temae with seasonal wagashi pairing.',
  },
  {
    id: 'forest-meditation',
    title: 'Forest Meditation',
    summary: 'Guided silence among cedar before a standing tea service.',
  },
  {
    id: 'silent-tea',
    title: 'Silent Tea Ritual',
    summary: 'No speaking—only pour, sip, and listen to the kettle.',
  },
] as const

export function RitualListSection() {
  return (
    <section aria-labelledby="ritual-list-heading">
      <h2 id="ritual-list-heading">Signature experiences</h2>
      <ul className="ritual-grid">
        {mockRituals.map((ritual) => (
          <li key={ritual.id}>
            <RitualCard title={ritual.title} summary={ritual.summary} />
          </li>
        ))}
      </ul>
    </section>
  )
}
