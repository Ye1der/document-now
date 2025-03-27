import 'highlight.js/styles/atom-one-dark.css'
import './styleMarkdown.css'
import { Navbar } from './navbar'
import { MarkdownViewer } from './markdownViewer'
import { useLoading } from '@/hooks/loading.hook'

export function Documentation() {
  const { loading, LoadingComponent } = useLoading('loadingDoc')

  if (loading) return <LoadingComponent size={50} />

  return (
    <>
      <Navbar />
      <section className="markdown overflow-auto overflow-x-hidden max-h-svh w-full">
        <MarkdownViewer />
      </section>
    </>
  )
}
