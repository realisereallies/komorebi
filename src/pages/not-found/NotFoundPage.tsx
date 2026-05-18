import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
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
  )
}
