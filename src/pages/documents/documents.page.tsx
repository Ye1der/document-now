import { useEffect } from 'react'
import { useParams } from 'wouter'
import { useUser } from '@/hooks'
import { toast } from 'sonner'
import { useState } from 'react'
import { DocumentsLayout } from './layouts/documents.layout'
import { Main, Sidebar } from './components'
import { marked } from 'marked'
import { documentsRepository } from '@/models/documents'

export function DocumentsPage() {
  const [content, setContent] = useState<string>('')
  const [sidebarStructure, setSidebarStructure] = useState<SidebarContent[]>([])
  const { user } = useUser()
  const params = useParams()

  useEffect(() => {
    if (!params.reponame) return

    if (!user) return

    documentsRepository
      .getDocContentByReponame(user.token, params.reponame)
      .then((content) => {
        const parsedContent = marked.parse(content) as string

        const filteredContent: string[] = parsedContent
          .split('\n')
          .filter((line) => line.startsWith('<h2>') || line.startsWith('<h3>'))

        const data: SidebarContent[] = []

        for (const line of filteredContent) {
          if (line.startsWith('<h2>')) {
            data.push({
              title: line.replace('<h2>', '').replace('</h2>', ''),
            })
          }
        }

        const contentHtml = parsedContent.split('\n').map((line) => {
          if (line.includes('<h2>')) {
            const id = line.replace('<h2>', '').replace('</h2>', '')
            return line.replace('<h2>', `<h2 id="${id}">`)
          }

          return line
        })

        setSidebarStructure(data)
        setContent(contentHtml.join('\n'))
      })
      .catch((err) => {
        console.log(err)
        toast.error('Error to get document')
      })
  }, [params])

  return (
    <DocumentsLayout>
      <Sidebar data={sidebarStructure} repoName={params.reponame ?? ''} />
      <Main content={content} />
    </DocumentsLayout>
  )
}
