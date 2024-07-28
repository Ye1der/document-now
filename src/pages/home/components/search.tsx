import { SearchIcon } from 'lucide-react'
import React, { SetStateAction, useEffect, useState } from 'react'

interface Props {
  array: unknown
  setArray: React.Dispatch<SetStateAction<unknown>>
  atributeCompare: string
  placeholder?: string
}

export function Search({
  setArray,
  array,
  atributeCompare,
  placeholder = 'Search...',
}: Props) {
  const [value, setValue] = useState('')

  // TODO: Ver si hay una mejor forma de hacer esto, si invulucrar el useEffect
  useEffect(() => {
    if (value !== '') {
      search(value)
    }
  }, [array])

  const search = (text: string) => {
    if (!(array instanceof Array)) return

    const newArray = array.filter((element) =>
      element[atributeCompare].toLowerCase().includes(text.toLowerCase())
    )
    setArray(newArray)
  }

  return (
    <div className="flex items-center justify-between w-full px-10 mt-8">
      <input
        onChange={(event) => {
          setValue(event.target.value)
          search(event.target.value)
        }}
        required
        placeholder={placeholder}
        className="bg-transparent outline-none peer text-foreground placeholder:opacity-70 focus:placeholder:opacity-100 placeholder:transition-opacity"
      />
      <SearchIcon
        size={20}
        className="mr-2 transition-opacity opacity-70 peer-focus:opacity-100 peer-valid:opacity-100"
      />
    </div>
  )
}
