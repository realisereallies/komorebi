import { type CSSProperties } from 'react'

import { RevealSection } from '@/components/RevealSection/RevealSection'
import { FIREFLY_MOTES_FULL_PAGE } from '@/data/fireflyMotes'
import { BookingCTASection } from '@/pages/home/sections/BookingCTASection'

import { RitualsFlowSection } from './RitualsFlowSection'
import { RitualsHeroSection } from './RitualsHeroSection'
import { RitualsPhilosophySection } from './RitualsPhilosophySection'
import { RitualsSignatureSection } from './RitualsSignatureSection'
import './rituals-page.scss'

export function RitualsPage() {
  return (
    <div className="rituals-page">
      <span className="rituals-page__haze" aria-hidden="true" />

      <span className="rituals-page__motes" aria-hidden="true">
        {FIREFLY_MOTES_FULL_PAGE.map((mote) => (
          <span
            key={mote.id}
            className="rituals-page__mote"
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
        <RitualsHeroSection />
      </RevealSection>
      <RevealSection>
        <RitualsSignatureSection />
      </RevealSection>
      <RevealSection>
        <RitualsFlowSection />
      </RevealSection>
      <RevealSection>
        <RitualsPhilosophySection />
      </RevealSection>
      <RevealSection>
        <BookingCTASection />
      </RevealSection>
    </div>
  )
}
