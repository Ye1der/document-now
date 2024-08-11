import { SheetTrigger } from '@/components/ui/sheet'
import { ListItem } from './listItem'
import { Dispatch, useEffect, useRef, useState } from 'react'
// import { getRepos } from '../services'
import { useGlobalContext } from '@/context/globalContext'
import { toast } from 'sonner'
import { useUser } from '@/hooks'
// import { userReposAdapter } from '../adpters'
import { CardList } from '../sections/cardList'
import { Github } from '@/components/icons'
import { useSearchContext } from '@/context/searchContext'
import { IRepositoryAdapted, reposRepository } from '@/models/repositories'
import { GithubIcon } from 'lucide-react'

export function Repositories() {
  const [intersect, setIntersect] = useState(false)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const [repos, setRepos] = useState<IRepositoryAdapted[]>([])

  const { user } = useUser()

  const {
    updateFunction,
    setAtributeCompare,
    setArray,
    setPlaceholder,
    setValue,
  } = useSearchContext()

  const { setCurrentRepo } = useGlobalContext()

  const originRepos = useRef<IRepositoryAdapted[]>([])

  useEffect(() => {
    setAtributeCompare('name')
    setPlaceholder('Search repositories')
    updateFunction.current = setRepos as Dispatch<unknown>

    return () => {
      setValue('')
    }
  }, [])

  useEffect(() => {
    if (!user) return

    setLoading(true)
    reposRepository
      .getRepos(user.token, currentPage, 30)
      .then(({ repositories: repos, lastPage }) => {
        // const repos = userReposAdapter(repositories)

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
        <div className="flex h-[330px] flex-col w-full items-center justify-center gap-3">
          <GithubIcon size={80} className="opacity-50" />
          <h1 className="font-semibold opacity-50 ">no repositories</h1>
        </div>
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
