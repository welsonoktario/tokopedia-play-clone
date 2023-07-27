import mongoose from 'mongoose'

import { CommentSchema, CommentType } from './comment-model'
import { ProductSchema, ProductType } from './product-model'

export type VideoType = {
  id: string
  thumbnailUrl: string
  product: ProductType[]
  comments: CommentType[]
}

export const VideoSchema = new mongoose.Schema<VideoType>({
  id: { type: String, required: true, unique: true },
  thumbnailUrl: { type: String, required: true },
  product: { type: [ProductSchema], default: [] },
  comments: { type: [CommentSchema], default: [] },
})

export const Video = mongoose.model<VideoType>('Video', VideoSchema)
