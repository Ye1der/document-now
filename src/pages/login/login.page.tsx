import { useSearch, useLocation } from 'wouter'
import { extractQueryFromString } from '@/utils'
import { useToken } from '@/hooks'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { config } from '@/config'
import { LoaderCircle } from 'lucide-react'

export function LoginPage() {
  const { setAccessToken, next } = useToken()

  const [, setLocation] = useLocation()
  const search = useSearch()
  const token = extractQueryFromString('token', search)

  useEffect(() => {
    if (token) {
      setAccessToken(token)
    }
  }, [token])

  // el next se utilizar para saber cuando realmente cambio el token
  // y se usa un useEffect para ver cuando cambia next
  useEffect(() => {
    if (next) {
      toast.success('Has iniciado sesión correctamente')
      setLocation('/home')
    }
  }, [next])

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
