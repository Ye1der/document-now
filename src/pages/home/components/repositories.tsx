import { SheetTrigger } from '@/components/ui/sheet'
import { ListItem } from './listItem'
import { Dispatch, useEffect, useRef, useState } from 'react'
import { getRepos } from '../services'
import { useGlobalContext } from '@/context/globalContext'
import { toast } from 'sonner'
import { useToken } from '@/hooks'
import { userReposAdapter } from '../adpters'
import { CardList } from '../sections/cardList'
import { Github } from '@/components/icons'
import { useSearchContext } from '@/context/searchContext'
import { RepositoryAdapted } from '../models'

export function Repositories() {
  const [intersect, setIntersect] = useState(false)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const [repos, setRepos] = useState<RepositoryAdapted[]>([])

  const { accessToken: token } = useToken()

  const { updateFunction, setAtributeCompare, setArray, setPlaceholder } =
    useSearchContext()

  const { setCurrentRepo } = useGlobalContext()

  const originRepos = useRef<RepositoryAdapted[]>([])

  useEffect(() => {
    setAtributeCompare('name')
    setPlaceholder('Search repositories')
    updateFunction.current = setRepos as Dispatch<unknown>
  }, [])

  useEffect(() => {
    if (!token) return

    setLoading(true)
    getRepos(token, currentPage, 30)
      .then(({ repositories, lastPage }) => {
        const repos = userReposAdapter(repositories)

        originRepos.current = [...originRepos.current, ...repos]

        setArray(originRepos.current)

        if (!intersect) {
          setIntersect(true)
        }

        setRepos((prev) => [...prev, ...repos])
        setLoading(false)

        if (currentPage === lastPage) {
          setIntersect(false)
        }
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        toast.error('Error to get repositories')
      })
  }, [currentPage])

  const onIntersect = () => {
    setCurrentPage((prev) => prev + 1)
  }

  return (
    <CardList intersect={intersect} onIntersect={onIntersect} loading={loading}>
      {repos.length === 0 && !loading ? (
        <span>Don't have any repositories</span>
      ) : (
        repos.map((repo) => (
          <SheetTrigger
            key={repo.id}
            className="w-full"
            onClick={() => {
              setCurrentRepo(repo)
            }}
          >
            <ListItem
              icon={
                <Github className="w-5 h-5 transition-opacity opacity-80 group-hover:opacity-100" />
              }
              name={repo.name}
            />
          </SheetTrigger>
        ))
      )}
    </CardList>
  )
}
