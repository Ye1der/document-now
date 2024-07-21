import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Repository } from '../components/repository'
import { Search } from '../components/search'
import { ToggleRepDoc } from '../components/toggleRepDoc'
import styles from '../styles/mainCard.module.css'
import { MainForm } from '../components/mainForm'
import { Dispatch, useEffect, useRef, useState } from 'react'
import { getRepos } from '../services/get-repos'
import { toast } from 'sonner'
import { Repository as RepoType } from '../models'
import { ScrollArea } from '@/components/ui/scroll-area'

export function MainCard() {
  const [repos, setRepos] = useState([] as RepoType[])
  const [currentRepo, setCurrentRepo] = useState('')
  const mainArrayRepos = useRef([] as RepoType[])

  useEffect(() => {
    getRepos()
      .then((repositories) => {
        mainArrayRepos.current = repositories
        setRepos(repositories)
      })
      .catch((err) => {
        console.log(err)
        toast.error('Error to get repositories')
      })
  }, [])

  return (
    <section className={styles.mainCard}>
      <ToggleRepDoc />
      <Search
        array={mainArrayRepos.current}
        setArray={setRepos as Dispatch<unknown>}
        atributeCompare="name"
      />

      <section className="w-full mt-3">
        <Sheet>
          <ScrollArea
            className={`
              w-full h-[400px] relative
              after:w-[93%] after:left-1/2 after:-translate-x-1/2 after:absolute after:h-8 after:top-0 after:bg-gradient-to-b after:from-background after:to-background/0
              before:z-30 before:w-[93%] before:left-1/2 before:-translate-x-1/2 before:absolute before:h-8 before:bottom-0 before:bg-gradient-to-t before:from-background before:to-background/0
            `}
          >
            <div className="px-5 py-5 flex flex-col gap-4">
              {repos.map((repo) => (
                <SheetTrigger
                  key={repo.id}
                  className="w-full"
                  onClick={() => {
                    setCurrentRepo(repo.name)
                  }}
                >
                  <Repository name={repo.name} />
                </SheetTrigger>
              ))}
            </div>
          </ScrollArea>

          <SheetContent>
            <SheetHeader>
              <SheetTitle>Generate new documentation</SheetTitle>
              <SheetDescription>
                Fill the follow form to generate a new documentation for
                <span className="font-semibold"> {currentRepo} </span>
                repository
              </SheetDescription>
            </SheetHeader>

            <MainForm />
          </SheetContent>
        </Sheet>
      </section>
    </section>
  )
}
