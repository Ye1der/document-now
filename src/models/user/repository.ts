import { IUserRepository } from './interfaces'
import { userAdapter } from './adapters/user.adapter'

function createUserRepository(adapter: IUserRepository): IUserRepository {
  return {
    getLoged: async (token: string) => {
      return await adapter.getLoged(token)
    },
  }
}

export const userRepository = createUserRepository(userAdapter)
