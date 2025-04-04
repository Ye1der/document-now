import 'highlight.js/styles/atom-one-dark.css'
import './styleMarkdown.css'
import { Navbar } from './navbar'
import { MarkdownViewer } from './markdownViewer'

export function Documentation() {
  return (
    <>
      <Navbar />
      <section className="markdown overflow-auto overflow-x-hidden max-h-svh w-full">
        <MarkdownViewer />
      </section>
    </>
  )
}
