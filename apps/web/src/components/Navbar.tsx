import { css } from '@linaria/core'
import { Box, Flex, Heading } from '@radix-ui/themes'
import { Link } from 'react-router-dom'

import { useAuth } from '@/hooks'

export const Navbar = () => {
  const { user } = useAuth()
  const linkStyle = css`
    text-decoration: none;
  `

  return (
    <Box position="sticky" p="4" top="0" left="0" right="0">
      <Box>
        <Flex direction="row" width="100%" align="center" justify="between">
          <Link to="/" className={linkStyle}>
            <Heading color="green">Tokopedia Play (Clone)</Heading>
          </Link>
          <Box>{user ? user.username : 'Sign-in'}</Box>
        </Flex>
      </Box>
    </Box>
  )
}
