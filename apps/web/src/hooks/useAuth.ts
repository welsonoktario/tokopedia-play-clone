import { useState } from 'react'

import { doFetch } from '@/helpers/fetch'
import { UserType } from '@/types/user'

export const useAuth = () => {
  const [user, setUser] = useState<UserType | undefined>(undefined)

  const login = async (username: string) => {
    if (username) {
      try {
        const user = await doFetch<UserType>(`/users/${username}`)
        setUser(user)
      } catch (err) {
        console.log(err)
      }
    }
  }

  const logout = () => {
    if (user) {
      document.cookie = 'auth=; expires=' + new Date(0).toUTCString()
      setUser(undefined)
    }
  }

  return { user, setUser, login, logout }
}
