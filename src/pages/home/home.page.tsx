import { Documentations } from './sections/documentations'
import { MainCard } from './sections/mainCard'
import { NavBar } from './sections/navbar'

export function HomePage() {
  return (
    <section className="flex flex-col h-screen">
      <NavBar />
      <section className="flex flex-grow overflow-auto">
        <Documentations />
        <MainCard />
      </section>
    </section>
  )
}
