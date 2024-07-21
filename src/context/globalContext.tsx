import { Repository } from '@/pages/home/models'

import React, {
  createContext,
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from 'react'

interface ContentContext {
  currentRepo: Repository
  setCurrentRepo: Dispatch<SetStateAction<Repository>>
  repos: Repository[]
  setRepos: Dispatch<SetStateAction<Repository[]>>
  originArrayRepos: MutableRefObject<Repository[]>
}

const globalContext = createContext({} as ContentContext)

export function GlobalContext({ children }: { children: React.ReactNode }) {
  const [repos, setRepos] = useState([] as Repository[])
  const originArrayRepos = useRef([] as Repository[])
  const [currentRepo, setCurrentRepo] = useState({} as Repository)

  return (
    <globalContext.Provider
      value={{ repos, setRepos, originArrayRepos, currentRepo, setCurrentRepo }}
    >
      {children}
    </globalContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(globalContext)
}
