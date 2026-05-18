import { type CSSProperties } from 'react'

import { RevealSection } from '@/components/RevealSection/RevealSection'
import { FIREFLY_MOTES_FULL_PAGE } from '@/data/fireflyMotes'

import { TeaCollectionHeroSection } from './TeaCollectionHeroSection'
import { TeaGridSection } from './TeaGridSection'
import './tea-collection-page.scss'

export function TeaCollectionPage() {
  return (
    <div className="tea-collection-page">
      <span className="tea-collection-page__motes" aria-hidden="true">
        {FIREFLY_MOTES_FULL_PAGE.map((mote) => (
          <span
            key={mote.id}
            className="tea-collection-page__mote"
            style={
              {
                '--tea-mote-delay': `${mote.delay}s`,
                '--tea-mote-size': `${mote.size}px`,
                left: mote.left,
                top: mote.top,
              } as CSSProperties
            }
          />
        ))}
      </span>
      <RevealSection>
        <TeaCollectionHeroSection />
      </RevealSection>
      <RevealSection>
        <TeaGridSection />
      </RevealSection>
    </div>
  )
}
