import { useEffect, useState } from 'react'
import { addLocal, getLocal, USER_KEY } from '@/utils'
import { UserLocal } from '@/models'
import { getUser } from '@/services'

export function useUser(init: UserLocal = getLocal(USER_KEY)) {
  const [user, setUser] = useState(init)

  // Este login lo que hace es guardar la info del usuario necesaria en el localStorage
  async function login(token: string) {
    const response = await getUser(token)

    setUser({ ...response, token })
  }

  useEffect(() => {
    if (!user) return

    addLocal(USER_KEY, user)
  }, [user])

  return {
    user,
    setUser,
    login,
  }
}
