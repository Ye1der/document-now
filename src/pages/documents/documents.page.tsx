import { useEffect } from 'react'
import { useParams } from 'wouter'
import { getDocByReponame } from '@/services'
import { useToken } from '@/hooks'
import { toast } from 'sonner'
import { useState } from 'react'
import { DocumentsLayout } from './layouts/documents.layout'
import { Main, Sidebar } from './components'
import { marked } from 'marked'

export function DocumentsPage() {
  const [content, setContent] = useState<string>('')
  const [sidebarStructure, setSidebarStructure] = useState<SidebarContent[]>([])
  const { accessToken: token } = useToken()
  const params = useParams()

  useEffect(() => {
    if (!params.reponame) return

    getDocByReponame(token, params.reponame)
      .then((content) => {
        const parsedContent = marked.parse(content) as string

        const filteredContent: string[] = parsedContent
          .split('\n')
          .filter((line) => line.startsWith('<h2>') || line.startsWith('<h3>'))

        const data: SidebarContent[] = []

        for (const line of filteredContent) {
          // console.log(strcuture)
          if (line.startsWith('<h2>')) {
            data.push({
              title: line.replace('<h2>', '').replace('</h2>', ''),
              children: [],
            })
          }

          if (line.startsWith('<h3>')) {
            const index = data.length - 1

            data[index].children.push(
              line.replace('<h3>', '').replace('</h3>', '')
            )
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
      <Sidebar data={sidebarStructure} />
      <Main content={content} />
    </DocumentsLayout>
  )
}
