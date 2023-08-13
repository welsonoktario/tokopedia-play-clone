import { Box, Container, Flex, Heading } from '@radix-ui/themes'
import { Link } from 'react-router-dom'

import { AuthMenu } from './NavbarMenus/AuthMenu'
import { ThemeMenu } from './NavbarMenus/ThemeMenu'

export const Navbar = () => {
  return (
    <Container
      position="sticky"
      p="4"
      top="0"
      left="0"
      right="0"
      style={{ background: 'var(--mauve-2)', zIndex: 999 }}
    >
      <Box>
        <Flex width="100%" align="center" justify="between">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Heading color="green">Tokopedia Play (Clone)</Heading>
          </Link>
          <Flex gap="2">
            <AuthMenu />
            <ThemeMenu />
          </Flex>
        </Flex>
      </Box>
    </Container>
  )
}
