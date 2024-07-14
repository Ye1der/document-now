import { useSearch, useLocation } from 'wouter'
import { extractQueryFromString } from '@/utils'
import { useToken } from '@/hooks'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { getAccessToken } from './services/get-access-token'
import { config } from '@/config'

export function LoginPage() {
  const { setAccessToken, next } = useToken()

  const [, setLocation] = useLocation()
  const search = useSearch()
  const code = extractQueryFromString('code', search)

  useEffect(() => {
    if (code) {
      getAccessToken(code).then((response) => {
        if (typeof response === 'undefined') {
          toast('Hubo un error al hacer la petición')
          return
        }

        const { data } = response
        if (data?.error === 'bad_verification_code') {
          console.log('error')
          toast.error('Hubo un problema con el servidor, itente de nuevo.')
          // el código de verificación es incorrecto
          // se debe redirigir a la pagina donde se hace el login, para obtener un nuevo código
          // es home en este caso por ser un ejemplo
          setLocation('/login')
          return
        }
        const access_token = data?.access_token
        setAccessToken(access_token)
      })
    }
  }, [code])

  // el next se utilizar para saber cuando realmente cambio el token
  // y se usa un useEffect para ver  cuando cambia next
  useEffect(() => {
    if (next) {
      toast.success('Has iniciado sesión correctamente')
      setLocation('/home')
    }
  }, [next])

  if (code) {
    // TODO: Cambiar por un loading bonito
    return <span>Loading...</span>
  }

  const { githubAuthUrl, githubClientId } = config

  const redirectUri = 'http://localhost:5173/login'
  const authRoute = `${githubAuthUrl}?client_id=${githubClientId}&redirect_uri=${redirectUri}`

  const handleClick = () => {
    window.location.href = authRoute
  }

  return <Button onClick={handleClick}>continue with github</Button>
}
