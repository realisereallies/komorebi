import './atmosphere-gallery-section.scss'

const GALLERY_ITEMS = [
  { key: 'moss', label: 'Moss garden', variant: 'moss', src: '/img/moss-garden.png' },
  { key: 'lantern', label: 'Lantern glow', variant: 'lantern', src: '/img/lantern-glow.png' },
  { key: 'kettle', label: 'Kettle steam', variant: 'kettle', src: '/img/kattle-steam.png' },
  { key: 'shadows', label: 'Tea shadows', variant: 'shadows', src: '/img/tea-shadows.png' },
  { key: 'wood', label: 'Evening wood', variant: 'wood', src: '/img/evening-wood.png' },
  { key: 'incense', label: 'Incense smoke', variant: 'incense', src: '/img/insence-smoke.png' },
] as const

export function AtmosphereGallerySection() {
  return (
    <section
      className="atmosphere-gallery"
      aria-labelledby="atmosphere-gallery-heading"
    >
      <div className="atmosphere-gallery__inner">
        <header className="atmosphere-gallery__header">
          <h2 id="atmosphere-gallery-heading" className="atmosphere-gallery__title">
            Atmosphere gallery
          </h2>
          <p className="atmosphere-gallery__subtitle">
            Moss, lanterns, kettle steam — quiet scenes from the ritual.
          </p>
        </header>

        <div
          className="atmosphere-gallery__collage"
          role="group"
          aria-label="Atmospheric gallery images"
        >
          {GALLERY_ITEMS.map(({ key, label, variant, src }) => (
            <figure
              key={key}
              className={`atmosphere-gallery__tile atmosphere-gallery__tile--${variant}`}
            >
              <div className="atmosphere-gallery__tile-shell">
                <img
                  className="atmosphere-gallery__tile-media"
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="atmosphere-gallery__caption">{label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
