import mongoose, { Schema } from 'mongoose'

type UserType = {
  name: string
  email: string
  avatar?: string
}

const UserSchema = new Schema<UserType>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, required: false },
})

export const User = mongoose.model<UserType>('User', UserSchema)
