import { Link } from 'react-router-dom'

export function BookingCTASection() {
  return (
    <section aria-labelledby="booking-cta-heading">
      <h2 id="booking-cta-heading">Reserve a seated ritual</h2>
      <p>Limited placements each evening amid cedar light.</p>
      <p>
        <Link to="/booking">Request a booking</Link>
      </p>
    </section>
  )
}
