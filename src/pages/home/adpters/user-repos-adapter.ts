import { Repository, RepositoryAdapted } from '../models'

export function userReposAdapter(data: Repository[]): RepositoryAdapted[] {
  return data.map((repo) => ({
    id: repo.id,
    title: repo.name,
    description: repo.description || '',
    branch: 'main', // TODO: Ver como puedo obtener la rama del repositorio
  }))
}
