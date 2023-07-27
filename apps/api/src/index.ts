import express from 'express'

import videoRoutes from '@routes/video-routes'

import { connectDb } from './config/db'

const app = express()
app.use(express.json())

app.use('/videos', videoRoutes)

connectDb().then((db) => {
  app.listen(process.env.APP_PORT, () => {
    console.info(
      `Server running on http://${process.env.APP_HOST}:${process.env.APP_PORT}`,
    )
  })

  app.get('/', (req, res) => {
    res.send('Helo world!')
  })
})
