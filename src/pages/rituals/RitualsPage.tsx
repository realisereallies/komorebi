import { RevealSection } from '@/components/RevealSection/RevealSection'

import { RitualListSection } from './RitualListSection'
import { RitualsHeroSection } from './RitualsHeroSection'

export function RitualsPage() {
  return (
    <>
      <RevealSection>
        <RitualsHeroSection />
      </RevealSection>
      <RevealSection>
        <RitualListSection />
      </RevealSection>
    </>
  )
}
