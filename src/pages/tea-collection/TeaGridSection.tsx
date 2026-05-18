import { motion, useReducedMotion } from 'framer-motion'

import { revealNestedContainerVariants } from '@/components/RevealSection/revealMotion'
import { RevealItem } from '@/components/RevealSection/RevealSection'
import { TeaCard } from '@/components/tea/TeaCard'

const teas = [
  {
    id: 'matcha',
    name: 'Matcha',
    origin: 'Uji',
    description: 'Stone-milled shade. Velvet umami, moss-quiet finish.',
  },
  {
    id: 'sencha',
    name: 'Sencha',
    origin: 'Shizuoka',
    description: 'Steamed spring leaf, saline brightness, soft astringency.',
  },
  {
    id: 'hojicha',
    name: 'Hojicha',
    origin: 'Kyoto',
    description: 'Roasted warmth and caramel smoke. Evening-weight.',
  },
  {
    id: 'jasmine',
    name: 'Jasmine Tea',
    origin: 'Fujian',
    description: 'Night-bloomed perfume folded into tender green leaf.',
  },
] as const

export function TeaGridSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="tea-archive-section tea-archive-grid" aria-label="Tea archive">
      <motion.div
        className="tea-archive__list"
        role="list"
        variants={revealNestedContainerVariants(!!reduceMotion)}
        initial={reduceMotion ? 'visible' : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: '0px 0px -10% 0px' }}
      >
        {teas.map((tea) => (
          <RevealItem
            key={tea.id}
            as="div"
            role="listitem"
            className={`tea-archive__item tea-archive__item--${tea.id}`}
          >
            <TeaCard
              teaId={tea.id}
              name={tea.name}
              origin={tea.origin}
              description={tea.description}
            />
          </RevealItem>
        ))}
      </motion.div>
    </section>
  )
}
