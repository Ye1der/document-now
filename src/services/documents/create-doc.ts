import { ICreateDoc, ITempDoc } from '@/models/documents'
import { config } from '@/config'

export async function createDoc(
  token: string,
  data: ICreateDoc
): Promise<ITempDoc> {
  const { api } = config
  const response = await fetch(`${api}/docs/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })

  const doc = await response.json()

  return doc
}
