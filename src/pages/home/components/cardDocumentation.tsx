import { Github } from '@/components/icons'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import styles from '../styles/cardDocumentation.module.css'
import { GitMerge } from 'lucide-react'

export function CardDocumentation() {
  return (
    <Card className="w-[300px] h-[150px] hover:border-foreground hover:shadow-[0px_0px_50px_-35px] hover:shadow-foreground transition-all cursor-pointer">
      <CardHeader>
        <div className={styles.headerContainer}>
          <Github className="mt-1 h-8 w-fit" />
          <div>
            <h1> Repository name </h1>
            <h2> Description of the repository </h2>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="ml-12 flex gap-2">
          <GitMerge size={20} />
          <p className="font-semibold"> Master </p>
        </div>
      </CardContent>
    </Card>
  )
}