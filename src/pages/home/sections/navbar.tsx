import { Button } from '@/components/ui/button'
import { Moon, Plus, Star, Sun } from 'lucide-react'
import styles from '../styles/navbar.module.css'
import { toggleTheme } from '@/utils/toggleTheme'
import { useLocation } from 'wouter'

export function NavBar() {
  const [, setLocation] = useLocation()

  return (
    <nav className={styles.nav}>
      <h1> Document Now </h1>
      <div>
        <button onClick={toggleTheme}>
          <Moon className="block w-5 h-5 dark:hidden" />
          <Sun className="hidden w-5 h-5 dark:block" />
        </button>

        <Button variant={'ghost'}>
          Star us on Github <Star className="w-4 h-4 ml-2" />
        </Button>

        <Button onClick={() => setLocation('/login')} variant={'ghost'}>
          Log In
        </Button>

        <Button>
          Generate new <Plus className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </nav>
  )
}
