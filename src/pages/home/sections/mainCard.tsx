import { useGlobalContext } from '@/context/globalContext'
import { MAIN_CARD_STATES } from '@/utils'
import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import styles from './styles/mainCard.module.css'

export function MainCard() {
  const { mainCardState, setMainCardState } = useGlobalContext()
  const mainCardRef = useRef<HTMLElement>(null)

  function closeMainCard() {
    console.log(MAIN_CARD_STATES.close)
    setMainCardState(MAIN_CARD_STATES.close)
  }

  useEffect(() => {
    const mainCard = mainCardRef.current
    if (mainCardState === MAIN_CARD_STATES.create) {
      console.log('here')

      const animation = mainCard?.animate(
        {
          transform: 'translateX(0px)',
          opacity: 1,
          width: '2500px'
        },
        {
          duration: 300,
          easing: 'ease-in-out',
          fill: 'forwards'
        }
      )
      animation?.play()
    }

    if (mainCardState === MAIN_CARD_STATES.close) {
      console.log('here')

      const animation = mainCard?.animate(
        {
          transform: 'translateX(100px)',
          opacity: 0,
          width: '0px'
        },
        {
          duration: 300,
          easing: 'ease-in-out',
          fill: 'forwards'
        }
      )
      animation?.play()
    }
  }, [mainCardState])

  return (
    <section ref={mainCardRef} className={styles.mainCard}>
      <button onClick={closeMainCard}>
        <X />
      </button>
    </section>
  )
}
