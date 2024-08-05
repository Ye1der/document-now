export interface User {
  id: number
  username: string
  email?: string
}

export interface UserAdapted {
  id: number
  username: string
}

export interface UserLocal extends User {
  token: string
}
