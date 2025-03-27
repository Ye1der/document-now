import { getLocal } from '@/utils'
import { IRepo } from './interfaces'

export async function existDoc(repo: IRepo): Promise<boolean> {
  const token = getLocal('token')

  const result = await fetch('http://localhost:3000/api/v1/docs/existDoc', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(repo),
    method: 'POST',
  })

  if (!result.ok) {
    throw new Error('Error al obtener la ducumentacion de la api')
  }

  return (await result.json()) as boolean
}
