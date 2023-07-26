import mongoose, { Schema } from 'mongoose'

type VideoType = {
  id: string
  title: string
  caption?: string
}

const VideoSchema = new Schema<VideoType>({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  caption: { type: String, required: false },
})

export const Video = mongoose.model<VideoType>('Video', VideoSchema)
