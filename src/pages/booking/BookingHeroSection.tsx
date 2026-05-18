import '../home/sections/hero-section.scss'

import './booking-hero-section.scss'

export function BookingHeroSection() {
  return (
    <section
      className="hero-section hero-section--booking"
      aria-labelledby="booking-heading"
    >
      <div className="hero-section__media" aria-hidden="true" />
      <div className="hero-section__inner">
        <div className="hero-section__content hero-section__content--booking">
          <p className="hero-section__eyebrow">Japanese Tea Retreat</p>
          <h1 className="hero-section__title" id="booking-heading">
            <span className="hero-section__title-line">Booking</span>
          </h1>
          <p className="booking-hero__lede">
            Request a seated ritual—we reply with refined availability notes.
          </p>
          <form className="booking-form" aria-describedby="booking-heading">
            <div className="booking-form__grid">
              <div className="booking-form__group booking-form__group--name">
                <label htmlFor="booking-name">Name</label>
                <input id="booking-name" name="name" type="text" autoComplete="name" />
              </div>
              <div className="booking-form__group booking-form__group--email">
                <label htmlFor="booking-email">Email</label>
                <input
                  id="booking-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </div>
              <div className="booking-form__group booking-form__group--phone">
                <label htmlFor="booking-phone">Phone</label>
                <input
                  id="booking-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                />
              </div>
              <div className="booking-form__group booking-form__group--date">
                <label htmlFor="booking-date">Preferred date</label>
                <input id="booking-date" name="date" type="date" />
              </div>
              <div className="booking-form__group booking-form__group--message">
                <label htmlFor="booking-message">Message</label>
                <textarea id="booking-message" name="message" rows={4} />
              </div>
            </div>
            <div className="booking-form__actions">
              <button type="submit">Submit request</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
