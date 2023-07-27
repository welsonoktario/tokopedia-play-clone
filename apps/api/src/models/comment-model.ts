import mongoose, { Schema } from 'mongoose'

import { UserSchema, UserType } from './user-model'

export type CommentType = {
  user: UserType
  comment: string
  timestamp: Date
}

export const CommentSchema = new Schema<CommentType>({
  user: { type: UserSchema, required: true },
  comment: { type: String, required: true },
  timestamp: { type: Date, required: false, default: Date.now },
})

export const Comment = mongoose.model<CommentType>('Comment', CommentSchema)
