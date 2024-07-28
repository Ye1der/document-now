import { RepositoryAdapted } from '@/pages/home/models'

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
  currentRepo: RepositoryAdapted
  setCurrentRepo: Dispatch<SetStateAction<RepositoryAdapted>>
  repos: RepositoryAdapted[]
  setRepos: Dispatch<SetStateAction<RepositoryAdapted[]>>
  originArrayRepos: MutableRefObject<RepositoryAdapted[]>
  reposPlayground: { name: string }[]
  setReposPlayground: Dispatch<SetStateAction<{ name: string }[]>>
  originReposPlayground: MutableRefObject<{ name: string }[]>
}

const globalContext = createContext({} as ContentContext)

export function GlobalContext({ children }: { children: React.ReactNode }) {
  const [repos, setRepos] = useState<RepositoryAdapted[]>([])
  const originArrayRepos = useRef<RepositoryAdapted[]>([])
  const [currentRepo, setCurrentRepo] = useState({} as RepositoryAdapted)

  const [reposPlayground, setReposPlayground] = useState([
    { name: 'frontend' },
    { name: 'backend' },
  ])
  const originReposPlayground = useRef([
    { name: 'frontend' },
    { name: 'backend' },
  ])

  return (
    <globalContext.Provider
      value={{
        repos,
        setRepos,
        originArrayRepos,
        currentRepo,
        setCurrentRepo,
        reposPlayground,
        setReposPlayground,
        originReposPlayground,
      }}
    >
      {children}
    </globalContext.Provider>
  )
}

export function useGlobalContext() {
  const context = useContext(globalContext)

  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalContext')
  }

  return context
}
