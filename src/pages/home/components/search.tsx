import { SearchIcon } from 'lucide-react'
import React, { SetStateAction } from 'react'

interface Props {
  array: unknown
  setArray: React.Dispatch<SetStateAction<unknown>>
  atributeCompare: string
}

export function Search({ setArray, array, atributeCompare }: Props) {
  const search = (text: string) => {
    if (!(array instanceof Array)) return

    const newArray = array.filter((element) =>
      element[atributeCompare].toLowerCase().includes(text.toLowerCase()),
    )
    setArray(newArray)
  }

  return (
    <div className="w-full flex justify-between items-center">
      <input
        onChange={(event) => {
          search(event.target.value)
        }}
        required
        placeholder="Search Repositorie"
        className="peer text-foreground bg-transparent outline-none placeholder:opacity-70 focus:placeholder:opacity-100 placeholder:transition-opacity"
      />
      <SearchIcon
        size={20}
        className="opacity-70 peer-focus:opacity-100 peer-valid:opacity-100 transition-opacity mr-2"
      />
    </div>
  )
}
