import {
  Button,
  Dialog,
  DialogClose,
  Flex,
  Text,
  TextField,
} from '@radix-ui/themes'
import { FormEvent } from 'react'

type AuthDialogPropsType = {
  onAuthFormSubmit: (e: FormEvent<HTMLFormElement>) => void
  onUsernameChange: (username: string) => void
  validationError?: string
}

export const AuthDialog = ({
  onAuthFormSubmit,
  onUsernameChange,
  validationError = '',
}: AuthDialogPropsType) => {
  return (
    <Dialog.Content>
      <Dialog.Title>Welcome back!</Dialog.Title>
      <Dialog.Description mb="5">Sign-in to your account.</Dialog.Description>

      <form onSubmit={onAuthFormSubmit}>
        {validationError && (
          <Text size="1" color="red">
            {validationError}
          </Text>
        )}
        <TextField.Root color={validationError ? 'red' : 'green'}>
          <TextField.Slot>
            <Text size="2">Username</Text>
          </TextField.Slot>
          <TextField.Input
            onChange={(e) => onUsernameChange(e.target.value)}
            name="username"
            placeholder="Enter your username or create a new one"
            required
          />
          <TextField.Slot>
            <Button type="submit" variant="ghost">
              Sign-in
            </Button>
          </TextField.Slot>
        </TextField.Root>
      </form>

      <Flex mt="5" gap="3" justify="end">
        <DialogClose>
          <Button variant="surface">Close</Button>
        </DialogClose>
      </Flex>
    </Dialog.Content>
  )
}
