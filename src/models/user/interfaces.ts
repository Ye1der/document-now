export interface IUser {
  id: number
  username: string
  email?: string
}

export interface IUserAdapted {
  id: number
  username: string
  token: string
}

export interface IUserRepository {
  getLoged(token: string): Promise<IUserAdapted>
}
