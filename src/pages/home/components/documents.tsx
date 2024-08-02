import { CardList } from '../sections/cardList'
import { ListItem } from './listItem'
import { getDocs } from '@/services'
import { Dispatch, useEffect, useRef, useState } from 'react'
import { useToken } from '@/hooks'
import { DocumentsAdapted } from '@/models'
import { documentsAdapter } from '@/adapters'
import { FileText } from 'lucide-react'
import { useSearchContext } from '@/context/searchContext'
import { useDocumentContext } from '@/context/documentContext'
import { useLocation } from 'wouter'

export function Documents() {
  const [documents, setDocuments] = useState<DocumentsAdapted[]>([])
  const [loading, setLoading] = useState(true)
  const { accessToken: token } = useToken()
  const [, setLocation] = useLocation()

  const originDocs = useRef<DocumentsAdapted[]>([])
  const { setArray, setPlaceholder, setAtributeCompare, updateFunction } =
    useSearchContext()

  const { setCurrentDocument } = useDocumentContext()

  useEffect(() => {
    setAtributeCompare('title')
    setPlaceholder('Search documents')
    updateFunction.current = setDocuments as Dispatch<unknown>
  }, [])

  useEffect(() => {
    if (token) {
      getDocs(token)
        .then((docs) => {
          const adaptedDocs = documentsAdapter(docs)
          originDocs.current = adaptedDocs

          setDocuments(adaptedDocs)
          setArray(originDocs.current)

          setLoading(false)
        })
        .catch((err) => {
          console.log(err)
          setLoading(false)
        })
    }
  }, [])

  return (
    <CardList loading={loading}>
      {documents.length === 0 && !loading ? (
        <div className="flex h-[330px] flex-col w-full items-center justify-center gap-4">
          <FileText size={80} className="opacity-50 -rotate-12" />
          <h1 className=" font-semibold opacity-50">no documents</h1>
        </div>
      ) : (
        documents.map((doc) => (
          <ListItem
            key={doc.id}
            name={doc.title}
            icon={<FileText size={20} />}
            onClick={() => {
              setCurrentDocument(doc)
              setLocation(`~/documents/${doc.repoName}`, {
                replace: true,
              })
            }}
          />
        ))
      )}
    </CardList>
  )
}
