import { IReposRepository } from './interfaces'
import { reposAdapter } from './adapters/repos.adapter'

function createReposRepository(adapter: IReposRepository): IReposRepository {
  return {
    getRepos: async (token: string, page: number, perPage: number) => {
      return await adapter.getRepos(token, page, perPage)
    },
  }
}

export const reposRepository = createReposRepository(reposAdapter)
