import { User } from '@models/user-model'

export const getAllUsers = async () => {
  try {
    return await User.find()
  } catch (err: any) {
    throw new Error(err.message)
  }
}

export const getUserByUsername = async (username: string) => {
  try {
    const user = await User.findOne({ username })

    if (!user) {
      throw new Error('User data not found')
    }

    return user
  } catch (err: any) {
    throw new Error(err.message)
  }
}

export const insertUser = async (username: string, avatarUrl: string | undefined = undefined) => {
  try {
    const userExists = await User.findOne({ username })

    if (userExists) {
      throw new Error('User with provided username already exists')
    }

    const user = new User({
      username,
      avatarUrl,
    })

    return await user.save()
  } catch (err: any) {
    throw new Error(err.message)
  }
}
