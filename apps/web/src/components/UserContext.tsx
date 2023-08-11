import { UserType } from '@/types/user'
import { ReactNode, createContext, useState } from 'react'

export type UserContextType = {
  user?: UserType
  setUser: (user: UserType) => void
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | undefined>(undefined)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
