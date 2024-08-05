import { User, UserAdapted } from '@/models'

export function userAdapter(user: User): UserAdapted {
  return {
    id: user.id,
    username: user.username,
  }
}
