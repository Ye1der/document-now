import React, { createContext, useContext } from 'react'

interface ContentContext {}

const globalContext = createContext({} as ContentContext)

export function GlobalContext({ children }: { children: React.ReactNode }) {
  return <globalContext.Provider value={{}}>{children}</globalContext.Provider>
}

export function useGlobalContext() {
  return useContext(globalContext)
}
