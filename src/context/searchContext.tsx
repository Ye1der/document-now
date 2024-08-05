import {
  createContext,
  MutableRefObject,
  useContext,
  useRef,
  useState,
} from 'react'
import { Set } from '@/types'

interface Context {
  array: unknown
  setArray: Set<unknown>
  updateFunction: MutableRefObject<Set<unknown>>
  atributeCompare: string
  placeholder?: string
  setAtributeCompare: Set<string>
  setPlaceholder: Set<string>
  value: string
  setValue: Set<string>
}
const SearchContext = createContext({} as Context)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState('')
  const [array, setArray] = useState<Context['array']>({} as Context['array'])

  const [atributeCompare, setAtributeCompare] = useState<string>('')
  const [placeholder, setPlaceholder] = useState<string>('')

  const updateFunction = useRef({} as Set<unknown>)

  return (
    <SearchContext.Provider
      value={{
        array,
        setArray,
        updateFunction,
        atributeCompare,
        setAtributeCompare,
        placeholder,
        setPlaceholder,
        value,
        setValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export function useSearchContext() {
  const context = useContext(SearchContext)

  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalContext')
  }

  return context
}
