import { Schema, Types, model } from 'mongoose'

import { CommentSchema, CommentType } from './comment-model'
import { ProductSchema, ProductType } from './product-model'

export type VideoType = {
  thumbnailUrl: string
  user: Types.ObjectId
  products?: Types.DocumentArray<ProductType>
  comments?: Types.DocumentArray<CommentType>
}

export const VideoSchema = new Schema<VideoType>({
  user: { type: 'ObjectId', required: true, ref: 'User' },
  thumbnailUrl: { type: String, required: true },
  products: { type: [ProductSchema], required: false, default: [], _id: true },
  comments: { type: [CommentSchema], required: false, default: [], _id: true },
})

export const Video = model<VideoType>('Video', VideoSchema)
