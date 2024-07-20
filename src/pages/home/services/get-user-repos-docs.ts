import { config } from '@/config'
import type { DocsRepos } from '../models'

export async function getUserReposDocs(token: string): Promise<DocsRepos[]> {
  const { api } = config

  const response = await fetch(`${api}/docs/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await response.json()

  return data
}
