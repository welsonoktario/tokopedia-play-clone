import { EnterIcon, ExitIcon, PersonIcon } from '@radix-ui/react-icons'
import { Dialog, DropdownMenu, Flex, IconButton } from '@radix-ui/themes'
import { FormEvent, useEffect, useState } from 'react'

import { doFetch } from '@/helpers/fetch'
import { useAuth } from '@/hooks'
import { UserType } from '@/types'

import { AuthDialog } from '../Dialogs/AuthDialog'

export const AuthMenu = () => {
  const { user, setUser, login, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [username, setUsername] = useState('')
  const [validationError, setValidationError] = useState('')

  useEffect(() => {
    const username = document.cookie.replace(
      /(?:(?:^|.*;\s*)auth\s*\=\s*([^;]*).*$)|^.*$/,
      '$1',
    )

    if (!user) {
      login(username)
    }
  }, [])

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setValidationError('')

    if (username.includes(' ')) {
      setValidationError("Username can't contain space(s)")
    }

    if (!/^[a-z0-9]+$/.test(username)) {
      setValidationError(
        'Username can only contains lowercase alphanumeric (a-z and 0-9) characters',
      )
    }

    if (!validationError) {
      try {
        const user = await doFetch<UserType>('/auth/login', {
          method: 'POST',
          body: JSON.stringify({ username }),
          credentials: 'include',
        })

        setUser(user)
        setIsOpen(false)
      } catch (err: any) {}
    }
  }

  return (
    <DropdownMenu.Root modal={false} open={isOpen}>
      <DropdownMenu.Trigger onClick={() => setIsOpen(!isOpen)}>
        <IconButton variant="surface" size="3">
          <PersonIcon width="20" height="20" />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" variant="soft">
        <DropdownMenu.Group>
          {user && (
            <>
              <DropdownMenu.Item>
                <Flex gap="2" align="center">
                  <PersonIcon />
                  Profile
                </Flex>
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item
                onClick={() => {
                  logout()
                  setIsOpen(false)
                }}
              >
                <Flex gap="2" align="center" color="red">
                  <ExitIcon />
                  Sign-out
                </Flex>
              </DropdownMenu.Item>
            </>
          )}
          {!user && (
            <Dialog.Root>
              <DropdownMenu.Label>Welcome back!</DropdownMenu.Label>
              <Dialog.Trigger>
                <DropdownMenu.Item onClick={(e) => e.stopPropagation()}>
                  <Flex gap="2" align="center">
                    <EnterIcon />
                    Sign-in
                  </Flex>
                </DropdownMenu.Item>
              </Dialog.Trigger>
              <AuthDialog
                onAuthFormSubmit={handleSignIn}
                onUsernameChange={setUsername}
                validationError={validationError}
              />
            </Dialog.Root>
          )}
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
