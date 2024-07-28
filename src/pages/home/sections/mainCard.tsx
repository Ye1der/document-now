import { Sheet } from '@/components/ui/sheet'
import { Search } from '../components/search'
import { ToggleRepDoc } from '../components/toggleRepDoc'
import styles from '../styles/mainCard.module.css'
import { useEffect } from 'react'
import { Repositories } from '../components/repositories'
import { SheetRepo } from '../components/sheetRepo'
import { Route, useLocation } from 'wouter'
import { Documents } from '../components/documents'
import { useSearchContext } from '@/context/searchContext'
import { DocumentProvider } from '@/context/documentContext'

export function MainCard() {
  const { array, updateFunction, atributeCompare, placeholder } =
    useSearchContext()
  const [location, setLocation] = useLocation()

  useEffect(() => {
    if (location === '/') {
      setLocation('/repositories')
    }
  }, [location])

  return (
    <section className={styles.mainCard}>
      <ToggleRepDoc />

      <Search
        array={array}
        setArray={updateFunction.current}
        atributeCompare={atributeCompare}
        placeholder={placeholder}
      />

      <section className="w-full mt-3">
        <Route path="/repositories">
          <Sheet>
            <Repositories />
            <SheetRepo />
          </Sheet>
        </Route>
        <DocumentProvider>
          <Route path="/documents">
            <Documents />
          </Route>
        </DocumentProvider>
      </section>
    </section>
  )
}
