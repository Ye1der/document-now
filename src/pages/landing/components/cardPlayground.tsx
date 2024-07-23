import { Sheet } from '@/components/ui/sheet'
import { Search } from '../../home/components/search'
import { ToggleRepDoc } from '../../home/components/toggleRepDoc'
import { Dispatch } from 'react'
import { Repositories } from '../../home/components/repositories'
import { SheetRepo } from '../../home/components/sheetRepo'
import { useGlobalContext } from '@/context/globalContext'

export function CardPlayground() {
  const { originReposPlayground, setReposPlayground } = useGlobalContext()

  return (
    <section className="w-[350px] h-[270px] p-5 flex flex-col gap-5 items-center bg-background border border-foreground shadow-[0px_0px_50px_-25px] rounded-[20px] z-30">
      <ToggleRepDoc />

      <div className="w-full px-4 mt-1">
        <Search
          array={originReposPlayground.current}
          setArray={setReposPlayground as Dispatch<unknown>}
          atributeCompare="name"
        />
      </div>

      <section className="w-full">
        <Sheet>
          <Repositories />
          <SheetRepo />
        </Sheet>
      </section>
    </section>
  )
}
