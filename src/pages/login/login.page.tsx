import { useSearch, useLocation } from 'wouter'
import { extractQueryFromString } from '@/utils'
import { useUser } from '@/hooks'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { config } from '@/config'

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
    <div className="flex flex-col items-center justify-center w-full h-full gap-2">
      <h1 className="text-2xl font-bold text-primary">One click</h1>
      <h2 className="text-muted-foreground">Give us access to your projects</h2>

      <Button onClick={handleClick} size="lg" variant="secondary">
        continiue with github
      </Button>
    </div>
  )
}
