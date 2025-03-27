import { Documentation } from '@/features/docs/documentation.feature'
import { LateralBar } from '@/features/lateralBar/ui/laeteralBar.module'

export function HomePage() {
  return (
    <section className="bg-customBlueUltraBlack h-screen flex">
      <LateralBar />
      <Documentation />
    </section>
  )
}
