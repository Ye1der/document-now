import { Button } from '@/components/ui/button'
import { Moon, Star, Sun } from 'lucide-react'
import { toggleTheme } from '@/utils/toggleTheme'
import { DocIcon, Github } from '@/components/icons'
import '../styles/navbar.css'
import { useLocation } from 'wouter'
import { Link } from 'wouter'
import { useTheme } from '@/hooks'

export function NavBar() {
  const [, setLocation] = useLocation()
  const { theme, setTheme } = useTheme()

  return (
    <nav className={'nav'}>
      <div className="flex items-center flex-1 gap-8">
        <Link to={'/'}>
          <div className="flex items-center gap-2">
            <DocIcon className={'docIcon'} />
            <h1> Document Now </h1>
          </div>
        </Link>

        <Link to="/home/repositories">
          <span
            className={`
              text-base
              font-meidum
              text-black
              text-opacity-70
              hover:text-opacity-100
              transition-colors
              duration-200

              dark:text-white
              dark:text-opacity-60
              dark:hover:text-opacity-100
            `}
          >
            Repositories
          </span>
        </Link>
      </div>
      <div className="flex gap-[10px] items-center">
        <button
          onClick={(e) => toggleTheme(e, theme, setTheme)}
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
