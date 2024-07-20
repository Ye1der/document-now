import { useEffect, useState } from 'react'
import { CardDocumentation } from '../components/cardDocumentation'
import styles from '../styles/documentations.module.css'
import { useToken } from '@/hooks'
import { getUserReposDocs } from '../services'
import { toast } from 'sonner'
import type { DocsReposAdapted } from '../models'
import { userDocsReposAdapter } from '../adpters'
import { LoaderCircle } from 'lucide-react'

// los repos que se muestran son los que ya se documentaron
export function Documentations() {
  const [docs, setDocs] = useState<DocsReposAdapted[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const { accessToken: token } = useToken()

  useEffect(() => {
    if (token && token !== '') {
      getUserReposDocs(token)
        .then((data) => {
          const adaptedData = userDocsReposAdapter(data)
          setDocs(adaptedData)
          setLoading(false)
        })
        .catch((err) => {
          console.log(err)
          toast.error('Ha ocurrido un error al obtener los repositorios')
        })
    }
  }, [token])

  return (
    <section
      className={`${styles.container} ${loading ? styles.loading : null}`}
    >
      {!loading ? (
        docs.map(({ repository: repo }) => {
          return (
            <CardDocumentation
              title={repo.name}
              description={
                repo.description ? repo.description : 'Sin descripción'
              }
              branch={repo.branch}
              key={repo.id}
            />
          )
        })
      ) : (
        <LoaderCircle size={30} className="animate-spin" />
      )}
    </section>
  )
}
