import { cn } from '@/lib/utils'
import { useState } from 'react'

export function ToggleRepDoc() {
  const [option, setOption] = useState<'rep' | 'doc'>('rep')

  const changeOption = () => {
    setOption((prev) => (prev === 'doc' ? 'rep' : 'doc'))
  }

  return (
    <div className="flex gap-10 font-semibold h-fit">
      <button
        className={cn(
          'text-black dark:text-white transition-all duration-200',
          option !== 'rep' && 'text-opacity-40 dark:text-opacity-40',
        )}
        onClick={changeOption}
      >
        Repositories
      </button>
      <button
        className={cn(
          'text-black dark:text-white transition-all duration-200',
          option !== 'doc' && 'text-opacity-40 dark:text-opacity-40',
        )}
        onClick={changeOption}
      >
        Documents
      </button>
    </div>
  )
}
