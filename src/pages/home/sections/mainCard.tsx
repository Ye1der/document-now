import { Sheet } from '@/components/ui/sheet'
import { Search } from '../components/search'
import { ToggleRepDoc } from '../components/toggleRepDoc'
import styles from '../styles/mainCard.module.css'
import { useEffect, useState } from 'react'
import { Repositories } from '../components/repositories'
import { SheetRepo } from '../components/sheetRepo'
import { Route, useLocation } from 'wouter'
import { Documents } from '../components/documents'
import { useSearchContext } from '@/context/searchContext'

export function MainCard() {
  const [open, setOpen] = useState(false)

  const {
    array,
    updateFunction,
    atributeCompare,
    placeholder,
    value,
    setValue,
  } = useSearchContext()

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
        value={value}
        setValue={setValue}
      />

      <section className="w-full mt-3">
        <Route path="/repositories">
          <Sheet open={open} onOpenChange={setOpen}>
            <Repositories />
            <SheetRepo setOpen={setOpen} />
          </Sheet>
        </Route>
        <Route path="/documents">
          <Documents />
        </Route>
      </section>
    </section>
  )
}
