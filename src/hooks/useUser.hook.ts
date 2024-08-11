import { useEffect, useState } from 'react'
import { addLocal, getLocal, USER_KEY } from '@/utils'
import { IUserAdapted } from '@/models/user'
import { userRepository } from '@/models/user'

export function useUser(init: IUserAdapted = getLocal(USER_KEY)) {
  const [user, setUser] = useState(init)

  // Este login lo que hace es guardar la info del usuario necesaria en el localStorage
  async function login(token: string) {
    const user = await userRepository.getLoged(token)

    setUser(user)
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
