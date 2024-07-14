import { Documentations } from './sections/documentations'
import { MainCard } from './sections/mainCard'
import { NavBar } from './sections/navbar'

export function HomePage() {
  return (
    <section className="h-screen flex flex-col">
      <NavBar />
      <section className="flex flex-grow overflow-auto">
        <Documentations />
        <MainCard />
      </section>
    </section>
  )
}
