import { config } from '@/config'
import { IDocuments } from '@/models/documents'

export async function deleteDoc(
  token: string,
  id: number
): Promise<IDocuments> {
  const response = await fetch(`${config.api}/docs/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await response.json()
  return data as IDocuments
}
