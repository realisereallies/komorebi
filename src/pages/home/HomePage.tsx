import { AtmosphereGallerySection } from './sections/AtmosphereGallerySection'
import { BookingCTASection } from './sections/BookingCTASection'
import { HeroSection } from './sections/HeroSection'
import { PhilosophySection } from './sections/PhilosophySection'
import { RitualsSection } from './sections/RitualsSection'
import { TeaCollectionSection } from './sections/TeaCollectionSection'
import { TestimonialsSection } from './sections/TestimonialsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <TeaCollectionSection />
      <RitualsSection />
      <AtmosphereGallerySection />
      <TestimonialsSection />
      <BookingCTASection />
    </>
  )
}
