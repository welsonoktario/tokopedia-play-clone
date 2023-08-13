import { Container, Theme } from '@radix-ui/themes'
import { BrowserRouter } from 'react-router-dom'

import { Navbar } from '@/components'
import { useTheme } from '@/hooks'

import { AppRoutes } from './AppRoutes'

const App = () => {
  const theme = useTheme()

  return (
    <Theme
      accentColor="green"
      grayColor="mauve"
      radius="large"
      suppressHydrationWarning
    >
      <BrowserRouter>
        <Navbar />
        <Container mt="6">
          <AppRoutes />
        </Container>
      </BrowserRouter>
    </Theme>
  )
}

export default App
