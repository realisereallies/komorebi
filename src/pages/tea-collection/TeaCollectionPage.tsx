import { RevealSection } from '@/components/RevealSection/RevealSection'

import { TeaCollectionHeroSection } from './TeaCollectionHeroSection'
import { TeaGridSection } from './TeaGridSection'

export function TeaCollectionPage() {
  return (
    <>
      <RevealSection>
        <TeaCollectionHeroSection />
      </RevealSection>
      <RevealSection>
        <TeaGridSection />
      </RevealSection>
    </>
  )
}
