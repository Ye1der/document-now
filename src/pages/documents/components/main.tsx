import { ScrollArea } from '@/components/ui/scroll-area'
import styles from '../styles/markdon.module.css'
import { marked } from 'marked'

export function Main({ content }: { content: string }) {
  return (
    <ScrollArea className="h-full">
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: marked.parse(content) }} // Inserta HTML de forma segura
      />
    </ScrollArea>
  )
}
