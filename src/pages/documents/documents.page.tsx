import { useEffect } from 'react'
import { useParams } from 'wouter'
import { getDocByReponame } from '@/services'
import { useToken } from '@/hooks'
import { toast } from 'sonner'
import { useState } from 'react'
import { DocumentsLayout } from './layouts/documents.layout'
import { Main, Sidebar } from './components'

export function DocumentsPage() {
  const [content, setContent] = useState<string>('')
  const { accessToken: token } = useToken()
  const params = useParams()

  useEffect(() => {
    if (!params.reponame) return

    getDocByReponame(token, params.reponame)
      .then((content) => {
        setContent(content)
      })
      .catch((err) => {
        console.log(err)
        toast.error('Error to get document')
      })
  }, [params])

  return (
    <DocumentsLayout>
      <Sidebar />
      <Main content={content} />
    </DocumentsLayout>
  )
}
