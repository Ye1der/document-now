import { MainCardStates } from '@/types'
import { MAIN_CARD_STATES } from '@/utils'
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react'

interface ContentContext {
  mainCardState: MainCardStates
  setMainCardState: Dispatch<SetStateAction<MainCardStates>>
}

const globalContext = createContext({} as ContentContext)

export function GlobalContext({ children }: { children: React.ReactNode }) {
  const [mainCardState, setMainCardState] = useState<MainCardStates>(
    MAIN_CARD_STATES.close
  )

  return (
    <globalContext.Provider value={{ mainCardState, setMainCardState }}>
      {children}
    </globalContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(globalContext)
}
