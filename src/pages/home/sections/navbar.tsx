import { Button } from '@/components/ui/button'
import { Moon, Star, Sun } from 'lucide-react'
import styles from '../styles/navbar.module.css'
import { toggleTheme } from '@/utils/toggleTheme'

export function NavBar() {
  return (
    <nav className={styles.nav}>
      <h1> Document Now </h1>
      <div className="flex items-center">
        <button
          onClick={toggleTheme}
          className="hover:scale-110 transition-transform mr-3"
        >
          <Moon className="w-5 h-5 hidden dark:block" />
          <Sun className="w-5 h-5 block dark:hidden" />
        </button>

        <Button variant={'ghost'}>
          Star us on Github <Star className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </nav>
  )
}
