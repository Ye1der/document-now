import { DocumentInterceptor } from '../models'
import { config } from '@/config'

export async function createRepoDoc(token: string, data: DocumentInterceptor) {
  const { api } = config
  const response = await fetch(`${api}/docs/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })

  // console.log(response)

  const doc = await response.json()

  return doc
}
