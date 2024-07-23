import { Presentation } from './sections/presentation'
import { Playground } from './sections/playground'

export function LandingPage() {
  return (
    <section className="pb-20">
      <Presentation />
      <Playground />
    </section>
  )
}
