import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { Search } from '../../home/components/search'
import { Dispatch } from 'react'
import { SheetRepo } from '../../home/components/sheetRepo'
import { useGlobalContext } from '@/context/globalContext'
import { CardList } from '@/pages/home/sections/cardList'
import { ListItem } from '@/pages/home/components/listItem'
import { Github } from '@/components/icons'

export function CardPlayground() {
  const { originReposPlayground, setReposPlayground, reposPlayground } =
    useGlobalContext()

  return (
    <section className="w-[350px] h-[270px] p-5 flex flex-col gap-5 items-center bg-background border border-foreground shadow-[0px_0px_50px_-25px] rounded-[20px] z-30">
      <div className="w-full px-4 mt-1">
        <Search
          array={originReposPlayground.current}
          setArray={setReposPlayground as Dispatch<unknown>}
          atributeCompare="name"
        />
      </div>

      <section className="w-full">
        <Sheet>
          <CardList intersect={false} loading={false}>
            {reposPlayground.map((repo, index) => (
              <SheetTrigger key={index} className="w-full" onClick={() => {}}>
                <ListItem
                  icon={
                    <Github className="w-5 h-5 transition-opacity opacity-80 group-hover:opacity-100" />
                  }
                  name={repo.name}
                />
              </SheetTrigger>
            ))}
          </CardList>
          <SheetRepo />
        </Sheet>
      </section>
    </section>
  )
}
