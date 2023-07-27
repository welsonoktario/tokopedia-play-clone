import mongoose, { Schema } from 'mongoose'

export type UserType = {
  username: string
  avatar?: string
}

export const UserSchema = new Schema<UserType>({
  username: { type: String, required: true },
  avatar: { type: String, required: false },
})

export const User = mongoose.model<UserType>('User', UserSchema)
