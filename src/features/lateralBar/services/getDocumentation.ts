import { getLocal } from '@/utils'
import { IRepo } from './interfaces'
import { IDocumentation } from '@/models/documentation'

export async function getDocumentation(repo: IRepo): Promise<IDocumentation> {
  const token = getLocal('token')

  const result = await fetch(
    'http://localhost:3000/api/v1/docs/documentation',
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(repo),
      method: 'POST',
    },
  )

  if (!result.ok) {
    throw new Error('Error al obtener la ducumentacion de la api')
  }

  const data: IDocumentation = await result.json()

  // Indicamos que no hay que mostrar la documentacion aun, para poder animar su salida en secuencia
  return data
}
