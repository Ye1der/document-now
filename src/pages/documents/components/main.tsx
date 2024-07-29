import { ScrollArea } from '@/components/ui/scroll-area'
import styles from '../styles/markdon.module.css'

export function Main({ content }: { content: string }) {
  return (
    <ScrollArea className="h-full">
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </ScrollArea>
  )
}
