import express from 'express'

import { connectDb } from '@config/database'

import commentRoutes from '@routes/comment-routes'
import productRoutes from '@routes/product-routes'
import userRoutes from '@routes/user-routes'
import videoRoutes from '@routes/video-routes'

const app = express()
app.use(express.json())

app.use('/api', userRoutes)
app.use('/api', videoRoutes)
app.use('/api', productRoutes)
app.use('/api', commentRoutes)

connectDb().then((_db) => {
  app.listen(process.env.APP_PORT, () => {
    console.info(`Server running on http://${process.env.APP_HOST}:${process.env.APP_PORT}`)
  })
})
