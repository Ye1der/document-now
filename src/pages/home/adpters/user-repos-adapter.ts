import { Repository, RepositoryAdapted } from '../models'

export function userReposAdapter(data: Repository[]): RepositoryAdapted[] {
  return data.map((repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    branch: repo.default_branch,
    owner: repo.owner.login,
  }))
}
