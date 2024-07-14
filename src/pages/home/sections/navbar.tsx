import { Button } from '@/components/ui/button'
import { Plus, Star } from 'lucide-react'
import styles from './styles/navbar.module.css'
import { useGlobalContext } from '@/context/globalContext'
import { MAIN_CARD_STATES } from '@/utils'

export function NavBar() {
  const { setMainCardState } = useGlobalContext()

  const changeMainCardState = () => {
    setMainCardState(MAIN_CARD_STATES.create)
  }

  return (
    <nav className={styles.nav}>
      <h1> Document Now </h1>
      <div>
        <Button variant={'ghost'}>
          Star us on Github <Star className="ml-2 w-4 h-4" />
        </Button>

        <Button variant={'ghost'}>Log In</Button>

        <Button onClick={changeMainCardState}>
          Generate new <Plus className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </nav>
  )
}
