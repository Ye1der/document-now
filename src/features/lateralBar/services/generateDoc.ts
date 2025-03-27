import { getLocal } from '@/utils'
import { IRepo } from './interfaces'

export async function generateDoc(repo: IRepo): Promise<string> {
  const token = getLocal('token')

  const result = await fetch('http://localhost:3000/api/v1/generate/doc', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(repo),
  })

  if (!result.ok) {
    console.log('Error al generar la documentacion ')
  }

  const data = await result.json()

  console.log(data)
  return data
}
