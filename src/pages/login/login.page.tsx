import { useSearch, useLocation } from 'wouter'
import { extractQueryFromString } from '@/utils'
import { useUser } from '@/hooks'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { config } from '@/config'
import { LoaderCircle } from 'lucide-react'

export function LoginPage() {
  const { user, login } = useUser()

  const [, setLocation] = useLocation()
  const search = useSearch()
  const token = extractQueryFromString('token', search)

  useEffect(() => {
    if (user) {
      setLocation('/home')
      toast.info('You are already logged in')
    }
  }, [])

  useEffect(() => {
    if (token) {
      if (token === user?.token) {
        setLocation('/home')
        toast.success('Has iniciado sesión correctamente')
        return
      }

      // Hace la petición para obtener la info del usuario y lo guarda en el localStorage con todo y token
      login(token)
    }
  }, [token, user])

  const { api } = config

  const authRoute = `${api}/auth/login?redirect=http://localhost:5173/login`

  const handleClick = () => {
    window.location.href = authRoute
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      {token ? (
        <span>
          <LoaderCircle size={30} className="animate-spin" />
        </span>
      ) : (
        <Button onClick={handleClick}>continue with github</Button>
      )}
    </div>
  )
}
