import { Link } from 'react-router-dom'

import { RevealSection } from '@/components/RevealSection/RevealSection'

export function NotFoundPage() {
  return (
    <RevealSection>
      <section className="page page--not-found" aria-labelledby="not-found-heading">
        <h1 id="not-found-heading" className="page__title">
          404
        </h1>
        <p className="page__lead">
          This path folds into fog—nothing is served here yet.
        </p>
        <nav aria-label="Return home">
          <Link to="/">Return home</Link>
        </nav>
      </section>
    </RevealSection>
  )
}
