import { DocumentsAdapted } from '@/pages/home/models'
import { Set } from '@/types'
import { createContext, ReactNode, useContext, useState } from 'react'

interface Context {
  currentDocument: DocumentsAdapted
  setCurrentDocument: Set<DocumentsAdapted>
}

const DocumentContext = createContext<Context>({} as Context)

export function DocumentProvider({ children }: { children: ReactNode }) {
  const [currentDocument, setCurrentDocument] = useState({} as DocumentsAdapted)

  return (
    <DocumentContext.Provider value={{ currentDocument, setCurrentDocument }}>
      {children}
    </DocumentContext.Provider>
  )
}

export function useDocumentContext() {
  const context = useContext(DocumentContext)

  if (!context) {
    throw new Error('useDocumentContext must be used within a DocumentProvider')
  }

  return context
}
