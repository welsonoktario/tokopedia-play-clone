import { UserType } from './user'

export type CommentType = {
  id: string
  user: UserType
  comment: string
  timestamp: string
}
