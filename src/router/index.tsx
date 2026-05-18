import { Route, Routes } from 'react-router-dom'

import { MainLayout } from '@/layouts/MainLayout/MainLayout'
import { AboutPage } from '@/pages/about/AboutPage'
import { BookingPage } from '@/pages/booking/BookingPage'
import { HomePage } from '@/pages/home/HomePage'
import { NotFoundPage } from '@/pages/not-found/NotFoundPage'
import { RitualsPage } from '@/pages/rituals/RitualsPage'
import { TeaCollectionPage } from '@/pages/tea-collection/TeaCollectionPage'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tea" element={<TeaCollectionPage />} />
        <Route path="rituals" element={<RitualsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
