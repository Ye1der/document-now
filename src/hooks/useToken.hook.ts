import { useEffect, useState } from 'react'
import { addLocal, getLocal, TOKEN_KEY } from '@/utils'

export function useToken(init: string | null = null) {
  const [accessToken, setAccessToken] = useState(init)
  const [next, setNext] = useState(false)

  // const currentToken = getLocal(TOKEN_KEY)
  const token = getLocal(TOKEN_KEY)

  const tokenIsEmpty = token === '' || token === null || token === 'undefined'
  const accessTokenIsEmpty = accessToken === '' || accessToken === null

  // inicializa el estado con el token guardado en el local storage
  useEffect(() => {
    if (tokenIsEmpty) return

    setAccessToken(token)
  }, [])

  useEffect(() => {
    if (accessTokenIsEmpty) return
    if (token === accessToken) return

    addLocal(TOKEN_KEY, accessToken)
    setNext(true)
  }, [accessToken])

  return {
    setAccessToken,
    accessToken,
    next,
  }
}
