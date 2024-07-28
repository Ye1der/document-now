import { NavBar } from '@/components/navbar'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function IndexLayout({ children }: Props) {
  return (
    <section className="flex flex-col h-screen">
      <NavBar />
      <div className="flex-1 overflow-auto mb-[15px]">{children}</div>
    </section>
  )
}
