import { config } from '@/config'
import { getLocal } from '@/utils'
import { Repository } from '../models'

export async function getRepos(): Promise<Repository[]> {
  const response = await fetch(`${config.api}/github/repos`, {
    headers: {
      Authorization: `Bearer ${getLocal('access_token')}`,
    },
  })

  if (!response.ok) {
    throw new Error('Error to get repos')
  }

  const data = await response.json()
  return data as Repository[]
}
