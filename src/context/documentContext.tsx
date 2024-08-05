import { useTempDocs } from '@/hooks'
import { DocumentsAdapted } from '@/models'
import { Set, TempDoc } from '@/types'
import { createContext, ReactNode, useContext, useState } from 'react'

interface Context {
  currentDocument: DocumentsAdapted
  setCurrentDocument: Set<DocumentsAdapted>
  documents: DocumentsAdapted[]
  setDocuments: Set<DocumentsAdapted[]>
  tempDocs: TempDoc[]
  setTempDocs: Set<TempDoc[]>
}

const DocumentContext = createContext<Context>({} as Context)

export function DocumentProvider({ children }: { children: ReactNode }) {
  const [currentDocument, setCurrentDocument] = useState({} as DocumentsAdapted)
  const [documents, setDocuments] = useState<DocumentsAdapted[]>([])
  const { tempDocs, setTempDocs } = useTempDocs()

  return (
    <DocumentContext.Provider
      value={{
        currentDocument,
        setCurrentDocument,
        documents,
        setDocuments,
        tempDocs,
        setTempDocs,
      }}
    >
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
