import { cn } from '@/lib/utils'
import { MouseEvent, useEffect, useState } from 'react'
import { useLocation } from 'wouter'

enum Option {
  rep = 1,
  doc = 2,
}

export function ToggleRepDoc() {
  const [location, setLocation] = useLocation()
  const [option, setOption] = useState<Option>(Option.rep)

  useEffect(() => {
    if (location === '/repositories') {
      setOption(Option.rep)
      return
    }

    if (location === '/documents') {
      setOption(Option.doc)
      return
    }
  }, [location])

  const changeOption = (e: MouseEvent<HTMLButtonElement>) => {
    const option = e.currentTarget.dataset.option
    if (Number(option)) {
      setLocation(
        `/${Number(option) === Option.rep ? 'repositories' : 'documents'}`
      )
      setOption(Number(option))
    }
  }

  return (
    <div className="flex gap-10 font-semibold h-fit">
      <button
        data-option={Option.rep}
        className={cn(
          'text-black dark:text-white transition-all duration-200',
          option !== Option.rep && 'text-opacity-40 dark:text-opacity-40'
        )}
        onClick={changeOption}
      >
        Repositories
      </button>
      <button
        data-option={Option.doc}
        className={cn(
          'text-black dark:text-white transition-all duration-200',
          option !== Option.doc && 'text-opacity-40 dark:text-opacity-40'
        )}
        onClick={changeOption}
      >
        Documents
      </button>
    </div>
  )
}
