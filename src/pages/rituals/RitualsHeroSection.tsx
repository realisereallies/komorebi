export function RitualsHeroSection() {
  return (
    <section className="rituals-hero" aria-labelledby="rituals-page-hero-heading">
      <span className="rituals-hero__ambient" aria-hidden="true">
        <span className="rituals-hero__lantern rituals-hero__lantern--a" />
        <span className="rituals-hero__lantern rituals-hero__lantern--b" />
        <span className="rituals-hero__vignette" />
      </span>

      <header className="rituals-hero__inner">
        <p className="rituals-hero__eyebrow">Our rituals</p>
        <h1 id="rituals-page-hero-heading" className="rituals-hero__title">
          Guided ceremonies for twilight forests and silent rooms.
        </h1>
        <p className="rituals-hero__lede">
          Each ritual unfolds slowly through steam, incense, cedar and silence.
        </p>
      </header>
    </section>
  )
}
