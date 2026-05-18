import { Link } from 'react-router-dom'

export function RitualExperienceSection() {
  return (
    <section aria-labelledby="ritual-experience-heading">
      <h2 id="ritual-experience-heading">Rituals</h2>
      <p>Evenings shaped by incense, kettle steam, measured breath.</p>
      <p>
        <Link to="/rituals">View ceremonial experiences</Link>
      </p>
    </section>
  )
}
