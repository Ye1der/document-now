import { Documentations } from './sections/documentations'
import { NavBar } from './sections/navbar'

export function HomePage() {
  return (
    <section className="h-screen flex flex-col">
      <NavBar />
      <Documentations />
    </section>
  )
}
