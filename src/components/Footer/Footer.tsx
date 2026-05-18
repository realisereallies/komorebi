import { Link } from 'react-router-dom'

import './Footer.scss'

const footerNav = [
  { to: '/', label: 'Home' },
  { to: '/tea', label: 'Tea' },
  { to: '/rituals', label: 'Rituals' },
  { to: '/about', label: 'About' },
  { to: '/booking', label: 'Booking' },
] as const

const socialLinks = [
  { href: '#', label: 'Instagram', ariaLabel: 'Instagram (placeholder)' },
  { href: '#', label: 'Chronicle', ariaLabel: 'X (placeholder)' },
  { href: '#', label: 'Inquiry', ariaLabel: 'Email (placeholder)' },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__divider" aria-hidden="true" />

      <div className="footer__shell">
        <div className="footer__intro">
          <Link to="/" className="footer__wordmark">
            Komorebi
          </Link>
          <span className="footer__subtitle">Tea House</span>
          <p className="footer__whisper">
            Woodland light — a slow close to your visit.
          </p>
        </div>

        <div className="footer__clusters">
          <div className="footer__column footer__column--paths">
            <p className="footer__microLabel">Explore</p>
            <nav className="footer__nav footer__nav--primary" aria-label="Footer">
              <ul className="footer__linkRail">
                {footerNav.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="footer__link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="footer__column footer__column--connect">
            <p className="footer__microLabel">Connect</p>
            <nav className="footer__nav footer__nav--social" aria-label="Social links">
              <ul className="footer__linkRail footer__linkRail--compact">
                {socialLinks.map(({ href, label, ariaLabel }) => (
                  <li key={ariaLabel}>
                    <a href={href} className="footer__link footer__link--bare" aria-label={ariaLabel}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="footer__notice">Reservations warmly suggested.</p>
          </div>
        </div>

        <div className="footer__footnote">
          <p className="footer__rights">© {year} Komorebi Tea House</p>
          <span className="footer__dividerDot" aria-hidden="true">
            ◦
          </span>
          <p className="footer__locale">Quiet luxury · Kyoto spirit</p>
        </div>
      </div>
    </footer>
  )
}
