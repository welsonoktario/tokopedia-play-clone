import loadable from '@loadable/component'
import { Theme } from '@radix-ui/themes'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Navbar } from '@/components'
import { useTheme } from '@/hooks'

const App = () => {
  const theme = useTheme()

  const HomePage = loadable(() => import('@/pages/Home'), {
    resolveComponent: (component) => component.HomePage,
  })
  const VideoPage = loadable(() => import('@/pages/Video'), {
    resolveComponent: (component) => component.VideoPage,
  })

  return (
    <Theme
      accentColor="green"
      grayColor="mauve"
      radius="large"
      suppressHydrationWarning
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="videos/:videoId" element={<VideoPage />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  )
}

export default App
