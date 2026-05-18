import { Outlet, useLocation } from 'react-router-dom'

import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'

import './MainLayout.scss'

export function MainLayout() {
  const { pathname } = useLocation()
  const isFullBleedUnderHeader = pathname === '/' || pathname === '/booking'

  return (
    <div className="shell">
      <Header />
      <main
        className={`shell__main${isFullBleedUnderHeader ? '' : ' shell__main--offset'}`}
        id="main-content"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
