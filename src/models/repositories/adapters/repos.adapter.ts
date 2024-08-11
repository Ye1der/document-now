import { IReposRepository } from '../interfaces'
import { getRepos } from '@/services'

export const reposAdapter: IReposRepository = {
  getRepos: async (token: string, page: number, perPage: number) => {
    const response = await getRepos(token, page, perPage)

    return {
      lastPage: response.lastPage,
      nextPage: response.nextPage,
      repositories: response.repositories.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        branch: repo.default_branch,
        owner: repo.owner.login,
      })),
    }
  },
}
