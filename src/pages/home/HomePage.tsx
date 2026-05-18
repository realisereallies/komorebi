import { BookingCTASection } from './sections/BookingCTASection'
import { GallerySection } from './sections/GallerySection'
import { HeroSection } from './sections/HeroSection'
import { PhilosophySection } from './sections/PhilosophySection'
import { RitualExperienceSection } from './sections/RitualExperienceSection'
import { TeaCollectionSection } from './sections/TeaCollectionSection'
import { TestimonialsSection } from './sections/TestimonialsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <TeaCollectionSection />
      <RitualExperienceSection />
      <GallerySection />
      <TestimonialsSection />
      <BookingCTASection />
    </>
  )
}
