import { Sheet } from '@/components/ui/sheet'
import { Search } from '../components/search'
import { ToggleRepDoc } from '../components/toggleRepDoc'
import styles from '../styles/mainCard.module.css'
import { Dispatch } from 'react'
import { Repositories } from '../components/repositories'
import { SheetRepo } from '../components/sheetRepo'
import { useGlobalContext } from '@/context/globalContext'

export function MainCard() {
  const { originArrayRepos, setRepos } = useGlobalContext()

  return (
    <section className={styles.mainCard}>
      <ToggleRepDoc />

      <Search
        array={originArrayRepos.current}
        setArray={setRepos as Dispatch<unknown>}
        atributeCompare="name"
      />

      <section className="w-full mt-3">
        <Sheet>
          <Repositories />
          <SheetRepo />
        </Sheet>
      </section>
    </section>
  )
}
