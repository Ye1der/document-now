import { config } from '@/config'
import { Documents } from '@/models'

// la idea es que el servicio no tenga solo se encargue de hacer la petición
// no de obtener el token
export async function getDocs(token: string): Promise<Documents[]> {
  const response = await fetch(`${config.api}/docs/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Error to get docs')
  }

  const data = await response.json()
  return data
}

export async function getDocByReponame(
  token: string,
  reponame: string
): Promise<string> {
  const response = await fetch(`${config.api}/docs/user/${reponame}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  return await response.text()
}
