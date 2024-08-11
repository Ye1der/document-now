import { IUser, IUserRepository, IUserAdapted } from '../interfaces'
import { getUser } from '@/services'

export const userAdapter: IUserRepository = {
  getLoged: async (token: string): Promise<IUserAdapted> => {
    // usamos el servicio para obtener el usuario
    const user: IUser = await getUser(token)

    // adaptamos el usuario
    return {
      id: user.id,
      username: user.username,
      token,
    }
  },
}
