import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import './header.scss'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/tea', label: 'Tea', end: false },
  { to: '/rituals', label: 'Rituals', end: false },
  { to: '/about', label: 'About', end: false },
  { to: '/booking', label: 'Booking', end: false },
] as const

const mobileNavMq = '(max-width: 767.98px)'

export function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const [isMobileNav, setIsMobileNav] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(mobileNavMq).matches,
  )
  const location = useLocation()

  useEffect(() => {
    const mq = window.matchMedia(mobileNavMq)
    const apply = () => {
      const mobile = mq.matches
      setIsMobileNav(mobile)
      if (!mobile) setNavOpen(false)
    }
    const id = requestAnimationFrame(apply)
    mq.addEventListener('change', apply)
    return () => {
      cancelAnimationFrame(id)
      mq.removeEventListener('change', apply)
    }
  }, [])

  useEffect(() => {
    const id = requestAnimationFrame(() => setNavOpen(false))
    return () => cancelAnimationFrame(id)
  }, [location.pathname])

  useEffect(() => {
    if (!navOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setNavOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navOpen])

  useEffect(() => {
    if (!navOpen || !isMobileNav) return
    const prevBodyOverflow = document.body.style.overflow
    const prevHtmlOverflow = document.documentElement.style.overflow
    const prevOverscroll = document.documentElement.style.overscrollBehavior
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    document.documentElement.style.overscrollBehavior = 'none'
    return () => {
      document.body.style.overflow = prevBodyOverflow
      document.documentElement.style.overflow = prevHtmlOverflow
      document.documentElement.style.overscrollBehavior = prevOverscroll
    }
  }, [navOpen, isMobileNav])

  const closeNav = () => setNavOpen(false)
  const toggleNav = () => setNavOpen((o) => !o)

  const headerMod = navOpen && isMobileNav ? ' header--nav-open' : ''
  const navAriaHidden = isMobileNav && !navOpen ? true : undefined

  return (
    <header className={`header${headerMod}`} role="banner">
      <div
        className="header__backdrop"
        aria-hidden="true"
        onClick={closeNav}
      />
      <div className="header__inner">
        <div className="header__row">
          <Link className="header__brand" to="/" onClick={closeNav}>
            <img
              className="header__logo"
              src="/img/logo.png"
              alt=""
              decoding="async"
            />
            <span className="header__brandText">Komorebi</span>
          </Link>

          <nav
            id="site-primary-nav"
            className="header__nav"
            aria-label="Primary"
            aria-hidden={navAriaHidden}
          >
            <ul>
              {navItems.map(({ to, label, end }) => (
                <li key={to}>
                  <NavLink
                    className={navClassName}
                    end={end}
                    to={to}
                    onClick={closeNav}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="header__burger"
            aria-expanded={isMobileNav ? navOpen : undefined}
            aria-controls="site-primary-nav"
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
            onClick={toggleNav}
          >
            <span className="header__burgerIcon" aria-hidden="true">
              <span className="header__burgerLine" />
              <span className="header__burgerLine" />
              <span className="header__burgerLine" />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

function navClassName({ isActive }: { isActive: boolean }) {
  return `header__navlink${isActive ? ' header__navlink--active' : ''}`
}
