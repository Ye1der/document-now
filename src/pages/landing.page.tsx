import { CardsPresentation } from '@/features/landing/cardsPresentation/cardsPresentation.module'
import { FooterLanding } from '@/features/landing/footerLanding/footerLanding.module'
import { Presentation } from '@/features/landing/presentation/presentation.module'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

// Registra el plugin
gsap.registerPlugin(ScrollTrigger)

export function LandingPage() {
  const boxRef = useRef(null)

  useGSAP(() => {
    // Refresca ScrollTrigger por si acaso se monta después
    ScrollTrigger.refresh()

    gsap.to(boxRef.current, {
      scale: 1,
      rotate: '0deg',
      filter: 'blur(0px)',
      scrollTrigger: {
        trigger: boxRef.current,
        start: 'top bottom',
        end: '+=200',
        scrub: true,
      },
    })
  })

  return (
    <section className="bg-customBlueUltraBlack min-h-screen h-full overflow-x-hidden">
      <Presentation />
      <CardsPresentation />
      <div ref={boxRef} className="blur-sm scale-50">
        <FooterLanding />
      </div>
    </section>
  )
}
