import { ScrollArea } from '@/components/ui/scroll-area'
import { SheetTrigger } from '@/components/ui/sheet'
import { Repo } from './repo'
import { useEffect } from 'react'
import { getRepos } from '../services/get-repos'
import { useGlobalContext } from '@/context/globalContext'
import { toast } from 'sonner'
import { useRoute } from 'wouter'
import { cn } from '@/lib/utils'
import { Repository } from '../models'

export function Repositories() {
  const { originArrayRepos, setRepos, repos, setCurrentRepo, reposPlayground } =
    useGlobalContext()

  const [match] = useRoute('/home*')

  useEffect(() => {
    if (match) {
      getRepos()
        .then((repositories) => {
          originArrayRepos.current = repositories
          setRepos(repositories)
        })
        .catch((err) => {
          console.log(err)
          toast.error('Error to get repositories')
        })
    }
  }, [])

  return (
    <ScrollArea
      className={cn(
        !match
          ? 'w-full h-fit'
          : `
        w-full h-[400px] relative
        after:w-[93%] after:left-1/2 after:-translate-x-1/2 after:absolute after:h-8 after:top-0 after:bg-gradient-to-b after:from-background after:to-background/0
        before:z-30 before:w-[93%] before:left-1/2 before:-translate-x-1/2 before:absolute before:h-8 before:bottom-0 before:bg-gradient-to-t before:from-background before:to-background/0
      `,
      )}
    >
      {match ? (
        <div className="px-5 py-5 flex flex-col gap-4">
          {repos.map((repo) => (
            <SheetTrigger
              key={repo.id}
              className="w-full"
              onClick={() => {
                setCurrentRepo(repo)
              }}
            >
              <Repo name={repo.name} />
            </SheetTrigger>
          ))}
        </div>
      ) : (
        <div className=" mt-2 flex flex-col gap-4">
          {reposPlayground.map((repo) => (
            <SheetTrigger
              key={repo.name}
              className="w-full"
              onClick={() => {
                setCurrentRepo(repo as Repository)
              }}
            >
              <Repo name={repo.name} />
            </SheetTrigger>
          ))}
        </div>
      )}
    </ScrollArea>
  )
}
