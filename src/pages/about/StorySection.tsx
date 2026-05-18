import './about-tea-house-section.scss'

export function StorySection() {
  return (
    <section className="about-tea-house-section" aria-labelledby="about-story-heading">
      <div className="about-tea-house-section__depth" aria-hidden="true" />
      <div className="about-tea-house-section__inner">
        <header className="about-tea-house-section__masthead">
          <p className="about-tea-house-section__eyebrow">House notes</p>
          <h2 id="about-story-heading" className="about-tea-house-section__title">
            How this place gathers around a single kettle.
          </h2>
          <div className="about-tea-house-section__rule" aria-hidden="true" />
        </header>

        <div className="about-tea-house-section__composition">
          <div className="about-tea-house-section__journal">
            <div className="about-tea-house-section__journal-rail" aria-hidden="true">
              <span className="about-tea-house-section__journal-rail-line" />
              <span className="about-tea-house-section__journal-rail-node" />
              <span className="about-tea-house-section__journal-rail-node about-tea-house-section__journal-rail-node--low" />
            </div>

            <article className="about-tea-house-section__entry">
              <h3 className="about-tea-house-section__label">Origin</h3>
              <p className="about-tea-house-section__body">
                We began with a simple wish: to treat tea as a ceremony of attention rather than a transaction.
                The room is tuned for low voices, warm wood and the gradual unfurl of aroma—from first rinse to
                last sip.
              </p>
            </article>

            <article className="about-tea-house-section__entry about-tea-house-section__entry--second">
              <h3 className="about-tea-house-section__label">Practice</h3>
              <p className="about-tea-house-section__body">
                Every service follows seasonal leaves, restrained gestures and careful timing. Guides move slowly;
                guests are invited to arrive a few breaths behind the hurry of the day. What matters here is pacing,
                not performance.
              </p>
            </article>
          </div>

          <figure className="about-tea-house-section__atelier">
            <div className="about-tea-house-section__atelier-canvas">
              <p className="about-tea-house-section__atelier-visually-hidden">
                Atmospheric illustration: amber lantern glow, cedar plank texture and drifting smoke—not a literal
                photograph.
              </p>
              <div
                className="about-tea-house-section__atelier-bokeh about-tea-house-section__atelier-bokeh--back"
                aria-hidden="true"
              />
              <div
                className="about-tea-house-section__atelier-bokeh about-tea-house-section__atelier-bokeh--ember"
                aria-hidden="true"
              />
              <div className="about-tea-house-section__atelier-lantern" aria-hidden="true" />
              <div className="about-tea-house-section__atelier-cedar" aria-hidden="true" />
              <div className="about-tea-house-section__atelier-grain" aria-hidden="true" />
              <div
                className="about-tea-house-section__atelier-smoke about-tea-house-section__atelier-smoke--a"
                aria-hidden="true"
              />
              <div
                className="about-tea-house-section__atelier-smoke about-tea-house-section__atelier-smoke--b"
                aria-hidden="true"
              />
              <div className="about-tea-house-section__atelier-edge" aria-hidden="true" />
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
