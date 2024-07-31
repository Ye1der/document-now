import { RepositoryAdapted } from '@/pages/home/models'
import { Set, Theme } from '@/types.d'

import React, {
  createContext,
  MutableRefObject,
  useContext,
  useRef,
  useState,
} from 'react'

interface ContentContext {
  currentRepo: RepositoryAdapted
  setCurrentRepo: Set<RepositoryAdapted>
  repos: RepositoryAdapted[]
  setRepos: Set<RepositoryAdapted[]>
  originArrayRepos: MutableRefObject<RepositoryAdapted[]>
  reposPlayground: { name: string }[]
  setReposPlayground: Set<{ name: string }[]>
  originReposPlayground: MutableRefObject<{ name: string }[]>
  setTheme: Set<Theme>
  theme: Theme
}

const globalContext = createContext({} as ContentContext)

export function GlobalContext({ children }: { children: React.ReactNode }) {
  const [repos, setRepos] = useState<RepositoryAdapted[]>([])
  const originArrayRepos = useRef<RepositoryAdapted[]>([])
  const [currentRepo, setCurrentRepo] = useState({} as RepositoryAdapted)
  const [theme, setTheme] = useState<Theme>(Theme.dark)

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
        theme,
        setTheme,
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
