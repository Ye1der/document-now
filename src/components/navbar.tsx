import { Button } from '@/components/ui/button'
import { Moon, Star, Sun } from 'lucide-react'
import { toggleTheme } from '@/utils/toggleTheme'
import { DocIcon, Github } from '@/components/icons'
import { useLocation } from 'wouter'
import { Link } from 'wouter'
import { useTheme } from '@/hooks'
import { getLocal, USER_KEY } from '@/utils'

export function NavBar() {
  const [, setLocation] = useLocation()
  const { theme, setTheme } = useTheme()

  return (
    <nav className="flex justify-between w-full p-4">
      <div className="flex items-center gap-8">
        <Link to={'/'}>
          <div className="flex items-center gap-2">
            <DocIcon className={'docIcon'} />
            <h2 className="text-lg font-bold md:text-2xl"> Document Now </h2>
          </div>
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

        <Button
          variant={'ghost'}
          onClick={() => {
            window.open('https://github.com/Ye1der/document-now', '_blank')
          }}
        >
          Star us on Github <Star className="w-4 h-4 ml-2" />
        </Button>

        {!getLocal(USER_KEY)?.token ? (
          <>
            {/* mobile */}
            <Button
              className="inline-flex md:hidden"
              onClick={() => setLocation('~/login')}
              size="icon"
            >
              <Github className="w-5 h-5 fill-background" />
            </Button>

            {/* desktop */}
            <Button
              className="hidden md:inline-flex"
              onClick={() => setLocation('~/login')}
            >
              Log In <Github className="w-5 h-5 ml-3 fill-background" />
            </Button>
          </>
        ) : (
          <Button onClick={() => setLocation('~/home')}>Home</Button>
        )}
      </div>
    </nav>
  )
}
