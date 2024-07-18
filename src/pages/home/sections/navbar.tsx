import { Button } from '@/components/ui/button'
import { Moon, Plus, Star, Sun } from 'lucide-react'
import styles from '../styles/navbar.module.css'
import { toggleTheme } from '@/utils/toggleTheme'
import { useGlobalContext } from '@/context/globalContext'
import { useLocation } from 'wouter'

export function NavBar() {
  const [, setLocation] = useLocation()
  const { setCurrentDoc } = useGlobalContext()

  return (
    <nav className={styles.nav}>
      <h1> Document Now </h1>
      <div className="flex items-center">
        <button
          onClick={toggleTheme}
          className="hover:scale-110 transition-transform"
        >
          <Moon className="w-5 h-5 hidden dark:block" />
          <Sun className="w-5 h-5 block dark:hidden" />
        </button>

        <Button variant={'ghost'}>
          Star us on Github <Star className="w-4 h-4 ml-2" />
        </Button>

        <Button onClick={() => setLocation('/login')} variant={'ghost'}>
          Log In
        </Button>

        <Button
          onClick={() => {
            setCurrentDoc(null)
          }}
        >
          Generate new <Plus className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </nav>
  )
}
