import { RevealSection } from '@/components/RevealSection/RevealSection'

import { AboutHeroSection } from './AboutHeroSection'
import { PhilosophyBlockSection } from './PhilosophyBlockSection'
import { StorySection } from './StorySection'

export function AboutPage() {
  return (
    <>
      <RevealSection>
        <AboutHeroSection />
      </RevealSection>
      <RevealSection>
        <StorySection />
      </RevealSection>
      <RevealSection>
        <PhilosophyBlockSection />
      </RevealSection>
    </>
  )
}
