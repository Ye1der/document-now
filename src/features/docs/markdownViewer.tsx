import { useAtom } from 'jotai'
import 'highlight.js/styles/atom-one-dark.css'
import './styleMarkdown.css'
import { atomCurrentDoc } from '@/atoms/atoms'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export function MarkdownViewer() {
  const [doc] = useAtom(atomCurrentDoc)
  const [currentDoc, setCurrentDoc] = useState(JSON.parse(JSON.stringify(doc)))
  const ref = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    if (doc?.close) {
      gsap.to(ref.current, {
        opacity: 0,
        x: 300,
        duration: 1,
        onComplete: () => setCurrentDoc(null),
      })
    }

    if (!doc?.content) return

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        x: 300,
      },
      {
        delay: 0.5,
        x: 0,
        opacity: 1,
        duration: 1,
      },
    )
  }, [doc])

  return (
    <section
      ref={ref}
      className="markdown opacity-0 w-full px-5 py-2 overflow-hidden"
    >
      <div dangerouslySetInnerHTML={{ __html: currentDoc?.content ?? '' }} />
    </section>
  )
}
