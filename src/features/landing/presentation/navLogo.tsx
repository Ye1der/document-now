import { Star } from 'lucide-react'
import { Logo } from '@/components/icons'
import { Link } from 'wouter'
import { Button } from '@/components/button'

export function NavLogo() {
  return (
    <nav className="flex justify-between w-full p-4">
      <div className="flex items-center gap-8">
        <Link to={'/'}>
          <div className="flex items-center gap-2">
            <Logo size={60} className='-rotate-[20deg]'/>
            <h2 className="text-lg font-bungee md:text-2xl"> Doc! Now </h2>
          </div>
        </Link>
      </div>
      <div className="flex gap-[10px] items-center">
        <Button
          variant={'ghost'}
          onClick={() => {
            window.open('https://github.com/Ye1der/document-now', '_blank')
          }}
        >
          <span> Star us on Github </span> <Star className="w-4 h-4" />
        </Button>
      </div>
    </nav>
  )
}
