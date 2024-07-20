import { config } from '@/config'
import type { Repository } from '../models'

export async function getUserRepos(token: string): Promise<Repository[]> {
  const { api } = config

  const response = await fetch(`${api}/github/repos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await response.json()

  return data
}
