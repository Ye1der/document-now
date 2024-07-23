import { Button } from '@/components/ui/button'
import { Moon, Star, Sun } from 'lucide-react'
import { toggleTheme } from '@/utils/toggleTheme'
import { DocIcon, Github } from '@/components/icons'
import '../styles/navbar.css'

export function NavBar() {
  return (
    <nav className={'nav'}>
      <div className="flex items-center">
        <DocIcon className={'docIcon'} />
        <h1> Document Now </h1>
      </div>
      <div className="flex items-center">
        <button
          onClick={toggleTheme}
          className="hover:scale-110 transition-transform mr-2"
        >
          <Moon className="w-5 h-5 hidden dark:block" />
          <Sun className="w-5 h-5 block dark:hidden" />
        </button>

        <Button variant={'ghost'}>
          Star us on Github <Star className="w-4 h-4 ml-2" />
        </Button>

        <Button>
          Log In <Github className="h-5 w-5 fill-background ml-3" />
        </Button>
      </div>
    </nav>
  )
}
