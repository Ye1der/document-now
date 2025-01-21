import { UnauthorizedError } from '@/errorHandle/errors'
import { IUser } from '@/models/user'

export async function getUser(token: string): Promise<IUser> {
  const response = await fetch(`http://localhost:3000/api/v1/github/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    if (response.status == 401) {
      throw new UnauthorizedError('You have not authorization')
    }
    throw new Error('Error to get user')
  }

  const data = await response.json()
  return data
}
