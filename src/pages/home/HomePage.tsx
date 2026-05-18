import { AtmosphereGallerySection } from './sections/AtmosphereGallerySection'
import { BookingCTASection } from './sections/BookingCTASection'
import { GuestVoicesSection } from './sections/GuestVoicesSection'
import { HeroSection } from './sections/HeroSection'
import { PhilosophySection } from './sections/PhilosophySection'
import { RitualsSection } from './sections/RitualsSection'
import { TeaCollectionSection } from './sections/TeaCollectionSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <TeaCollectionSection />
      <RitualsSection />
      <GuestVoicesSection />
      <AtmosphereGallerySection />
      <BookingCTASection />
    </>
  )
}
