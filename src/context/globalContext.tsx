import { Documentation } from '@/types'
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from 'react'

interface ContentContext {
  currentDoc: Documentation | null
  setCurrentDoc: Dispatch<SetStateAction<Documentation | null>>
}

const globalContext = createContext({} as ContentContext)

export function GlobalContext({ children }: { children: React.ReactNode }) {
  const [currentDoc, setCurrentDoc] = useState<Documentation | null>(null)
  return (
    <globalContext.Provider value={{ currentDoc, setCurrentDoc }}>
      {children}
    </globalContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(globalContext)
}
