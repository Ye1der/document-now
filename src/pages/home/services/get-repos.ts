import { config } from '@/config'
import { FectchRepos } from '../models'

// la idea es que el servicio no tenga solo se encargue de hacer la petición
// no de obtener el token
export async function getRepos(
  token: string,
  page: number = 1,
  perPage: number = 30
): Promise<FectchRepos> {
  const response = await fetch(
    `${config.api}/github/repos?page=${page}&per_page=${perPage}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  if (!response.ok) {
    throw new Error('Error to get repos')
  }

  const data = await response.json()
  return data
}
