import { useState } from 'react'

import { UserType } from '@/types/user'

export const useAuth = () => {
  const [user, setUser] = useState<UserType | undefined>(undefined)

  const login = async (username: string) => {
    setUser({
      id: '1',
      username,
    })
  }

  const logout = async () => {
    if (user) {
      setUser(undefined)
    }
  }

  return { user, setUser, login, logout }
}
