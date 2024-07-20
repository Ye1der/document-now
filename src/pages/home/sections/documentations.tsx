import { useEffect, useState } from 'react'
import { CardDocumentation } from '../components/cardDocumentation'
import styles from '../styles/documentations.module.css'
import { useToken } from '@/hooks'
import { getUserRepos } from '../services'
import { toast } from 'sonner'
import type { RepositoryAdapted } from '../models'
import { userReposAdapter } from '../adpters'
import { LoaderCircle } from 'lucide-react'

export function Documentations() {
  const [repos, setRepos] = useState<RepositoryAdapted[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const { accessToken: token } = useToken()

  useEffect(() => {
    if (token && token !== '') {
      getUserRepos(token)
        .then((data) => {
          const adaptedData = userReposAdapter(data)
          setRepos(adaptedData)
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
        repos.map((repo) => {
          return <CardDocumentation {...repo} key={repo.id} />
        })
      ) : (
        <LoaderCircle size={30} className="animate-spin" />
      )}
    </section>
  )
}
