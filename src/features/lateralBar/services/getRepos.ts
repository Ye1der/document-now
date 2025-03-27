import { UnauthorizedError } from '@/errorHandle/errors'
import { IRepo } from './interfaces'

export async function getRepos(token: string, page: number, per_page: number) {
  const result = await fetch(
    `http://localhost:3000/api/v1/github/repos?page=${page}&per_page=${per_page}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  if (!result.ok) {
    if (result.status == 401) {
      throw new UnauthorizedError('You have not authorization')
    }

    throw new Error('Error to get repositories')
  }

  const data = await result.json()
  return {
    lastPage: data.lastPage as boolean,
    repositories: data.repositories as IRepo[],
  }
}
