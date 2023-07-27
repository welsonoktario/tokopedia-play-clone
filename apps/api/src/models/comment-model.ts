import { Model, Schema, model } from 'mongoose'

export type CommentType = {
  username: string
  comment: string
  timestamp?: Date
}
type CommentModelType = Model<CommentType>
export const CommentSchema = new Schema<CommentType, CommentModelType>({
  username: { type: String, required: true },
  comment: { type: String, required: true },
  timestamp: { type: Date, required: false, default: Date.now },
})

export const Comment = model<CommentType, CommentModelType>('Comment', CommentSchema)
