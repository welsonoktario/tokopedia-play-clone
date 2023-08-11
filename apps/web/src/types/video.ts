import { CommentType } from "./comment"
import { ProductType } from "./product"
import { UserType } from "./user"

export type VideoType = {
  id: string
  thumbnailUrl: string
  user: UserType
  products: Array<ProductType>
  comments: Array<CommentType>
}
