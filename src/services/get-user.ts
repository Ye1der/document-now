import { config } from '@/config'
import { IUser } from '@/models/user'

export async function getUser(token: string): Promise<IUser> {
  const response = await fetch(`${config.api}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Error to get user')
  }

  const data = await response.json()
  return data
}
