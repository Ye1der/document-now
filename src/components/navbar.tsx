import { Button } from '@/components/ui/button'
import { Moon, Star, Sun } from 'lucide-react'
import { toggleTheme } from '@/utils/toggleTheme'
import { DocIcon, Github } from '@/components/icons'
import '../styles/navbar.css'
import { useLocation } from 'wouter'

export function NavBar() {
  const [, setLocation] = useLocation()
  return (
    <nav className={'nav'}>
      <div className="flex items-center">
        <DocIcon className={'docIcon'} />
        <h1> Document Now </h1>
      </div>
      <div className="flex items-center">
        <button
          onClick={toggleTheme}
          className="mr-2 transition-transform hover:scale-110"
        >
          <Moon className="hidden w-5 h-5 dark:block" />
          <Sun className="block w-5 h-5 dark:hidden" />
        </button>

        <Button variant={'ghost'}>
          Star us on Github <Star className="w-4 h-4 ml-2" />
        </Button>

        <Button onClick={() => setLocation('~/login')}>
          Log In <Github className="w-5 h-5 ml-3 fill-background" />
        </Button>
      </div>
    </nav>
  )
}
