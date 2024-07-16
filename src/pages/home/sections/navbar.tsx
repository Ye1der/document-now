import { Button } from '@/components/ui/button'
import { Moon, Plus, Star, Sun } from 'lucide-react'
import styles from '../styles/navbar.module.css'
import { addLocal, getLocal } from '@/utils'
import { toggleTheme } from '@/utils/toggleTheme'

export function NavBar() {
  return (
    <nav className={styles.nav}>
      <h1> Document Now </h1>
      <div>
        <button onClick={toggleTheme}>
          <Moon className="w-5 h-5 hidden dark:block" />
          <Sun className="w-5 h-5 block dark:hidden" />
        </button>

        <Button variant={'ghost'}>
          Star us on Github <Star className="ml-2 w-4 h-4" />
        </Button>

        <Button variant={'ghost'}>Log In</Button>

        <Button>
          Generate new <Plus className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </nav>
  )
}
