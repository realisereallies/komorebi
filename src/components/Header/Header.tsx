import { Link, NavLink } from 'react-router-dom'

import './header.scss'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/tea', label: 'Tea', end: false },
  { to: '/rituals', label: 'Rituals', end: false },
  { to: '/about', label: 'About', end: false },
  { to: '/booking', label: 'Booking', end: false },
] as const

export function Header() {
  return (
    <header className="header" role="banner">
      <div className="header__inner">
        <Link className="header__brand" to="/">
          <img
            className="header__logo"
            src="/img/logo.png"
            alt=""
            decoding="async"
          />
          <span className="header__brandText">Komorebi</span>
        </Link>
        <nav className="header__nav" aria-label="Primary">
          <ul>
            {navItems.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink className={navClassName} end={end} to={to}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

function navClassName({ isActive }: { isActive: boolean }) {
  return `header__navlink${isActive ? ' header__navlink--active' : ''}`
}
