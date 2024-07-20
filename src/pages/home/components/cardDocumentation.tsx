import { Github } from '@/components/icons'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import styles from '../styles/cardDocumentation.module.css'
import { GitMerge } from 'lucide-react'
import { Documentation } from '@/types'
import { useGlobalContext } from '@/context/globalContext'

interface Props {
  title: string
  description: string
  branch?: string
}

export function CardDocumentation({
  title,
  description,
  branch = 'main',
}: Props) {
  const { setCurrentDoc } = useGlobalContext()

  const testDoc: Documentation = {
    name: 'name project',
    documentation: 'documentation project',
    markdown: 'markdown text',
  }

  const eventClick = () => {
    setCurrentDoc(testDoc)
  }

  return (
    <Card
      onClick={eventClick}
      className="w-[300px] h-[150px] hover:border-foreground hover:shadow-[0px_0px_50px_-35px] hover:shadow-foreground transition-all cursor-pointer"
    >
      <CardHeader>
        <div className={styles.headerContainer}>
          <Github className="h-8 mt-1 w-fit" />
          <div>
            <h1>{title} </h1>
            <h2>{description} </h2>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 ml-12">
          <GitMerge size={20} />
          <p className="font-semibold"> {branch} </p>
        </div>
      </CardContent>
    </Card>
  )
}
