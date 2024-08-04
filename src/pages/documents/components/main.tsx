import { ScrollArea } from '@/components/ui/scroll-area'
import '../styles/markdon.css'

export function Main({ content }: { content: string }) {
  return (
    <ScrollArea className="h-full">
      <div
        className={`markdown`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </ScrollArea>
  )
}
