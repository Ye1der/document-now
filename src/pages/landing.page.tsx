import { CardsPresentation } from '@/features/landing/cardsPresentation/cardsPresentation.module'
import { FooterLanding } from '@/features/landing/footerLanding/footerLanding.module'
import { Presentation } from '@/features/landing/presentation/presentation.module'

export function LandingPage() {
  return (
    <section className="bg-customBlueUltraBlack min-h-screen">
      <Presentation />
      <CardsPresentation />
      <FooterLanding />
    </section>
  )
}
